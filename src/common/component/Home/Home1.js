import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating1 from "../Rating1/Rating1";
import Divider from '@mui/material/Divider';
import Table from "../Table/Table";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Combobox from "react-widgets/Combobox";
import "./Home.css"
import ShareIcon from '@mui/icons-material/Share';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

// const top100Films = [
//     { label: 'Ranking', year: 1994 },
//     { label: 'IMDb Rating', year: 1972 },
//     { label: 'Release Date', year: 1974 },
//     { label: 'Number Of Ratings', year: 2008 },
//     { label: 'Your Rating', year: 1957 },
// ];


export default function Home1(data) {
    return (
        <Box>
            <Grid container spacing={2} columns={12}>
                <Grid item xs>
                    <Item>

                    </Item>
                </Grid>

                <Grid item xs={6}>
                    <Item >
                       <div>
                           <br/>
                           <br/>
                        <h3>IMDb Charts</h3>
                        <h2>IMDb Top 250 Movies</h2>
                        <p>IMDb Top 250 as rated by regular IMDb voters.</p>
                       <Divider/>

                           <div className="combobox1">Showing 250 Titles</div>
                           <div className="combobox"><ShareIcon/>SHARE</div>
                           <div className="combobox">
                               <Combobox
                               defaultValue="Sort By"
                               data={["Ranking", "IMDb Rating", "Release Date", "Number Of Ratings","Your Rating"]}
                           />;
                           </div>
                           <Rating1/>
                           {/*<Table/>*/}

                       </div>

                    </Item>

                </Grid>
                <Grid item xs>
                    <div>
                        <br/>
                        <br/>
                        <h3>You Have Seen</h3>
                        <h2>0/250 (0%)</h2>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox/>} label="Hide titles I've seen" />
                        </FormGroup>


                        <Divider/>
                    </div>
                    <br/>
                        <div>
                            <h3>IMDb Charts</h3>
                            <ol style={{ listStyle: 'none' }}>
                               <li>Box Office</li>
                                <li>Most Popular Movies</li>
                                    <li>Top 250 Movies</li>
                                        <li>Top Rated English Movies</li>
                                            <li>Most Popular TV Shows</li>
                                                <li>Top 250 TV Shows</li>
                                                    <li>Top Rated Indian Movies</li>
                                                        <li>Lowest Rated Movies</li>
                            </ol>
                        </div>
                        <Divider/>
                    <br/>
                        <div>
                            <h3>Top Rated Movies by Genre</h3>
                            <ol style={{ listStyle: 'none' }}>
                                <li> Action</li>
                                <li>Adventure</li>
                                <li>Animation</li>
                                <li>Biography</li>
                                <li>Comedy</li>
                                <li>Crime</li>
                                <li>Drama</li>
                                <li>Family</li>
                                <li>Fantasy</li>
                                <li>Family</li>
                                <li>Film-Noir</li>
                                <li>History</li>
                                <li>Horror</li>
                                <li>Music</li>
                                <li>Musical</li>
                                <li>Mystery</li>
                                <li>Romance</li>
                                <li>Sci-Fi</li>
                                <li>Sport</li>
                                <li>Thriller</li>
                                <li>War</li>
                                <li>Western</li>
                            </ol>

                        </div>
                </Grid>

                <Grid item xs>
                    <Item></Item>
                </Grid>

            </Grid>
        </Box>
    );
}