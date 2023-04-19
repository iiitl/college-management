import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar at_navbar navbar-expand-lg navbar-dark at_nav">
        <a className="navbar-brand at_navbar-brand" id="at_icon" href="#">A</a>
        <a className="navbar-brand at_navbar-brand" id="atten" href="#">Attendance</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item at_nav-item active at_active">
              <span className="nav-link" href="#">Overview <span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item at_nav-item">
              <span className="nav-link" href="#">Manage Attendance</span>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href="#"><i class="fa-solid at_bell fa-bell"></i></a>
            <span className="modulo">|</span>
            <img src="https://base.berkadia.com/wp-content/uploads/2022/04/Romano-John-400x400px-278x278.jpg" alt="" className='fa-user at_user' height="35px" width="35px"/>
            <span className="modulo">|</span>
            <input className="form-control at_form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn at_btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  )
}

