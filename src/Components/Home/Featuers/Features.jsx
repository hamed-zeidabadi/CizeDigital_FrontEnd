import React,{useState,useEffect} from 'react'
import './Features.scss'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import Favorites from './Favorites' 
import BestSeller from './BestSeller'
import Newest from './Newest'





const Features= () => {

        const [index, setIndex] = useState(0)
        
        // use setIndex as you want
        // for example force to second tab in initial render

        useEffect(() => {
          setIndex(1)
        }, [])


    

    return(

        <div className='tabs' >

            <Tabs state={[index,setIndex]}>

                <div className='tabs_container'>

                    <h2>کالاهای منتخب</h2>

                    <div className='tabs_container_tab'>

                        <Tab > 

                         <a
                         className= 'hvr-underline-from-center white'
                         //اضافه کردن خاصیت زیر برای زمانی است که کاربر روی تب
                         //کلیک کرده و تب به صورت اکتیو و خط زیر دار نمایش داده شود
                         href='#fav_tab'
                         >محبوب ها</a>

                         </Tab>
                         
                         <Tab> 

                         <a
                            className= 'hvr-underline-from-center white'
                            href='#sell_tab'>پرفروش ها</a>

                         </Tab>

                        <Tab> 

                         <a
                           className= 'hvr-underline-from-center white'
                           href='#new_tab'>جدیدها</a>

                         </Tab>

                    </div>

                </div>


                <div className='tabs_panel_container'>

                    <Panel><Favorites/></Panel>
                    <Panel><BestSeller/></Panel>
                    <Panel><Newest/></Panel>

                </div>
               
                

            </Tabs>

        </div>

    
    )

}

   


export default Features