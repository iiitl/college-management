import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Course from "../../components/notesManagement/student/course"
import Class from "../../components/notesManagement/student/class"
const ClassroomPage = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Course />} />
      <Route path="/class" element={<Class />} />
    </Routes>
  </Router>
  )
}

export default ClassroomPage
