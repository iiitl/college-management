import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from "./pages/home/Home.page.jsx"
import ComplaintForm from "./pages/complaint-form/complain-form.jsx"
const App = () => {
  return (
   <ComplaintForm/>
  )
}

export default App
