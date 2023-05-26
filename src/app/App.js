import logo from '../logo.svg'
import React from "react";
import './App.css';
import Home from "../common/component/Home/Home";
import {Routes, Route, Navigate} from "react-router-dom";
import Header from "../common/component/Header/Header";
import Footer from "../common/component/Footer/Footer";
// import Imdb from "../common/component/pages/imdb/Imdb";
import Film from "../common/component/pages/Film/Film"
function App() {
  return (
      <div className="p-3 mb-2 bg-black text-white">
          <Header/>
<br/>
          <div >
              <Routes>
                  <Route path="*" element={<Navigate to="/home"/>}/>
                  <Route path={"/film"} element={  <Film/>} key={'film'}/>
                  <Route path={"/home"} element={  <Home/>} key={'home'}/>
              </Routes>
              <br/>
              <br/>


          </div>
          <Footer/>



      </div>


  );
}

export default App;
