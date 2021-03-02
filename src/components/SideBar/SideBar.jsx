import React,{useContext} from 'react'
import {HiSun} from 'react-icons/hi';
import {BsMoon} from 'react-icons/bs';
import { GlobalContext } from '../../context/GlobalContext';
import {Sidebar,Logo,ThemeIcon,Avatar} from './sideBarSyle';
import { darkTheme,lightTheme} from '../../themes/index';

function SideBar() {

    const {theme,setTheme} = useContext(GlobalContext);

    function handeThemeChange(){
        theme===darkTheme?setTheme(lightTheme):setTheme(darkTheme);
    }
    return (
        <Sidebar>
            <Logo/>
            <ThemeIcon onClick={handeThemeChange}>
                {theme===darkTheme?<HiSun/>:<BsMoon/>}
            </ThemeIcon>
            <Avatar>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </Avatar>
        </Sidebar>
    )
}

export default SideBar
