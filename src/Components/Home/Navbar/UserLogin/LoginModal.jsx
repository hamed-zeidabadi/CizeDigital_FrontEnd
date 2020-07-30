import React from 'react'
import { ModalWrapper} from 'reoverlay';
import 'reoverlay/lib/ModalWrapper.css';
import './LoginModal.scss'
import { FaUserCircle } from "react-icons/fa";


const LoginModal =()=>{


    return(

        <ModalWrapper animation='zoom'>
            <div  className=' header_home_nav_left_icons_user_modal'>
                <FaUserCircle />
                <p>ایجاد اکانت برای خرید از سایت،آگاهی سریع از تخفیف ها، اطلاع از آخرین اخبار محصولات</p>
                <form>
                    <input  type='text' placeholder='نام کاربری'/>
                    <input  type='text' placeholder='پسورد'/>
                    <button type='submit'>ورود</button>
                    <button type='submit'>ثبت نام</button>
                </form>
            </div>
        </ModalWrapper>
    )

}


export default LoginModal