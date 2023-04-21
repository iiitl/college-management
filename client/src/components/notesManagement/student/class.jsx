import React from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import data from './course_data';
import './class.css'

const openSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="250px";
}
const closeSidebar=()=>{
    document.getElementById("student_class--sidebar").style.width="0";
}

const Navbar =()=>{
    return(
        <nav className="student_class--navbar">
            <div className="student_class--menu" onClick={openSidebar}>&#9776;</div>
            <div className="student_class--title">IIITL Classroom</div>
            <div className="student_class--profile">Y</div>
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
        <div id="student_class--sidebar">
            <span className="student_class--closesidebar" onClick={closeSidebar}>&times;</span>
                <ul className="student_class--classlist">
                    {a}
                </ul>
        </div>
    )
}

const a=data.map(item=>{
    return (<Side key={item.id} {...item} />)
})
const Class=()=>{
    const location = useLocation();
    const Note=(props)=>{
        return(
            <div className="student_class-note">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="img"></img>
                <div className="student_class-notes-content">
                    <p>{props.content}</p>
                    <p><a href="#">{props.chapter}</a></p>
                </div>
            </div>
        )
    }
    const Notes= (props)=>{
        let notes;
        notes=props.value.material.map(
            (item)=>{
                return(
                    <Note  key={item.key} content={item.content} chapter={item.chapter} />
                )
            }
        )
        return(<>{notes}</>)
    }
    const Assignment=(props)=>{
        return(
            <div className="student_class-assignment">
                <img src="https://static.thenounproject.com/png/3632613-200.png" alt="image" />
                <div className="student_class-assignment-deatils">
                    <p><a href="#">{props.a_name}</a></p>
                    <p>{props.d_date}</p>
                </div>
            </div>
        )
    }
    const Assignments=(props)=>{
        let a_name=' ';
        let d_date=' ';
        let assigns=''
        if(props.value.assignments[0].complete){
            a_name="No due Assignments";
            assigns=[
                <Assignment key="1" a_name={a_name} d_date={d_date} />
            ]
        }
        else{
            assigns=props.value.assignments.map(
                (item)=>{
                    a_name=item.name
                    d_date=item.due
                    return(
                        <Assignment key={item.key} a_name={a_name} d_date={d_date}></Assignment>
                    )
                }
            )
            
        }
        return(
            <>
            {assigns}
            </>
        )
    }
    return(
        <>
        <Navbar />
        <div className="student_class-page">
            <Sidebar />
            <div className="student_class">
                <div className="student_class--hero">
                {location.state.props.title}<p className="student_class-branch">{location.state.props.branch}<br />{location.state.props.faculty}</p>
                </div>
                <div className="student_class-sections">
                       <div className="student_class-notes">
                        <h4>NOTES</h4>
                           <Notes value={location.state.props}/>
                       </div>
                       <div className="student_class-assignments">
                       <h4>ASSIGNMENTS</h4>
                           <Assignments value={location.state.props}/>
                       </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Class;