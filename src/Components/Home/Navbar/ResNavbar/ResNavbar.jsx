import React,{useState} from 'react'
import './ResNavbar.scss'
import { BsSearch } from "react-icons/bs";
import SideDrawer from "./SideDrawer"
import ShopingCartRes from "../ShopingCart/ShoppingCartRes"
import UserLogin from "../UserLogin/UserLogin"
import logoSite from "../../../../Images/mega_menu/home/output.png"
// import { Squash as Hamburger } from 'hamburger-react'

const ResNavbar = () => {



  const [isOpen, setIsOpen] = useState(false)

  //Managing BasketShop Modal

  const [openBaskets,setOpenBaskets]=useState(false);

  const HandleOpenBaskets=()=>{

    setOpenBaskets(!openBaskets)

    const BasketContainers=document.querySelector('.basket_containers')
    if (openBaskets) {
      BasketContainers.classList.remove("basket_modals");
    } else {
      BasketContainers.classList.add("basket_modals");
    }

  }


    return (
      
        <>
    
        <nav className="header_home_res_nav">

          <div className='header_home_res_nav_right'> 

              <div className='header_home_res_nav_right_menu'>

                 <SideDrawer />

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
           <ShopingCartRes  HandleOpenBaskets={HandleOpenBaskets} />
          </div>
  
        </nav>
  
      </>

    )
}

export default ResNavbar
