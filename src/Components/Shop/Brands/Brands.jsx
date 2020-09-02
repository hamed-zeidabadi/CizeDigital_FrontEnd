import React from 'react'
import "animate.css/animate.min.css"

import jbl from '../../../Images/Shop/brands/JBL.png'
import skullcandy from '../../../Images/Shop/brands/Skullcandy.png'
import hifiman from '../../../Images/Shop/brands/hifiman.png'
import razer from '../../../Images/Shop/brands/Razer.png'
import senheiser from '../../../Images/Shop/brands/sennheiser.png'
import apple from '../../../Images/Shop/brands/apple.png'

const Brands = () => {
    return (

        <div className='product_divisions_brands'>

                
                <div className='product_divisions_brands_item'>
                    <img className='animate__animated animate__pulse'
                     src={jbl} alt="aks"/>
                    <p>جی بی ال</p>
                    <p>JBL</p>
                </div>
                
                <div className='product_divisions_brands_item'>
                    <img className='animate__animated animate__pulse'
                     src={skullcandy} alt="aks"/>
                    <p>اسکل کندی</p>
                    <p>Skullcandy</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img className='animate__animated animate__pulse'
                     src={hifiman} alt="aks"/>
                    <p>هایفی من</p>
                    <p>Hifiman</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img  className='animate__animated animate__pulse'
                    src={razer} alt="aks"/>
                    <p>ریزر</p>
                    <p>Razer</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img  className='animate__animated animate__pulse'
                    src={senheiser} alt="aks"/>
                    <p>سنهایزر</p>
                    <p>Senheiser</p>
                </div>

                <div className='product_divisions_brands_item'>
                    <img className='animate__animated animate__pulse'
                     src={apple} alt="aks"/>
                    <p>اپل</p>
                    <p>Apple</p>
                </div>

        </div>
    )
}

export default Brands
