import React from 'react'

import './Features.scss'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 

const Features= () => {


    return(

        <div className='tabs'>

            <Tabs>

                <div className='tabs_container'>

                    <h2>کالاهای منتخب</h2>

                    <div className='tabs_container_tab'>
                        <Tab><a className="hvr-underline-from-center">محبوب ها</a></Tab>
                        <Tab><a className="hvr-underline-from-center">پرفروش ها</a></Tab>
                        <Tab><a className="hvr-underline-from-center">جدید ها</a></Tab>
                    </div>
                    

                </div>


                <div className='tabs_panel_container'>
                <Panel><p>Panel 1</p></Panel>
                <Panel><p>Panel 2</p></Panel>
                <Panel><p>Panel 3</p></Panel>
                </div>
               
                

            </Tabs>

        </div>

    
    )

}

   


export default Features