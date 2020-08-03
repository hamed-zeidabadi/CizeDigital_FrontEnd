import React from 'react'
import './DiscountCart.scss'


const DiscountCart =(props)=>{



    return(

        <div className='discount_container'>

            <div className='discount_details'>

                <p>sss</p>
                <p>www</p>
                <p>zzz</p>
                <p>rrr</p>

            </div>

            <img
            className='discount_image'
             src={props.src}  alt={props.alt}/>


        </div>
    )


}

export default DiscountCart