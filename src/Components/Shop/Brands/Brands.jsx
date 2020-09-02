import React from 'react'

import jbl from '../../../Images/Shop/brands/JBL.png'
import beyer from '../../../Images/Shop/brands/beyer.png'
import hifiman from '../../../Images/Shop/brands/hifiman.png'
import razer from '../../../Images/Shop/brands/Razer.png'
import senheiser from '../../../Images/Shop/brands/sennheiser.png'
import apple from '../../../Images/Shop/brands/apple.png'

const Brands = () => {
    return (

        <div className='product_divisions_brands'>

                
                <div className='product_divisions_brands_item'>
                    <img src={jbl} alt="aks"/>
                    <p>جی بی ال</p>
                    <p>JBL</p>
                </div>
                
                <div className='product_divisions_brands_item'>
                    <img src={beyer} alt="aks"/>
                    <p>بایر دینامیک</p>
                    <p>Beyer</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img src={hifiman} alt="aks"/>
                    <p>هایفی من</p>
                    <p>Hifiman</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img src={razer} alt="aks"/>
                    <p>ریزر</p>
                    <p>Razer</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img src={senheiser} alt="aks"/>
                    <p>سنهایزر</p>
                    <p>Senheiser</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img src={apple} alt="aks"/>
                    <p>اپل</p>
                    <p>Apple</p>
                </div>

        </div>
    )
}

export default Brands
