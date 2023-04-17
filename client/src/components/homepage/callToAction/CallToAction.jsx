import React from "react";
import Style from "./CallToAction.css"
setTimeout(()=>{
    let callToAction=document.getElementById("callToAction");
    callToAction.style.display="block";
},1000)
function closefn(){
    let callToAction=document.getElementById("callToAction");
    callToAction.style.display="none";
}
function namefn(){
    let userregex= /^[a-zA-z ]+$/;
    let pname=document.getElementById("pname");
    let username=document.getElementById("nameinput");
    if(username.value==""){
        pname.style.display="none";
        return false;
    }else{
        if(userregex.test(username.value)==true){
            pname.style.display="none";
            return true;
        }else{
            pname.style.display="block";
            return false;
        }
    }
}
function emailfn(){
    let emailregex= /^[a-zA-z0-9]+[@][a-z]+[.][a-z]{2,3}/
    let pemail=document.getElementById("pemail");
    let useremail=document.getElementById("emailinput");
    if(useremail.value==""){
        pemail.style.display="none";
        return false;
    }else{
        if(emailregex.test(useremail.value)==true){
            pemail.style.display="none";
            return true;
        }else{
            pemail.style.display="block";
            return false;
        }
    }
}
function readybtn(){
    let thanks = document.getElementById("thanks");
    let name = document.getElementById("nameinput").value;
    let email = document.getElementById("emailinput").value;
    if(emailfn()==true && namefn()==true){
        thanks.style.color="green";
        thanks.innerText=`Congratulations ${name} you have successfully registered with the ${email}`;
    }else{
        thanks.style.color="red";
        thanks.innerText="Please fill all the input fields correctly";
    }
}
const CallToAction=()=>{
    return(
        <div id="callToAction" style={{display:"none"}}>
            <button className="popupclosebtn" onClick={closefn}>&#10006;</button>
            <div className="popup">
                <div className="imgcont"></div>
                <div className="alert">
                    <h2>Want to get Updated with the latest technologies!!!</h2>
                    <p className="paras">Let us know your Name and Email</p>

                    <input type="text" className="inputs" id="emailinput" placeholder="usv0308@gmail.com" onBlur={emailfn}/>
                    <br/>
                    <p id="pemail" style={{display:"none"}}>*Email must be a valid adderess e.g. me@mydomain.com</p>

                    <input type="text" className="inputs" id="nameinput" placeholder="Umesh Singh Verma" onInput={namefn}/>
                    <br/>
                    <p id="pname" style={{display:"none"}}>*Can only contain alphabets</p>

                    <button id="readybtn" onClick={readybtn}>I am ready</button>
                    <p className="paras">Trust us, We value your privacy and will never send the irrelevant information</p>
                    <p id="thanks" className="paras"></p>
                </div>
            </div>
        </div>
    )
}
export default CallToAction;