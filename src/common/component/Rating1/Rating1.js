import React, {useEffect, useState} from "react";
import DataTable from 'react-data-table-component';
import images from "../../images/1.png";
import images1 from "../../images/2.jpg";
import images2 from "../../images/3.jpg";
import images3 from "../../images/4.jpg";
import images4 from "../../images/5.jpg";
import images5 from "../../images/6.jpg";
import images6 from "../../images/7.jpg";
import images7 from "../../images/8.jpg";
import images8 from "../../images/9.jpg";
import images9 from "../../images/10.jpg";
import StarRateIcon from '@mui/icons-material/StarRate';
import {BookmarkAdd} from "@mui/icons-material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./Rating1.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import {useNavigate} from "react-router-dom";
// import {useLocation} from "react-router-dom";
import Film from '../pages/Film/Film'


function Rating1(val) {

    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getMovies();

    },[])
    const getMovies = () => {
            axios({
                method: 'get',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                headers: {
                    'X-RapidAPI-Key': '54da47d567msh0f41812adbf42f8p1ed808jsnd4cc42f06439',
                }
            })
                .then(function (response) {
                    console.log(response.data)
                    const array = [];
                    response.data?.map((val, index) => {
                        array.push({
                            id: 1,
                            name: <div onClick={()=> {navigate("/film/",{state: val.id})}}>{index+1+"."+val.title}</div>,
                            label:<div><StarBorderIcon/></div>,
                            email: <BookmarkAdd/>,
                            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />{val.rating}</div>,
                            images: <img src={val.thumbnail} width={45} height={67}/>,
                        })
                    })
                    setMovies(array);
                }).catch(function(error){
                console.log(error);
                });
    }


    const columns = [
        {
            name: '',
            selector: row => row.images,
            width: "5rem"
        },
        {
            name: 'Rank & Title',
            selector: row => row.name,
            width: "25rem"
        },
        {
            name: 'IMDb Rating',
            selector: row => row.imdbRating
        },
        {
            name: 'Your Rating',
            selector: row => row.label

        },
        {
            name: '',
            selector: row => row.email

        },

    ];
    const data = [
        {
            id: 1,
            name:'1. The Shawshank Redemption (1994)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images} width={45} height={67}/>,
        },
        {
            id: 2,
            name:'2. The Godfather (1972)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images1} width={45} height={67}/>,
        },
        {
            id: 3,
            name:'3. The Dark Knight (2008)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images2} width={45} height={67}/>,
        },
        {
            id: 4,
            name:'4. The Godfather Part II (1974)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images3} width={45} height={67}/>,
        },
        {
            id: 5,
            name:'5. 12 Angry Men (1957)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images4} width={45} height={67}/>,
        },
        {
            id: 6,
            name:"6. Schindler's List (1993)",
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images5} width={45} height={67}/>,
        },
        {
            id: 7,
            name:'7. The Lord of the Rings: The Return of the King (2003)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images6} width={45} height={67}/>,
        },
        {
            id: 8,
            name:'8. Pulp Fiction (1994)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images7} width={45} height={67}/>,
        },
        {
            id: 9,
            name:'9. The Lord of the Rings: The Fellowship of the Ring (2001)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images8} width={45} height={67}/>,
        },
        {
            id: 10,
            name:'10. The Good, the Bad and the Ugly (1966)',
            label:<div><StarBorderIcon/></div>,
            email: <BookmarkAdd/>,
            imdbRating: <div><FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fbff00",}} />9.2</div>,
            images: <img src={images9} width={45} height={67}/>,
        },
    ]





    const top100Films = [
        { label: 'Ranking', year: 1994 },
        { label: 'IMDb Rating', year: 1972 },
        { label: 'Release Date', year: 1974 },
        { label: 'Number Of Ratings', year: 2008 },
        { label: 'Your Rating', year: 1957 },
    ];

    return (
        <div>
           {/*<div className="combobox"> <Autocomplete*/}
           {/*    disablePortal*/}
           {/*    id="combo-box-demo"*/}
           {/*    options={top100Films}*/}
           {/*    sx={{ width: 300 }}*/}
           {/*    renderInput={(params) => <TextField {...params} label="Sort By" />}*/}
           {/*/></div>*/}
            <DataTable className="datatable"
            columns={columns}
                data={movies}
            ></DataTable>
        </div>
    )
}

export default Rating1;