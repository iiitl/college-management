import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from "./pages/home/Home.page.jsx"
import LoginForm from "./components/homepage/LoginForm/Login.jsx"
import AttendancePage from "./pages/Attendance/Attendance.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/LoginForm"} element={<LoginForm/>}/>
        <Route path={"attendance"} element={<AttendancePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
