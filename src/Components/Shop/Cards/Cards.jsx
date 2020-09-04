import React from 'react'
import './Cards.scss'
import Card from '../Card/ShopCard'

import head1 from "../../../Images/Shop/1.jpg"
import head2 from "../../../Images/Shop/2.jpg"
import head3 from "../../../Images/Shop/3.jpg"
import head4 from "../../../Images/Shop/4.jpg"
import head5 from "../../../Images/Shop/5.jpg"
import head6 from "../../../Images/Shop/6.jpg"
import head7 from "../../../Images/Shop/7.jpg"
import head8 from "../../../Images/Shop/8.jpg"
import head9 from "../../../Images/Shop/9.jpg"
import head10 from "../../../Images/Shop/10.jpg"
import head11 from "../../../Images/Shop/11.jpg"
import head12 from "../../../Images/Shop/12.jpg"




const Cards = () => {

    return (

        <div className='cards_container'>

            <Card title='هدفون' price='200 هزار تومن' image={head1}/>
            <Card title='هدفون' price='200 هزار تومن' image={head2}/>
            <Card title='هدفون' price='200 هزار تومن' image={head3}/>
            <Card title='هدفون' price='200 هزار تومن' image={head4}/>
            <Card title='هدفون' price='200 هزار تومن' image={head7}/>
            <Card title='هدفون' price='200 هزار تومن' image={head6}/>
            <Card title='هدفون' price='200 هزار تومن' image={head12}/>
            <Card title='هدفون' price='200 هزار تومن' image={head5}/>
            <Card title='هدفون' price='200 هزار تومن' image={head8}/>
            <Card title='هدفون' price='200 هزار تومن' image={head9}/>
            <Card title='هدفون' price='200 هزار تومن' image={head10}/>
            <Card title='هدفون' price='200 هزار تومن' image={head11}/>
            
        </div>
    )
}

export default Cards
