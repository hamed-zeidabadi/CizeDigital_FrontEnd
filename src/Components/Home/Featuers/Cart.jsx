import React from 'react'
import './Cart.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Cart = (props) => {

    //Function for Displaying Correct Persian Number
    const numberToPersian=(number)=>{

        const persianNumber=  new Intl.NumberFormat("fa",{ useGrouping: false }).format(number)
  
        return persianNumber
      }

      
    return (

        <ScrollAnimation
        className='animate__animated'
        animateIn="animate__fadeIn" 
        style={{animationDuration:'1.5s'}}>

            <div className='featuers_cart'>

                <img src={props.Image} alt='headphone' />
                <p>{props.Title}</p>
                <span className='featuers_cart_price'>{numberToPersian(18000)}</span>
                
            </div>

        
        </ScrollAnimation>
    )
}

export default Cart
