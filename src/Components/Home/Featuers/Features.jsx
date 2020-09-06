import React from 'react'

import './Features.scss'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 

const Features= () => {


    return(

        <div className='tabs'>

            <Tabs >

                <div className='tabs_container'>

                    <h2>کالاهای منتخب</h2>

                    <div className='tabs_container_tab'>
                        <Tab><a>Tab 1</a></Tab>
                        <Tab><a>Tab 2</a></Tab>
                        <Tab><a>Tab 3</a></Tab>
                    </div>
                    

                </div>


                <Panel><p>Panel 1</p></Panel>
                <Panel><p>Panel 2</p></Panel>
                <Panel><p>Panel 3</p></Panel>
                

            </Tabs>

        </div>

    
    )

}

   


export default Features