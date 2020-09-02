import React from 'react'

import overear from '../../../Images/Shop/faction/over-ear.png'
import earphone from '../../../Images/Shop/faction/earphone.png'
import handsfree from '../../../Images/Shop/faction/handsfree.png'
import headset from '../../../Images/Shop/faction/headset.png'
import onear from '../../../Images/Shop/faction/onear.png'
import musicplayer from '../../../Images/Shop/faction/musicplayer.png'
import acc from '../../../Images/Shop/faction/acc.png'
import amp from '../../../Images/Shop/faction/amp.png'
import dac from '../../../Images/Shop/faction/dac.png'





const Faction = () => {

    return (

        <div className='product_divisions_faction'>

                  <div className='product_divisions_faction_item'>
                        <img src={earphone} alt="aks"/>
                        <p>ایرفون</p>
                        <p>EarPhone</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={onear} alt="aks"/>
                        <p>روی گوش</p>
                        <p>Onear</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={overear} alt="aks"/>
                        <p> اطراف گوش</p>
                        <p>Over Ear</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={musicplayer} alt="aks"/>
                        <p>موزیک پلیر</p>
                        <p>Music Player</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={handsfree} alt="aks"/>
                        <p>هندزفری</p>
                        <p>HandsFree</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={headset} alt="aks"/>
                        <p>هدست</p>
                        <p>Headset</p>
                    </div>

                    <div className='product_divisions_faction_item'>
                        <img src={acc} alt="aks"/>
                        <p>تجهیزات جانبی</p>
                        <p>Accessories</p>
                    </div>


                    <div className='product_divisions_faction_item'>
                        <img src={dac} alt="aks"/>
                        <p>داک هدفون</p>
                        <p>Dac</p>
                    </div>


                    <div className='product_divisions_faction_item'>
                        <img src={amp} alt="aks"/>
                        <p>آمپ هدفون</p>
                        <p>Amp</p>
                    </div>
            
        </div>
    )
}

export default Faction
