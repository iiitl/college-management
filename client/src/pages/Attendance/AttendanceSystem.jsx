import React, { useState } from "react";
import Calendar from "react-calendar";

import "./AttendanceSystem.css";
import "./Cal.css";

import AttendanceManagementSystem from "./AttendanceManagementSystem";

const AttendanceSystem = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [totalClassesAttended, setTotalClassesAttended] = useState(0);
  const [totalLeavesTaken, setTotalLeavesTaken] = useState(0);
  const [showCalendar, setShowCalendar] = useState(true);

  // Handle course selection
  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  // Handle month selection
  const handleMonthChange = (date) => {
    setSelectedMonth(date);
    calculateAttendance();
    setShowCalendar(true);
    console.log(
      typeof selectedMonth.toLocaleString("default", { month: "long" })
    );
    console.log(selectedCourse);
    // console.log(filteredData);
    // calculateAttendance();
  };

  // Function to calculate total classes attended and total leaves taken
  const calculateAttendance = () => {
    // Replace this logic with actual API calls or data manipulation based on your data source
    // Example: Assuming the data is fetched from an API and is in the following format
    const attendanceData = [
      {
        course: "WDAD",
        month: "March",
        classesAttended: 12,
        leavesTaken: 3,
      },
      {
        course: "CTP",
        month: "March",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "Linux",
        month: "March",
        classesAttended: 15,
        leavesTaken: 0,
      },
      {
        course: "DBMS",
        month: "March",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "PC",
        month: "March",
        classesAttended: 10,
        leavesTaken: 5,
      },
      {
        course: "Sports",
        month: "March",
        classesAttended: 10,
        leavesTaken: 7,
      },
      {
        course: "WDAD",
        month: "April",
        classesAttended: 12,
        leavesTaken: 3,
      },
      {
        course: "CTP",
        month: "April",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "Linux",
        month: "April",
        classesAttended: 15,
        leavesTaken: 0,
      },
      {
        course: "DBMS",
        month: "April",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "PC",
        month: "April",
        classesAttended: 10,
        leavesTaken: 5,
      },
      {
        course: "Sports",
        month: "April",
        classesAttended: 10,
        leavesTaken: 7,
      },
      {
        course: "WDAD",
        month: "May",
        classesAttended: 12,
        leavesTaken: 3,
      },
      {
        course: "CTP",
        month: "May",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "Linux",
        month: "May",
        classesAttended: 15,
        leavesTaken: 0,
      },
      {
        course: "DBMS",
        month: "May",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "PC",
        month: "May",
        classesAttended: 10,
        leavesTaken: 5,
      },
      {
        course: "Sports",
        month: "May",
        classesAttended: 10,
        leavesTaken: 7,
      },
      {
        course: "WDAD",
        month: "June",
        classesAttended: 12,
        leavesTaken: 3,
      },
      {
        course: "CTP",
        month: "June",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "Linux",
        month: "June",
        classesAttended: 15,
        leavesTaken: 0,
      },
      {
        course: "DBMS",
        month: "June",
        classesAttended: 14,
        leavesTaken: 1,
      },
      {
        course: "PC",
        month: "June",
        classesAttended: 10,
        leavesTaken: 5,
      },
      {
        course: "Sports",
        month: "June",
        classesAttended: 10,
        leavesTaken: 7,
      },
    ];

    const filteredData = attendanceData.filter(
      (data) =>
        data.course === selectedCourse &&
        data.month ===
          selectedMonth.toLocaleString("default", { month: "long" })
    );
    if (filteredData.length > 0) {
      setTotalClassesAttended(filteredData[0].classesAttended);
      setTotalLeavesTaken(filteredData[0].leavesTaken);
    } else {
      setTotalClassesAttended(100);
      setTotalLeavesTaken(0);
    }
  };
  const [attActive, setAttActive] = useState("activeTab");
  const [leaveActive, setLeaveActive] = useState("leaveTab");
  const [p2, setP2] = useState("parent2");
  const [p1, setP1] = useState("");
  const handleClick1 = () => {
    setAttActive("activeTab");
    setLeaveActive("leaveTab");
    setP1("");
    setP2("parent2");
  };
  const handleClick2 = () => {
    setAttActive("attTab");
    setLeaveActive("activeTab");
    setP1("parent1");
    setP2("");
  };

  return (
    <div className="container-flui">
      <div className="Tabs">
        <span className="attTab" id={attActive} onClick={handleClick1}>
          Attendance Tab
        </span>
        <span
          className="leaveTab"
          id={leaveActive}
          onClick={handleClick2}
        >
          Leave Tab
        </span>
      </div>
      <div className="cards">
        <div className="card2">
          <div className="t1" id="impBorder">
            <i class="fa-solid fa-user-graduate fa-2xl"></i>
          </div>
          <div className="t2">
            <div className="TotalCnt">47</div>
            <div className="total">Total Students</div>
          </div>
        </div>
        <div className="card1">
          <div className="b1" id="impBorder">
            <img
              src="https://seekicon.com/free-icon-download/import_1.svg"
              id="imp"
              alt=""
              height="20px"
              width="20px"
            />
          </div>
          <di v className="b2">
            <div className="stCnt">42</div>
            <div className="present">Present Today</div>
          </di>
        </div>
        <div className="card3">
          <div className="a1">
            <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
          </div>
          <div className="a2">
            <div className="AbCnt">5</div>
            <div className="absent">Students Absent</div>
          </div>
        </div>
      </div>
      <div id="parent1" className={p1}>
        <div className="parts">
          <div className="part1">
            <div>
              <div>
                <label className="ob1" htmlFor="courseSelect">
                  Select Course:
                </label>
                <br />
                <select
                  id="courseSelect"
                  value={selectedCourse}
                  onChange={handleCourseChange}
                >
                  <option className="customMenu" value="">
                    --Select Course--
                  </option>
                  <option className="customMenu" value="WDAD">
                    Web Development & App Development (WDAD)
                  </option>
                  <option className="customMenu" value="CTP">
                    Computational Thinking & Programming (CTP)
                  </option>
                  <option className="customMenu" value="Linux">
                    Linux & Bash Scripting
                  </option>
                  <option className="customMenu" value="DBMS">
                    Database Management (DBMS)
                  </option>
                  <option className="customMenu" value="PC">
                    Professional Communication (PC)
                  </option>
                  <option className="customMenu" value="Sports">
                    Sports
                  </option>
                  {/* Add more courses here */}
                </select>
              </div>
              <br />
              <div>
                <label className="obm" htmlFor="monthSelect">Select Month:</label>
                <input
                  id="monthSelect"
                  type="text"
                  readOnly
                  value={selectedMonth.toLocaleString("default", {
                    month: "long",
                  })}
                  onClick={() => setShowCalendar(true)}
                />
                {showCalendar && (
                  <Calendar
                    onChange={handleMonthChange}
                    value={selectedMonth}
                    onClickDay={() => setShowCalendar(true)}
                  />
                )}
              </div>
            </div>
            
          </div>
          

          
            <div className="part2">
              <div>
                <div id="f1">
                  <div className="no">No. of Classes Attended:</div>
                  <p className="value">{totalClassesAttended}</p>
                </div>
                <div className="dash">____________________________</div>
                <div id="f2">
                  <div className="no">Total Leaves Taken:</div>
                  <p className="value">{totalLeavesTaken}</p>
                </div>
              </div>
            </div>
            <div className="part3">
              <AttendanceManagementSystem></AttendanceManagementSystem>
            </div>

          
        </div>
      </div>

      <div id="parent2" className={p2}></div>
    </div>
  );
};

export default AttendanceSystem;
