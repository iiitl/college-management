import React, { useState } from "react";

import styles from './AttendanceManagementSystem.module.css'

// custom-made react components import
import GeneralInput from "./form-components/GeneralInput";
import SubmitButton from "./form-components/SubmitButton";


// component is basically a form that marks the students attendance
const AttendanceManagementSystem = () => {
  const [attendance, setAttendance] = useState([]);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState();
  const [isPresent, setIsPresent] = useState(false);

  // functions to handle event changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };
  const handleAttendanceChange = (event) => {
    setIsPresent(event.target.checked);
  };

  // form submit function
  const handleSubmit = (event) => {

    // prevent refresh of page
    event.preventDefault();
    if (name !== "") {
      const newAttendance = { name, rollNo, isPresent };

      // reset the form afterwards
      setAttendance([...attendance, newAttendance]);
      setName("");
      setRollNo("");
      setIsPresent(false);
    }
  };




  return (
    <div className={styles.containerStyle}>
      <h1 className={`${styles.textCenter}`}>Mark Your Attendance here</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formLabelInputs}>
          <h4 className={`${styles.textCenter}`}>
            Name
          </h4>

            {/* custom react component */}
            <GeneralInput
            name={''}
            placeholder={'hello'}
            width={25}
            onChangeHandler={handleNameChange}
            />
        </div>
        <div className={styles.formLabelInputs}>
          <h4 className={`${styles.textCenter}`}>
            RollNo
          </h4>

            <GeneralInput
            name={''}
            width={25}
            onChangeHandler={handleRollNoChange}
            />
        </div>
        <div className="flex flex-col">
          <div className={styles.present_container}>
              <span>Present</span>
              <input id="" className={styles.checkbox}
                type="checkbox"
                checked={isPresent}
                onChange={handleAttendanceChange}
              />
          </div>
          <div className={`${styles.flex}`}>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
          </div>
        </div>
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
