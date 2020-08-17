import React,{useState} from 'react'
import './ResNavbar.scss'
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import ShopingCart from "../ShopingCart/ShoppingCart"
import UserLogin from "../UserLogin/UserLogin"
import logoSite from "../../../../Images/mega_menu/home/output.png"

const ResNavbar = () => {


  //Managing BasketShop Modal

  const [openBasket,setOpenBasket]=useState(false);

  const HandleOpenBasket=()=>{

    setOpenBasket(!openBasket)

    const BasketContainer=document.querySelector('.basket_container')
    if (openBasket) {
      BasketContainer.classList.remove("basket_modal");
    } else {
      BasketContainer.classList.add("basket_modal");
    }

  }


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

           <UserLogin />
           <ShopingCart  HandleOpenBasket={HandleOpenBasket} />
          </div>
  
        </nav>
  
      </>

    )
}

export default ResNavbar
