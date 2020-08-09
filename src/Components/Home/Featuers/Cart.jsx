import React from 'react'


const Cart = () => {

    //Function for Displaying Correct Number to Persian Format
    const numberToPersian=(number)=>{

        const persianNumber=  new Intl.NumberFormat("fa",{ useGrouping: false }).format(number)
  
        return persianNumber
      }

      
    return (
        
        <div>

            <img className='' src='' alt='' />
            <p></p>
            <span className=''>{numberToPersian(18000)}</span>
            
        </div>
    )
}

export default Cart
