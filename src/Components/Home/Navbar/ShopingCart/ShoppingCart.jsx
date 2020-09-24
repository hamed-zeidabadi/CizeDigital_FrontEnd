import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { FaShoppingCart } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import './ShoppingCart.scss'



const ShopingCart =(props)=>{

  console.log(props);

  const [data,setData]=useState([])

 
    useEffect(() => {
      
      setData(props.items)

      
    }, [data])
  

  let addedItems = props.items.length ?
            (  
               data.map(item=>{
                 
                    return(
                       
                        <li className="" key={item.id}>

                            <div className="item-img"> 
                                   <img src={item.image} alt={item.image} className=""/>
                            </div>
                                
                              <div className="item-desc">
                                  <span className="title">{item.title}</span>
                                        
                                     <p><b>Price: {item.price}$</b></p> 
                                    <p>
                                      <b>Quantity: {item.quantity}</b> 
                                  </p>       
                               </div>
                                    
                        </li>
                         
                    )
                })
            ):

             (
              <h4>سبد خرید شما خالی است</h4>
             )


    return(

        <div>

          <a href='#' className='header_home_nav_left_icons_cart'
          onClick={()=>props.HandleOpenBasket()}><FaShoppingCart /></a> 

          <div className='basket_container animate__animated'>

                 <div className='basket_cart_header'>

                    <a className='basket_cart_header_exit_button'
                    onClick={()=>props.HandleOpenBasket()}
                    ><BsX /></a>
                    <h3 className='basket_cart_header_title'>سبد خرید شما</h3>
            
                 </div>


                  <div className="basket_cart_container">
                      <div className="cart">
                          <ul className="collection">
                              {addedItems}
                          </ul>
                      </div>       
                  </div>
                  
                  <a href='#' className='basket_start_shoping'>شروع خرید</a>

             </div>

        </div>


       )

        
    }



const mapStateToProps = (state)=>{
  return{

      items: state.ProductReducer.ProductsShopData.addedItems,
      //addedItems: state.addedItems
  }
}


const mapDispatchToProps = (dispatch)=>{
  return{
      // removeItem: (id)=>{dispatch(removeItem(id))},
      // addQuantity: (id)=>{dispatch(addQuantity(id))},
      // subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShopingCart)