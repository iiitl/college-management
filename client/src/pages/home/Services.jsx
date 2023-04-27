import React from 'react'
import Logo from "../../asset/svg/EducationLogo.png"
import  "./Home.module.scss"
import Card from './Card'
import Data from './Data'
const Services = () => {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                img ={item.img}
                mainHead={item.mainHead}
                list={item.list}
            />
        )
    })   
  return (
    <div>
        <h1 className='services-main-head'>Modules of College Management System</h1>
        <img className='services-main-logo' src={Logo}/>
        <div className='services-main-div'>
            {cards}
        </div>
    </div>
  )
}

export default Services