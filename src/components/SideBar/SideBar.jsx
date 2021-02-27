import React from 'react'
import {HiSun} from 'react-icons/hi';
import {Sidebar,Logo,ThemeIcon,Avatar} from './sideBarSyle';

function SideBar() {
    return (
        <Sidebar>
            <Logo/>
            <ThemeIcon>
                <HiSun onClick={()=>console.log("Clicado!")}/>
            </ThemeIcon>
            <Avatar>
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </Avatar>
        </Sidebar>
    )
}

export default SideBar
