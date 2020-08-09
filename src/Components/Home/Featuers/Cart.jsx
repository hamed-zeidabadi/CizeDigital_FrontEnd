import React from 'react'
import './Cart.scss'

import headfav from '../../../Images/headfav.jpg'

const Cart = () => {

    //Function for Displaying Correct Persian Number
    const numberToPersian=(number)=>{

        const persianNumber=  new Intl.NumberFormat("fa",{ useGrouping: false }).format(number)
  
        return persianNumber
      }

      
    return (

        <div className='featuers_cart'>

            <img className='' src={headfav} alt='headphone' />
            <p>هدفون خفن</p>
            <span className='featuers_cart_price'>{numberToPersian(18000)}</span>
            
        </div>
    )
}

export default Cart
