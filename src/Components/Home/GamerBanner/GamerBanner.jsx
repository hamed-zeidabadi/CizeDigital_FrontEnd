import React from 'react'
import "./GamerBanner.scss"

import dual from "../../../Images/gamer_banner/dual.png"

const GamerBanner = () => {

    return (

        <div className='gamer_banner_container'>

            <div className='gamer_banner_text_container'>

              <p className="gamer_banner_text_title">گیمرهای حرفه ای</p>
              <p className=" gamer_banner_text_discount">تا 30 درصد برای بروزرسانی تجهیزات تخفیف بگیرید</p>
              <a className='btn effect'><span>فروشگاه</span></a>

            </div>
           
            <img className='gamer_banner_image' src={dual}/>

        </div>
    )
}

export default GamerBanner
