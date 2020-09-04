import React from 'react'

import './Features.scss'
import { Tabs, Tab, Panel } from '@bumaga/tabs' 

const Features= () => {


    return(

        <div className='tabs'>

            <Tabs >

                <div className='tab_container'>
                <Tab><button>Tab 1</button></Tab>
                <Tab><button>Tab 2</button></Tab>
                <Tab><button>Tab 3</button></Tab>
                </div>

                <Panel><p>Panel 1</p></Panel>
                <Panel><p>Panel 2</p></Panel>
                <Panel><p>panel 3</p></Panel>

            </Tabs>

        </div>

    
    )

}

   


export default Features