import React from 'react'
import "./SideDrawer.scss"
import { FaBars } from "react-icons/fa";
import { BsX } from "react-icons/bs";

const SideDrawer = (props) => {

    const OpenDrawer=props.OpenDrawer

    return (

        <div>

            <a className="header_home_res_nav_right_menu_icon"
            onClick={()=>props.HandleOpenDrawer()}>
              { OpenDrawer ? <BsX /> 
              : <FaBars  /> }
            </a>

            <div className='drawer_container  animate__animated'>

                <div className=''>

                <a className=''
                onClick={()=>props.HandleOpenDrawer()}
                ><BsX /></a>
                

                </div>

             </div>

        </div>
    )
}

export default SideDrawer
