import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { MdKeyboardVoice } from 'react-icons/md'
import SearchStyled from './SearchStyled'
import ButtonStyled from './ButtonStyled'
import HideButtonStyled from './HideButtonStyled'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { actionTypes } from './reducer';
import { useStateValue} from './StateProvider';

function Search({hidebuttons=false}) {
    const[input,setInput] = useState("");
    const history = useHistory(); 
    const[{},dispatch] = useStateValue(); 

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            searchTerm:input,
        })

        history.push('/search');
    };

    return (
        <form className="search">
        <SearchStyled className="search_input">
            <AiOutlineSearch className="search-icon"/>
            <input type="text" value= {input} onChange={(e)=> setInput(e.target.value)}/>
            <MdKeyboardVoice className="mic-icon"/>
        </SearchStyled>
        {!hidebuttons? 
        (<ButtonStyled className="hide_buttons">
            <Button type='submit' variant="outlined" onClick={search}>
                Google Search
            </Button>
            <Button variant="outlined">
                I'm Feeling Lucky
            </Button>
        </ButtonStyled>) :
        (<HideButtonStyled >
            <Button type='submit' variant="outlined" onClick={search}>
                Google Search
            </Button>
            <Button variant="outlined">
                I'm Feeling Lucky
            </Button>
        </HideButtonStyled>)}
        
        </form>
    )
}

export default Search
