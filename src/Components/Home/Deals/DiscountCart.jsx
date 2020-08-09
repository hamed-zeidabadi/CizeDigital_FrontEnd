import React from 'react'
import './DiscountCart.scss'
import CountDwonTimer from './CountDwonTimer'


const DiscountCart =(props)=>{



    //Function for Displaying Correct Number to Persian Format
    const numberToPersian=(number)=>{

      const persianNumber=  new Intl.NumberFormat("fa",{ useGrouping: false }).format(number)

      return persianNumber
    }


    return(

        <div className='discount_container'>

            <div className='discount_details'>

                <h3>{props.title}</h3>
                
                <div className='discount_details_price'>

                    <span className='discount_details_price_ins'>{numberToPersian(15000)}</span>
                    <span className='discount_details_price_del'>{numberToPersian(20000)}</span>
                    
                </div>

                <div className='discount_details_save_money'>
                   <span>تخفیف</span>
                   <span><span className='discount_details_save_money_amount'>{numberToPersian(5000)}</span>هزار تومن</span>
                </div>

                <CountDwonTimer />
            
            </div>

            <img
            className='discount_image'
             src={props.src}  alt={props.alt}/>


        </div>
    )


}

export default DiscountCart