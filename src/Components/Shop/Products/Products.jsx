import React from 'react'
import './Products.scss'
import Cards from '../Cards/Cards'
import Faction from '../Faction/Faction'
import Brands from '../Brands/Brands'



const Products = () => {
    return (

        <div className='product_container'>

            <div className='product_divisions'>

                 <h3>بر اساس مدل</h3>

            {/* in bottoms component (Faction & brands) css style availabe in 
             prodcus.scss file !  */}

                     <Faction />

                     <h3 className='product_divisions_brands_title'>بر اساس برند</h3>
                     <Brands />

                <div className='product_divisions_price'>
                  <h3>براساس قیمت</h3>
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
