import React from 'react'
import './Cards.scss'
import {useSelector} from 'react-redux'
import ShopCard from '../Card/ShopCard'


const Cards = () => {

    const products = useSelector(
         state => state.ProductReducer.ProductsShopData);
         

    return (

        <div className='cards_container'>

            {/* <Card title='هدفون' price='200 هزار تومن' image={head1}/> */}

                       {  products.map((item) => (
                            <ShopCard
                              id={item.id}
                              title={item.title}
                              image={item.image}
                              price={item.price}
                            />
                          ))
                       }
            
        </div>
    )
}

export default Cards
