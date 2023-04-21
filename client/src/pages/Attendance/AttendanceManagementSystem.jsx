import React, { useState } from "react";
import "./AttendanceManagementSystem.css";
const AttendanceManagementSystem = () => {
  const [attendance, setAttendance] = useState([]);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState();
  const [isPresent, setIsPresent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };
  const handleAttendanceChange = (event) => {
    setIsPresent(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      const newAttendance = { name, rollNo, isPresent };
      setAttendance([...attendance, newAttendance]);
      setName("");
      setRollNo("");
      setIsPresent(false);
    }
  };

  return (
    <div className="container ams">
      <h1>Mark Your Attendance here</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="LabeL">
          Name:
          <br />
          <input className="inputx"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="rollNo LabeL">
          RollNo:
          <br />
          <input className="inputx"
            type="text"
            value={rollNo}
            onChange={handleRollNoChange}
          />
        </label>
        <br />
        <label className="Checkbox pres LabeL">
          Present:
          <input id="chk" className="inputx"
            type="checkbox"
            checked={isPresent}
            onChange={handleAttendanceChange}
          />
        </label>
        <br/>
        <button className="btn btn-primary btn-sm" type="submit">Submit</button>
        <br/><br/>
      </form>
      <h2>Attendance List</h2>
      <ul>
        {attendance.map((attendanceItem, index) => (
          <p key={index}>
            {attendanceItem.name} - {attendanceItem.isPresent ? "Present" : "Absent"} - {attendanceItem.rollNo}
          </p>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceManagementSystem;
