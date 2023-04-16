import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

import HomePage from "./pages/home/Home.page.jsx"
import ComplaintPage from "./pages/complaint/complaint.page.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/complaint"} element={<ComplaintPage />} />
      </Routes>
    </Router>
  )
}

export default App
