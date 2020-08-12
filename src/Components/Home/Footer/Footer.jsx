import React from 'react'
import "./Footer.scss"
import { FaGithubAlt, FaInstagram, FaTwitter ,FaYoutube,FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (

        <footer className='footer_container'>
            
            {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">

                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    class="shape-fill">
                 </path>

            </svg> */}

            <div className='footer_top'>

                <div className='footer_top_right'>
                    <h3>سایز دیجیتال</h3>
                    <p>برای شما که سخت پسندید...</p>
                    <p>ما بهترین هدفون ها را گردآوردی کرده ایم</p>
                    <p>ایمیل :example@fellan.com</p>
                    <p>شماره تماس : 091200000000</p>
                    <p>شماره بین الملل : 09822200000</p>

                </div>


                <div className='footer_top_ceneter_right'>

                </div>

                <div className='footer_top_center_left'>

                </div>

                <div className='footer_top_left'>

                </div>

            </div>


            <div className='footer_bottom'>

                <div className='footer_bottom_right'>

                <div className='footer_bottom_right_social_media'>

                    <h5>ما را دنبال کنید</h5>

                    <nav className="footer_bottom_right_social_media_icons'">
                        <ul>
                            <li>
                            <FaGithubAlt />
                            </li>
                            <li>
                            <FaInstagram />
                            </li>
                            <li>
                            <FaTwitter />
                            </li> 
                            <li>
                            <FaYoutube />
                            </li>
                        </ul>
                    </nav>

                </div>

                </div>


                <div className='footer_bottom_left'>

                 <div className="footer_bottom_left_container">

                     <div className="footer_bottom_left_copyright">
                        <ul>
                            <li> <FaRegCopyright /> </li>
                            <li>تمامی حقوق برای   
                            <a href='https://github.com/hamed-zeidabadi' target='blanck'> حامد</a>
                            و <a href='https://github.com/amin-da' target='blanck'> امین </a>
                            محفوظ است</li>
                        </ul>
                     </div>

                    <div className="footer_bottom_left_base_links">
                        <ul>
                            <li > <a href='#'>شرایط استفاده </a></li>
                            <li className='footer_bottom_left_base_links_after'> <a href='#'>حقوق کاربران</a></li>
                        </ul>
                     </div>

                </div>

                </div>

            </div>
            

        </footer>
    )
}

export default Footer
