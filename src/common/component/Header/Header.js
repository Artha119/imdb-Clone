import React from "react";
import {AppBar, Toolbar, styled, Box, Typography, InputBase} from "@mui/material";
import {Menu, BookmarkAdd, ExpandMore} from '@mui/icons-material';
import {logoURL} from '../constants/constant';
import HeaderMenu from "./HeaderMenu";
import {useState} from "react";

const StyledToolBar = styled(Toolbar)`
background: #121212;
min-height: 56px !important;
 padding: 0 115px !important;
  justify-content: space-between;
  & >  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
background: #FFFFFF;
  height: 30px;
  width: 55%;
  border-radius: 5px;
  
`
const Logo = styled('img')({
    width: 64
})
const Header = () => {
    const [open, setOpen] = useState(null);

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    const handleClose = () => {
        setOpen(null)
    }

    return (
        <AppBar>
            <StyledToolBar>
      <Logo src ={logoURL} alt="logo"/>
                <Box onClick={handleClick}>
                    <Menu/>
                    <Typography>Menu</Typography>
                </Box>

                <HeaderMenu open={open} handleClose={handleClose}/>

                <InputSearchField
                    placeholder="Search IMDb"
                    inputProps={{ 'aria-label': 'search' }}
                />

                <Typography>IMDb<Box component="span">Pro</Box></Typography>
           <Box>
               <BookmarkAdd/>
               <Typography>Watchlist</Typography>

           </Box>

                <Typography>Sign In</Typography>

                <Typography>En</Typography>
                <ExpandMore/>

            </StyledToolBar>
        </AppBar>

    )
}

export default Header;