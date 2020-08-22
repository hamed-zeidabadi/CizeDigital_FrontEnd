import React from 'react'
import './CountDwonTimer.scss'
import Timer from 'react-compound-timer'
import { BsClockHistory } from "react-icons/bs";
import "./MediaQueries.scss";

function CountDwonTimer() {



    return (

        <div className='countdwon_timer'>

                <p>زمان پایان :</p>

            <Timer
            initialTime={79000000}
            direction="backward">

                <div  className='countdwon_timer_time_container'>
                    
                     
                    <span><Timer.Seconds /></span>
                    <span><Timer.Minutes /></span>
                    <span><Timer.Hours /></span>
                    <BsClockHistory />

                </div>
              

            </Timer>
                    
        </div>
    )
}

export default CountDwonTimer
