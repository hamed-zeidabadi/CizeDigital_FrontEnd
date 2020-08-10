import React,{useState,useEffect} from 'react'
import './Features.scss'
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import Favorites from './Favorites' 
import BestSeller from './BestSeller' 





const Features= () => {

        const [index, setIndex] = useState(0)
        
        // use setIndex as you want
        // for example force to second tab in initial render

        useEffect(() => {
          setIndex(1)
        }, [])
    

    return(

        <div className='tabs'>

            <Tabs state={[index,setIndex]}>

                <div className='tabs_container'>

                    <h2>کالاهای منتخب</h2>

                    <div className='tabs_container_tab'>
                        <Tab><a className="hvr-underline-from-center">محبوب ها</a></Tab>
                        <Tab><a className="hvr-underline-from-center">پرفروش ها</a></Tab>
                        <Tab><a className="hvr-underline-from-center">جدید ها</a></Tab>
                    </div>

                </div>


                <div className='tabs_panel_container'>

                    <Panel><Favorites/></Panel>
                    <Panel><BestSeller/></Panel>
                    <Panel><p>Panel 3</p></Panel>

                </div>
               
                

            </Tabs>

        </div>

    
    )

}

   


export default Features