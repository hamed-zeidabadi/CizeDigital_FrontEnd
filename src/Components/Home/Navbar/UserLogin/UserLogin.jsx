import React from 'react'
import { Reoverlay } from 'reoverlay';
import { FaUserAlt } from "react-icons/fa";
import LoginModal from './LoginModal'

const UserLogin=()=>{


    const Login=()=>{

        Reoverlay.showModal(LoginModal)
        
    }

    return(

        <>

         <a href='#'
            onClick={Login}
            className='header_home_nav_left_icons_user'>
             <FaUserAlt />
         </a>

        </>
    )




}



export default UserLogin