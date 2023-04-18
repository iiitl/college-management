import React, { useRef, useEffect } from 'react';
import { AiOutlineCheck } from "react-icons/ai"

import './confirm_style.scss';
import ConfirmSubmit from './Confirmsubmit';
export default function Confirmation() {
  useEffect(() => {
    const handleClick = (event) => {
      // console.log(event.target,confirmation)
      if (event.target == confirmation.current) {
        confirmation.current.style.display = "none";
        confirmBtn.current.style.display = "flex";
        confirmText.current.style.display = "flex";
        submitting.current.style.display = "none";
      }
    };

    window.addEventListener('click', handleClick);


  }, []);
  const confirmBtn = useRef(null);
  const confirmText = useRef(null);
  const submitting = useRef(null);
  const confirmation = useRef(null);
  const changeDis = () => {
    console.log("hello")

    confirmation.current.style.display = "flex";
  }
  const done = () => {
    confirmBtn.current.style.display = "none";
    confirmText.current.style.display = "none";
    submitting.current.style.display = "flex";
  }
  const clos = () => {
    confirmation.current.style.display = "none"
  }

  return (
    <div>
      <ConfirmSubmit changeDis={changeDis} />
      <div id="confirmation" className="modal" ref={confirmation}>
        <div className="conform_content animate">
          <div className="submitting animate" ref={submitting}><AiOutlineCheck /></div>
          <p id="confirm-text" ref={confirmText}> Do you confirm?</p>
          <div id="confirm-btn" ref={confirmBtn}>
            <button id="btn-Yes" style={{ backgroundColor: "tomato" }} onClick={done}>Yes</button>
            <button id="btn-No" style={{ backgroundColor: "grey" }} onClick={clos}>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}