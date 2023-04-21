import React, {useLayoutEffect,useEffect, useRef, useState} from "react";
import "./Login.css";

export default function LoginForm() {
    const accountTypeChange=()=>{
      console.log("Account type switched")
    }


//! Handles the sliding of blue div
    const signUpButton=()=>{
        const container = document.getElementById("container");
        container.classList.add("right-panel-active");
        console.log(sLogin);
    }
    const signInButton=()=>{
        const container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    }


    const divStyle = {
      color: 'red',
      fontSize: '14px',
      textAlign: "left"
    };

//! Handles the checks applied on create new account section 
    const [studentName,setStudentName]= useState('');
    const [studentEmail,setStudentEmail]=useState();
    const [studentPassword,setStudentPassword]=useState();
    const [studentMessage,setstudentMessage]=useState('');
    const [submitStudentName,setsubmitStudentName]=useState(false);
    const [submitStudentEmail,setsubmitStudentEmail]=useState(false);
    const [submitStudentPass,setsubmitStudentPass]=useState(false);

    const valueOfStudentName=(event)=>{
      const val=event.target.value;
      setStudentName(val);
      const regex=/[^a-zA-Z\s]/;
      console.log(val);
      if(val.length>0 && regex.test(val)){
        setstudentMessage("* Only alphabets allowed"); 
        setsubmitStudentName(false);
      }
      else{
        setstudentMessage("");
        setsubmitStudentName(true);

      }
    }

    const valueOfStudentEmail=(event)=>{
      const val=event.target.value;
      setStudentEmail(val);
      // const regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      const regex=/^[a-zA-Z]{3}20\d{2}\d{3}@iiitl\.ac\.in$/;
      console.log(val);
      if(val.length>0 && !regex.test(val)){
        setstudentMessage("* Please Enter throughyour College Mail Id"); 
        setsubmitStudentEmail(false);
      }
      else{
        setstudentMessage("");
        setsubmitStudentEmail(true);
      }
    }

    const valueOfStudentPassword=(event)=>{
      const val=event.target.value;
      setStudentPassword(val);
      const regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?!.*\s).{8,}$/;
      console.log(val);
      if(val.length<8){
        setstudentMessage("* Password must be of at least 8 characters"); 
        setsubmitStudentPass(false);
      }
      else if(val.length>20){
        setstudentMessage("* Password must be of at most 20 characters"); 
        setsubmitStudentPass(false);
      }
      else{
        if(!regex.test(val)){
          setstudentMessage("* Password must have 1 Capital & 1 special chars");
          setsubmitStudentPass(false);
        }
        else{
          setstudentMessage("");
          setsubmitStudentPass(true);
        }
      }
    }

    const handleStudentSubmit=(event)=>{
      if((submitStudentName===false) || (submitStudentEmail===false) ||(submitStudentPass===false)){
        event.preventDefault();
      }
    }

    const [width, setWidth] = useState(window.innerWidth);
    
    
//!  This is the code for checking the input values in Others Section of Creating Account
//? But adding this code give some code has a bug which is complicated for me to resolve 
//* else the rest code works perfectly fine when not added this part 

    // const [memberName,setMemberName]= useState('');
    // const [memberEmail,setMemberEmail]=useState();
    // const [memberPassword,setMemberPassword]=useState();
    // const [memberMessage,setMemberMessage]=useState('');
    // const [submitMemberName,setSubmitMemberName]=useState(false);
    // const [submitMemberEmail,setSubmitMemberEmail]=useState(false);
    // const [submitMemberPass,setSubmitMemberPass]=useState(false);

    // const valueOfMemberName=(event)=>{
    //   const val=event.target.value;
    //   setMemberName(val);
    //   const regex=/[^a-zA-Z\s]/;
    //   console.log(val);
    //   if(val.length>0 && regex.test(val)){
    //     setMemberMessage("* Only alphabets allowed"); 
    //     setSubmitMemberName(false);
    //   }
    //   else{
    //     setMemberMessage("");
    //     setSubmitMemberName(true);

    //   }
    // }

    // const valueOfMemberEmail=(event)=>{
    //   const val=event.target.value;
    //   setMemberEmail(val);
    //   const regex=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    //   console.log(val);
    //   if(val.length>0 && !regex.test(val)){
    //     setMemberMessage("* Please Enter correct Email"); 
    //     setSubmitMemberEmail(false);
    //   }
    //   else{
    //     setMemberMessage("");
    //     setSubmitMemberEmail(true);
    //   }
    // }

    // const valueOfMemberPassword=(event)=>{
    //   const val=event.target.value;
    //   setMemberPassword(val);
    //   const regex=/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?!.*\s).{8,}$/;
    //   console.log(val);
    //   if(val.length<8){
    //     setMemberMessage("* Password must be of at least 8 characters"); 
    //     setSubmitMemberPass(false);
    //   }
    //   else if(val.length>20){
    //     setMemberMessage("* Password must be of at most 20 characters"); 
    //     setSubmitMemberPass(false);
    //   }
    //   else{
    //     if(!regex.test(val)){
    //       setMemberMessage("* Password must have 1 Capital & 1 special chars");
    //       setSubmitMemberPass(false);
    //     }
    //     else{
    //       setMemberMessage("");
    //       setSubmitMemberPass(true);
    //     }
    //   }
    // }

    // const handleMemberSubmit=(event)=>{
    //   if((submitMemberName===false) || (submitMemberEmail===false) ||(submitMemberPass===false)){
    //     event.preventDefault();
    //   }
    // }

    
    // const [check,setCheck]=useState('checked')

    // const MemChecker=()=>{
    //   setCheck('checked')
    // }

    // const StChecker=()=>{
    //   setCheck('checked')
    // }



//! Handles the display of which div is to be displayed at what time
    const [sLogin,setsLogin]=useState("true")
    const [Login,setLogin]=useState("true")

//// JADOO CODE ( COPYRIGHT MJ )
    setInterval(() => {
      setWidth(window.innerWidth);
    }, 900);



//! Handles the closing of login form
    const closeForm=()=>{
      // const close=document.getElementById("container");
      // setInterval(() => {
      //   close.style.display="none";
      // }, 150);
      window.close();
    }
    
 
  return (
    <>
      <div className="container" id="container">
        <div className="super">
        <div className="form-container sign-up-container" style={(width<850) ? ({display: sLogin ? "none" : "block"}):({display:sLogin ? "block":"none"})}>
          <div className="Login_cross2" onClick={closeForm}>&times;</div>
          <div className="form">
            <h1 className="Login_h1">Create Account</h1>
            <div className="createAccount">
                    <div className="accountType">
                      
                        {<div className="NewSignUp">
                            <input  className="Login_input_tag" type="radio" id="memberSignUp" name="tabby-tabs"/>
                            <label htmlFor="memberSignUp" className="signUp_Tabs">Others</label>
                            <div className="member content">
                            <form className="memberForm Login_form_tag">
                                <div className="social-container">
                                    <a href="/" className="social Login_a_tag">
                                    <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="/" className="social Login_a_tag">
                                    <i className="fab fa-google-plus-g"></i>
                                    </a>
                                    <a href="/" className="social Login_a_tag">
                                    <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                                <span className="Login_span_tag">or use your email for registration</span>
                                <input type="text" placeholder="Name" id="memberName" className="sUpUserName Login_input_tag" required/>
                                <input type="email" placeholder="Email" id="memberEmail" className="sUpUserEmail Login_input_tag" required/>
                                <input type="password" placeholder="Password" id="memberPassword" className="sUpUserPassword Login_input_tag" required/>
                                <select name="cars" id="memberWing" placeholder="Select your Wing" className="sUpUserWing" required>
                                    <option>Select your Wing</option>
                                    <option>Competitive Programming (CP)</option>
                                    <option>Machine Learning (ML)</option>
                                    <option>Blockchain</option>
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>Design Wing</option>
                                    <option>infosec Wing</option>
                                </select>
                                <div id="sUpMemberAlert" style={divStyle}>
                                  <br/>
                                </div>
                                <input type="submit" className="button" value="Sign Up"/>             
                            </form>
                            </div>
                        </div>}
                
                        <div className="NewSignUp">
                            <input  className="Login_input_tag" type="radio" id="studentSignUp" name="tabby-tabs" checked readOnly/>
                            <label htmlFor="studentSignUp" className="signUp_Tabs">Student</label>
                            
                            <div className="student content">
                            <form className="studentForm Login_form_tag" onSubmit={handleStudentSubmit}>
                                <div className="social-container">
                                    <a href="/" className="social Login_a_tag ">
                                    <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="/" className="social Login_a_tag">
                                    <i className="fab fa-google-plus-g"></i>
                                    </a>
                                    <a href="/" className="social Login_a_tag">
                                    <i className="fa-brands fa-github"></i>
                                    </a>
                                </div>
                                <span className="Login_span_tag">or use your email for registration</span>
                                <input type="text" value={studentName} onChange={valueOfStudentName} placeholder="Name" id="studentName" className="sUpUserName Login_input_tag" required/>
                                <input type="email" placeholder="Email" onChange={valueOfStudentEmail} id="studentEmail" className="sUpUserEmail Login_input_tag" required/>
                                <input type="password" placeholder="Password" onChange={valueOfStudentPassword} id="studentPassword" className="sUpUserPassword Login_input_tag" required/>
                                <div id="sUpStudentAlert" style={divStyle}>
                                  {studentMessage}<br/>
                                </div>
                                
                                <input type="submit" className="button" value="Sign Up"/>                
                            </form>
                            </div>
                        </div> 
                    </div>
                </div>
          </div>
        </div>
        <div className="form-container sign-in-container" style={(width<850) ? ({display: Login ? "block" : "none"}):({display: Login ? "block":"block"})}>
          <div className="Login_cross" onClick={closeForm}>&times;</div>
          <form className="Login_form_tag Login_login" action="/">
            <h1 className="Login_h1">Log In</h1>
            <div className="social-container">
              <a href="/" className="social Login_a_tag">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social Login_a_tag">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social Login_a_tag">
              <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <span className="Login_span_tag">or use your account</span>
            <input className="Login_input_tag" type="email" placeholder="Email" />
            <input className="Login_input_tag" type="password" placeholder="Password" />
            <a className="Login_a_tag" href="/">Forgot your password?</a>
            <button className="Login_btn_tag">Log In</button>
            <button className="reverseGhost Login_btn_tag" id="signUpOnLogin" onClick={(e) => {
              setsLogin(!sLogin);
              setLogin(!Login);
              e.preventDefault();
            }}>
                Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="Login_h1">Hello, Friend!</h1>
              <p className="Login_p_tag">
              Enter your personal details and start journey with us 
              </p>
              <button className="ghost Login_btn_tag" id="signIn" onClick={signInButton}>
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="Login_h1">Welcome Back!</h1>
              <p className="Login_p_tag">To keep connected with us please login with your personal info</p>
              <button className="ghost Login_btn_tag" id="signUp" onClick={signUpButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
