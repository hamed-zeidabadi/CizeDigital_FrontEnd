import React from 'react'
import { ModalWrapper} from 'reoverlay';
import './LoginModal.scss'
import 'reoverlay/lib/ModalWrapper.css';
import { FaUserCircle } from "react-icons/fa";


const LoginModal =()=>{


    return(

        <ModalWrapper animation='zoom'>
            <div  className=' header_home_nav_left_icons_user_modal'>
                <FaUserCircle />
                ورود کاربر
            </div>
        </ModalWrapper>
    )

}


export default LoginModal