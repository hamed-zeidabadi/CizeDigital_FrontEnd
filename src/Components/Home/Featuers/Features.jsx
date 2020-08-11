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


        const [active,setActive]=useState(true)

        const activeTabHandler=(e)=>{

            e.preventDefault()
            setActive(!active)
            alert('hiii');
            
        }
    

    return(

        <div className='tabs'>

            <Tabs state={[index,setIndex]}>

                <div className='tabs_container'>

                    <h2>کالاهای منتخب</h2>

                    <div className='tabs_container_tab'>

                        <Tab > 
                         <a
                         className= {(active ?'hvr-underline-from-center white'
                         :'hvr-underline-from-center red')}
                         onClick={activeTabHandler}
                         >محبوب ها</a></Tab>
                         
                         <Tab> 
                         <a
                            className= {(active ?'hvr-underline-from-center white'
                            :'hvr-underline-from-center red')}
                         onClick={activeTabHandler}>پرفروش ها</a>
                         </Tab>

                        <Tab> 
                         <a
                           className= {(active ?'hvr-underline-from-center white'
                           :'hvr-underline-from-center red')}
                         onClick={activeTabHandler}>جدیدها</a>
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