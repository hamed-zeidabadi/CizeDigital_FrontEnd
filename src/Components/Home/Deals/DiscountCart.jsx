import React from 'react'
import './DiscountCart.scss'


const DiscountCart =(props)=>{



    return(

        <div className='discount_container'>

            <div className='discount_details'>

                <h3>{props.title}</h3>
                
                <div className='discount_details_price'>

                   <span className='discount_details_price_ins'>15000</span>
                    <span className='discount_details_price_del'>20000</span>
                    
                </div>

                <div className='discount_details_save_money'>
                   <span>تخفیف</span>
                   <span><span className='discount_details_save_money_amount'>5000</span>هزار تومن</span>
                </div>

                <span>

                </span>

            </div>

            <img
            className='discount_image'
             src={props.src}  alt={props.alt}/>


        </div>
    )


}

export default DiscountCart