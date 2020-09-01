import React from 'react'
import './Products.scss'
import Cards from '../Cards/Cards'

const Products = () => {
    return (

        <div className='product_container'>

            <div className='product_divisions'>

            <div className='product_divisions_faction'>
            
            <ul>
                <li> <a href=''>هدفون ها</a> </li>
                <li> <a href=''>اسپیکر</a> </li>
                <li> <a href=''>کیس</a> </li>
                <li> <a href=''>محافظ صفحه</a> </li>
                <li> <a href=''>گیمینگ</a> </li>
                <li> <a href=''>پاور</a> </li>
                <li> <a href=''>کابل ها</a> </li>
                <li> <a href=''>لوازم جانبی</a> </li>
            </ul>

            </div>


            <div className='product_divisions_price'>قیمت</div>
            <div className='product_divisions_brands'>برندها</div>

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
