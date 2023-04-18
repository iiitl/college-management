import React from "react";
import data from './course_data';
import Class from "./class";
import {Link, useNavigate} from 'react-router-dom';
import './Course.css';
const openSidebar=()=>{
    document.getElementById("student_course--sidebar").style.width="250px";
    document.querySelector('.student_course-cards').style.marginLeft="250px";
}
const closeSidebar=()=>{
    document.getElementById("student_course--sidebar").style.width="0";
    document.querySelector('.student_course-cards').style.marginLeft="0";
}

const Navbar =()=>{
    return(
        <nav className="student_course--navbar">
            <div className="student_course--menu" onClick={openSidebar}>&#9776;</div>
            <div className="student_course--title">IIITL Classroom</div>
            <div className="student_course--profile">Y</div>
        </nav>
    )
}
const Side=(props)=>{
    const navigae = useNavigate();
    const handlebar = () => {
        navigae('/class',{state:{props}})};
    return(
        <li onClick={handlebar}>{props.title}</li>
    )
}
const Sidebar=()=>{
    return(
        <div id="student_course--sidebar">
            <span className="student_course--closesidebar" onClick={closeSidebar}>&times;</span>
                <ul className="student_course--classlist">
                    {a}
                </ul>
        </div>
    )
}

const a=data.map(item=>{
    return (<Side key={item.id} {...item} />)
})
const Card =(props)=>{
        const navigate = useNavigate();
        const handleClick = () => {
            navigate('/class',{state:{props}})};
    return(
        <>
        <ul>
         <div className="student_course--card">
            <div className="student_course-container">
              <div className="student_course-content">
                <button className="student_course-btn" onClick={handleClick}>View</button>
              </div>
            </div>
            <div className="student_course-informations-container">
              <h2 className="student_course-title">{props.title}</h2>
              <p className="student_course-sub-title">Batch - {props.branch}</p>
              <p className="student_course-faculty">Faculty - {props.faculty}</p>
              <div className="student_course-more-information">
                    <div className="student_course-assignment">
                        <div className="student_course-assignbox info">
                           <p>{props.assignments[0].complete? "No due Assignments":<a href="#">{props.assignments[0].name}</a>}</p>
                        </div>
                    </div>
               </div>
            </div>

         </div>
        </ul>
        </>
    )
}
const courseCards=data.map(card =>{
    return (<Card key={card.id}  {...card} />)
})

const Course = () => {
    return(
        <>
        <Navbar />
        <section className="student_course">
        <Sidebar />
        <div className="student_course-cards"> {courseCards}</div>
       
        </section>
        </>
    )
}
export default Course;