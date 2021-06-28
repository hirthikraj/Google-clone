import React, {useState} from 'react'
import { useStateValue } from './StateProvider';
import useGoogleSearch from './useGoogleSearch';
// import Response from './Response';
import SearchPageStyled from './SearchPageStyled';
import SearchPageHeaderStyled from './SearchPageHeaderStyled';
import { Link } from 'react-router-dom';
import Search from '../components/Search'
import './SearchPage.css'
import { CgMenuGridO } from 'react-icons/cg';
import { Avatar } from '@material-ui/core';
import { AiOutlineSearch,AiOutlineBook,AiOutlineShopping } from 'react-icons/ai'
import {  BsNewspaper,BsImage } from 'react-icons/bs';
import { RiVideoLine,RiMapPin2Line } from 'react-icons/ri'
import { FiMoreVertical,FiSun,FiMoon } from 'react-icons/fi'
import { MdFlight } from 'react-icons/md';
import { VscGraph } from 'react-icons/vsc'

 
function SearchPage() {
    const[{searchTerm}] = useStateValue(); 
    const { data } = useGoogleSearch(searchTerm);
    const[openMore,setOpenMore] = useState(false); 
    const[darkMode,setDarkMode] = useState(false);
    // const data = Response;
    console.log(data);

    const HandleOnClick = () => {
        setOpenMore(!openMore);
        console.log(openMore);
    }
    return (
        <SearchPageStyled className="searchPage">
            <SearchPageHeaderStyled className="searchPage_header">
            <Link to="/" >
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" className="google-icon" alt="Google clone" />
            </Link>
            <div className="header_left">
            <Search hidebuttons/>
            </div>
            <div className="header_right">
                {!darkMode?<FiSun className="darkMode-icon" onClick = {()=>setDarkMode(!darkMode)}/>:<FiMoon className="darkMode-icon"  onClick = {()=>setDarkMode(!darkMode)}/>}
            <CgMenuGridO className="menu-icon"/>
            <Avatar className="avatar"/>
            </div>
            </SearchPageHeaderStyled>
            <div className="searchpage_opttionsrow ">
            <div className="searchPage_options ">
            <Link  className="active"><AiOutlineSearch className="icon"/> All</Link>
            <Link><BsNewspaper className="icon"/>News</Link>
            <Link><BsImage className="icon"/> Images</Link>
            <Link><AiOutlineBook className="icon"/> Books</Link>
            <Link><RiVideoLine className="icon"/>Videos</Link>
            <div className="dropdown" >
            <div className="drowpdown_menu" onClick={HandleOnClick}><FiMoreVertical className="icon"/> More</div>
            {!openMore?(<div className="dropdown_content">
                <ul>
                <li><Link to="/"><RiMapPin2Line className="icon"/>Maps</Link></li>
                    <li><Link to="/"><AiOutlineShopping className="icon"/>Shopping</Link></li>
                    <li><Link to="/"><MdFlight className="icon"/>Flight</Link></li>
                    <li><Link to="/"><VscGraph className="icon"/>Finance</Link></li>
                </ul>
            </div>):(<div className="dropdown_content unhide_dropdown">
                <ul>
                    <li><Link to="/"><RiMapPin2Line className="icon"/>Maps</Link></li>
                    <li><Link to="/"><AiOutlineShopping className="icon"/>Shopping</Link></li>
                    <li><Link to="/"><MdFlight className="icon"/>Flight</Link></li>
                    <li><Link to="/"><VscGraph className="icon"/>Finance</Link></li>
                </ul>
            </div>)}
            </div>
            </div>
            <div className="search_settings">
            <Link>Settings</Link>
            <Link className="tools">Tools</Link>
            </div>
            </div>
            <div className="underline"></div>
            <div className="searchPage_body">
            <p className="searchResultTime">{`About ${data?.searchInformation.formattedTotalResults} results (${data?.searchInformation.formattedSearchTime} seconds)`}</p>
               {
                  data?.items.map((item)=>(
                    <div className="searchPageResult">
                        <a href={item.link} target="blank">https://{item.displayLink}</a>
                        <a href={item.link} target="blank"><h2>{item.title}</h2></a>
                        <p>{item.snippet}</p>
                    </div>
                  ))
               }
            </div>
        </SearchPageStyled>
    )
}

export default SearchPage;