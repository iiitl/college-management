setTimeout(function() {
    document.querySelector(".callToAction").style.display = "block";
  }, 1000);
  
  function closepopup() {
    document.querySelector(".callToAction").style.display = "none";
  };
  function readyfn(){
    let name=document.querySelector(".username").value;
    let email=document.querySelector(".useremail").value;
    thanks=document.querySelector(".thanks");
    if(namesfn()==true && emailfn()==true){
        thanks.innerText=`Thanks ${name}. You have successfully registered with the email ${email}`;
    }
  };

  // Validations on the user and the Email

let validations = {

email: /^[a-zA-z0-9]+[@][a-z]+[.][a-z]{2,3}/
}
function namesfn(){
    let userregex= /^[a-zA-z ]+$/;
    pname=document.querySelector(".pname");
    username=document.querySelector(".username");
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
    pemail=document.querySelector(".pemail");
    useremail=document.querySelector(".useremail");
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