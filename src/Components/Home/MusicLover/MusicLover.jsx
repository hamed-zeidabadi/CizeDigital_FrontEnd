import React from 'react'
import "./MusicLover.scss"

// import dual from "../../../Images/gamer_banner/dual.png"
import dual from "../../../Images/headphone3.png"

const MusicLover = () => {

    return (

        <div className='gamer_banner_container'>

            <div className='gamer_banner_text_container'>

              <p className="gamer_banner_text_title">عاشقان موسیقی</p>
              <p className=" gamer_banner_text_discount">تا 30 درصد برای بروزرسانی تجهیزات تخفیف بگیرید</p>
              <a className='btn effect'><span>فروشگاه</span></a>

            </div>
           
            <img className='gamer_banner_image' src={dual}/>

        </div>
    )
}

export default MusicLover
