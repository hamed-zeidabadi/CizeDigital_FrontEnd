import React from 'react'
import './Products.scss'
import Cards from '../Cards/Cards'
import Faction from '../Faction/Faction'


const Products = () => {
    return (

        <div className='product_container'>

            <div className='product_divisions'>

                 <h3>بر اساس مدل</h3>

                  {/* in bottom component (Faction) css style availabe in 
                     prodcus.scss file !  */}

                        <Faction />

                <div className='product_divisions_price'>
                  <h3>براساس قیمت</h3>
                </div>

                <div className='product_divisions_brands'>

                    <h3>برندها</h3>
                    <ul>
                        <li> <a href=''>Boss</a> </li>
                        <li> <a href=''>Senhiser</a> </li>
                        <li> <a href=''>Beats</a> </li>
                        <li> <a href=''>Audio Technica</a> </li>
                        <li> <a href=''>Klipesch</a> </li>
                       
                    </ul>

                </div>

            </div>
            
            <div className="product_items">

                <div className="product_items_filter">فیلتر</div>
                <div className="product_items_cards">
                    <Cards />
                </div>

            </div>

     
        </div>

    )
}

export default Products
