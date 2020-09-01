import React from 'react'
import './ShopCard.scss'
import { FaRegListAlt} from "react-icons/fa";
import { FaRegHeart} from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { FaCompressAlt } from "react-icons/fa";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const Cart = (props) => {


    // useEffect(() => {

    //     const element=document.querySelector('.el_one')
    //     // element.classList.remove('.el_*');
    //     // element.style['animation']='fadeOut'
        
    //   });


    return (

    <div>

        <ScrollAnimation
          className='animate__animated'
          animateIn="animate__bounceIn" 
          style={{animationDuration:'1.3s'}}>

            <div className='cart_container'>

                <img src={props.image} alt='product-image'/>
                <p>{props.title}</p>
                <p>{props.price}</p>


                    <div className='icons '>

                    <a className='animate__animated el_one'> <BsBag />
                        <span className='span'>سبد خرید</span>
                        </a>

                      
                        <a className='animate__animated el_two'> <FaRegHeart />
                        <span className='span span_heart'>اضافه به علاقه مندی ها</span>
                        </a>

                        <a className='animate__animated el_theree'> <FaRegListAlt />
                        <span className='span'>مشخصات</span>
                        </a>

                        <a className='animate__animated el_four'> <FaCompressAlt />
                        <span className='span'>مقایسه</span>
                        </a>

                       
                       

                    </div>

                </div>

       
        </ScrollAnimation>
            
    </div>
    )
}

export default Cart
