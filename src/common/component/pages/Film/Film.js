import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVideo} from "@fortawesome/free-solid-svg-icons";
import {faImages} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player';
import "../imdb/Imdb.css";
import {faBorderAll} from "@fortawesome/free-solid-svg-icons";
import {faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faChartLine} from "@fortawesome/free-solid-svg-icons";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {Divider} from "@mui/material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {BookmarkAdd} from "@mui/icons-material";
import DataTable from "react-data-table-component";
import {useLocation} from "react-router-dom";



export default function Film () {
    const state = useLocation()
    const [moviesA, setMoviesA] = useState([]);
    useEffect(()=>{
        console.log(state.state)
        getMovie();
    },[])

    const getMovie = () => {
        axios({
            method: 'get',
            url: 'https://imdb-top-100-movies.p.rapidapi.com/'+state.state,
            headers: {
                'X-RapidAPI-Key': '54da47d567msh0f41812adbf42f8p1ed808jsnd4cc42f06439',
            }

        })
            .then(function (response){
                console.log(response.data);
                setMoviesA(response.data);
            }).catch(function(error){
            console.log(error);
        })
    }
    return(

        <div>
        <div>
            <div className="containerA">
                <div className="containerB">

                    <div className="containerX">
                        <p className="text-white fs-1 Naming">{moviesA.title}</p>
                        <p className="text-secondary fs-6 Naming">1994 R 2h 22m</p>
                    </div>

                </div>

                <div className="subContainerA">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="p-2 bd-highlight">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">
                                <FontAwesomeIcon icon={faShareNodes} style={{color: "#ffffff",}} />
                            </a></div>
                        <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">
                            <FontAwesomeIcon icon={faBorderAll} style={{color: "#ffffff",}} /><span/>&nbsp;All Topics</a></div>
                        <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">IMDbPro</a></div>
                        <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#">Trivia</a></div>
                        <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#">User reviews</a></div>
                        <div className="p-2 bd-highlight"><a className="text-white nav-link" aria-current="page" href="#">Cast & crew</a></div>
                    </div>
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <div className="p-2 bd-highlight">
                            <a className="nav-link disabled" aria-current="page" href="#">POPULARITY</a>
                            <button type="button" className="btn btn d-flex">
                                <FontAwesomeIcon icon={faChartLine} size="xl" style={{color: "#c22424",}} />
                                <p className="text-white">&nbsp;65&nbsp;<FontAwesomeIcon icon={faCaretDown} style={{color: "#5f5959",}} />&nbsp;1</p>
                            </button></div>
                        <div className="p-2 bd-highlight">
                            <a className="nav-link disabled" aria-current="page" href="#">YOUR RATING</a>
                            <button type="button" className="btn btn d-flex">
                                <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#4c7fd6",}} />
                                <p className="text-white">&nbsp;Rate</p>
                            </button> </div>
                        <div className="p-2 bd-highlight"><a className="nav-link disabled" aria-current="page" href="#">IMDb RATING</a>
                            <button type="button" className="text-white btn btn d-flex">
                                <FontAwesomeIcon icon={faStar} size="xl" style={{color: "#fff700",}} />&nbsp;{moviesA.rating}<br/>27M
                            </button></div>


                    </div>
                </div>





            </div>


<div className="containerYoutube">
    <div>
        <img src={moviesA.image} width={350} height={480}/>
    </div>
    <div className="leftB-boxYoutube">
        <ReactPlayer
            width='900px'
            height='490px'
            url={moviesA.trailer}
            config={{
                youtube: {
                    playerVars: {showinfo: 1}
                },
                facebook: {
                    appId: '12345'
                }
            }}
        />
    </div>
    <div className="right-boxYoutube">
        <div className="top-boxYoutube">
            <button type="button" className="btn btn-dark w-100 h-100"><FontAwesomeIcon icon={faVideo} size="xl"
                                                                                        style={{color: "#ffffff",}}/>
                <div><b>5 Videos</b></div>
            </button>
        </div>

        <div className="bottom-boxYoutube">
            <button type="button" className="btn btn-dark w-100 h-100"><FontAwesomeIcon icon={faImages} size="xl"
                                                                                        style={{color: "#ffffff",}}/>
                <div><b>99+ Photos</b></div>
            </button>
        </div>
    </div>
</div>
        </div>
            <div className="flex1">
<div className="containerC">
    <button type="button" className="btn btn-dark">{moviesA.genre}</button>
    <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">{moviesA.description}</a></div>
    <hr/>
    <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">Director</a>
        &nbsp;<a href="#" className="link-underline-dark">{moviesA.director}</a></div>
    <hr/>
    <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">Writers</a>
        &nbsp;<a href="#" className="link-underline-dark">{moviesA.writers}</a> &nbsp;<a href="#" className="link-underline-dark"></a></div>
    <hr/>
    <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">Stars&nbsp;</a><a href="#" className="link-underline-dark">
        Tim Robbins</a>&nbsp;<a href="#" className="link-underline-dark">Morgan Freeman</a>&nbsp;<a href="#" className="link-underline-dark">Bob Gunton</a>
    </div>
    <hr/>

    <div className="p-2 bd-highlight"><a className="text-white nav-link" href="#" tabIndex="-1" aria-disabled="true">IMDbpro See production, box office & company info
    </a></div>

</div>
                <br/>
                <div>

                    <div className="div">
                        <button><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} />
                        &nbsp;Add to Watchlist<br/>
                        <p>&nbsp;Added By 1.4M users</p></button>
                    </div>

                    <br/>

                    <div className="button2">
                        <p><a href="#" className="link-underline-dark">10.7K User reviews</a></p>
                        &nbsp;&nbsp;<p><a href="#" className="link-underline-dark">169 Critic reviews</a></p>
                    </div>
                    <p><a href="#" className="link-underline-dark">82 Metascore</a></p>



                </div>
            </div>
        </div>

    )
}