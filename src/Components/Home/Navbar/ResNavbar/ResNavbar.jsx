import React from 'react'
import './ResNavbar.scss'
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import logoSite from "../../../../Images/mega_menu/home/output.png"

const ResNavbar = () => {
    return (
      
        <>
    
        <nav className="header_home_res_nav">

          <div className='header_home_res_nav_right'> 

              <div className='header_home_res_nav_right_menu'>

                <a href='#' >
                      <FaBars />
                  </a>

                  <a href='#' >
                      <BsSearch />
                  </a>

              </div>

             <div className='header_home_res_nav_right_siteIcon'>

              <img  src={logoSite}/>

             </div>

            
          </div>

          
          <div className='header_home_res_nav_left'>


          </div>
  
        </nav>
  
      </>

    )
}

export default ResNavbar
