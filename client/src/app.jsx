import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import CallToAction from "./components/homepage/callToAction/CallToAction.jsx"
import HomePage from "./pages/home/Home.page.jsx"

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path={"/"} element={<><HomePage /><CallToAction /></>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App
