import React from "react"
import Navbar from "./Navbar"
import Hello from "./Hello"
import AttendanceSystem from "./AttendanceSystem"

const AttendancePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hello></Hello>
      <AttendanceSystem></AttendanceSystem>
    </div>
  )
}

export default AttendancePage
