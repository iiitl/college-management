import React from 'react'
import "./Confirmation"
export default function ConfirmSubmit(props) {
  const funct=props.changeDis;
  return (
    <div>
      <button id="submit" onClick={funct}>Submit</button>
    </div>
  )
}
