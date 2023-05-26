import React, {useState} from "react";
import Home from "./common/component/Home/Home.js";
import axios from "axios";

function Axios () {

    const [home, setHome] = useState([]);

    useEffect(()=> {
        getStudent();
    })

    const getStudent = () => {
        axios({
            method: 'get',
            url:""
        })
            .then(function (response){
                console.log(response.data)
            });
    }

    return (
        <div>
       <div>
           <Home data={}/>
       </div>

        </div>
    )
}

export default Axios;