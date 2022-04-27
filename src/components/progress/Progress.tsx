import React from 'react'
import progressRocket from '../../assets/Rocket.gif'
import s from './Progress.module.css'

export const Progress = ()=>{
    return (
        <div className={s.progress} >

            <img src={progressRocket} alt="rocket" />
         
        </div>
       
    )
}