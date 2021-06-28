import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineClose,AiFillHome } from 'react-icons/ai'
import { Avatar } from '@material-ui/core';
import Navbarstyled from '../components/Navbarstyled';
import HomeStyled from '../components/Homestyled';
import Search from '../components/Search'
import { FcMenu } from 'react-icons/fc'
import SideMenuStyled from '../components/SideMenuStyled';
import { MdSettings } from 'react-icons/md';
import { IoIosHelpCircle } from 'react-icons/io'
import { MdFeedback } from 'react-icons/md'

function Home() {
const[openMenu,setOpenMenu] = useState(false);
const[active,setActive] = useState(false);
const handleClick = () => {
    setOpenMenu(!openMenu);
}    

return (
        <HomeStyled>
            <Navbarstyled className="app_Header">
                {/* For Mobile */}
                <FcMenu className ="burgerMenu" onClick={handleClick}/>
                <Link className ={`mobileIcon ${!active?'active':''}`} onClick={()=> setActive(!active)} >All</Link>
                <Link className ={`mobileIcon ${active?'active':''}`} onClick={()=> setActive(!active)}>Images</Link>
                {/* for desktop */}
                <div className="navbar_desktop">
                <Link path="/gmail" className="desktopmenu">Gmail</Link>
                {/* Link */}
                <Link path="/gmail"  className="desktopmenu">Images</Link>
                {/* Menu icon */}
                <CgMenuGridO className="menu-icon"/>
                {/* Avatar */}
                <Avatar className="avatar"/>
                </div>
            </Navbarstyled>
            <div className="app_Body">
                {/* Google logo */}
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" className="google-icon" alt="Google clone" />
                {/* search */}
                <Search />
            </div>
            <SideMenuStyled active={openMenu}>
             <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" className="google-icon" alt="Google clone" />
            <AiOutlineClose className="close-icon" onClick={handleClick} />
            {openMenu?(<div className="topMenus">
            <div className="Item"><AiFillHome className="menuItem"/><span>Home</span></div>
            <div className="Item"><MdSettings className="menuItem"/><span>Settings</span></div>
            <div className="Item"><IoIosHelpCircle className="menuItem"/><span>Help</span></div>
            <div className="Item"><MdFeedback className="menuItem"/><span>Send feedback</span></div>
            </div>):''}
            </SideMenuStyled>
            
        </HomeStyled>
    )
}

export default Home
