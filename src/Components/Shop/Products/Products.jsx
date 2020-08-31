import React from 'react'
import './Products.scss'
import Cards from '../Cards/Cards'

const Products = () => {
    return (

        <div className='product_container'>
            
            <div className="product_items">

                <div className="product_items_filter">فیلتر</div>
                <div className="product_items_cards">
                    <Cards />
                </div>

            </div>

            <div className='product_divisions'>

                <div className='product_divisions_faction'>دسته بندی ها</div>
                <div className='product_divisions_price'>قیمت</div>
                <div className='product_divisions_brands'>برندها</div>

            </div>
        </div>

    )
}

export default Products
