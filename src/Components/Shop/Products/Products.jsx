import React from 'react'
import './Products.scss'
import Cards from '../Cards/Cards'

const Products = () => {
    return (

        <div className='product_container'>

            <div className='product_divisions'>

                <div className='product_divisions_faction'>

                        <h3>دسته ها</h3>
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
