import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from "./pages/home/Home.page.jsx"
import ResponsiveAppBar from "./components/Exam Management/Sidebar.jsx"
import ResponsiveDrawer from "./components/Exam Management/Drawer.jsx"
import MultiActionAreaCard from "./components/Exam Management/View_Results.jsx"
import MultipleSelect from "./components/Exam Management/Last_part.jsx"
import Demo from "./components/Exam Management/Calendar.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/Grades" element={<><ResponsiveAppBar/><ResponsiveDrawer/><MultipleSelect/></>}/>
<Route path="/View_Results" element={<><ResponsiveAppBar/><ResponsiveDrawer/><MultiActionAreaCard/></>} />
<Route path="/DashBoard" element={<><ResponsiveAppBar/><ResponsiveDrawer/>< Demo/></>}/>

      </Routes>
    </Router>
  )
}

export default App
