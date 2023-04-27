import React from 'react'
import Data from './Data.jsx'
import { useState,useEffect } from 'react'

function Card(props){
    const cardslist = Data.map((item) => {
        return (
            <li > 
                {item.list}
            </li>
        )
    })
    return(
        <div className='services-div'>
            <div className='services-card-head'>
            <h1>{props.mainHead}</h1></div>
            <ul>
                {props.list.map(item=>{
                    return(
                        <li className='services-card-list'>
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Card