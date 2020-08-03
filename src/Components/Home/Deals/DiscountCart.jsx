import React from 'react'
import './DiscountCart.scss'


const DiscountCart =(props)=>{



    return(

        <div className='discount_container'>

            <div className='discount_details'>

                <h3>{props.title}</h3>
                
                <p>قیمت</p>

                <span>
                    <p></p>
                    <p></p>
                </span>

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