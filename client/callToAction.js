setTimeout(function() {
    document.querySelector(".callToAction").style.display = "block";
  }, 10000);
  
  function closepopup() {
    document.querySelector(".callToAction").style.display = "none";
  };
  function readyfn(){
    username=document.querySelector(".username").value;
    useremail=document.querySelector(".useremail").value;
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
    }else{
        if(userregex.test(username.value)==true){
            pname.style.display="none";
        }else{
            pname.style.display="block";
        }
    }
}
function emailfn(){
    let emailregex= /^[a-zA-z0-9]+[@][a-z]+[.][a-z]{2,3}/
    pemail=document.querySelector(".pemail");
    useremail=document.querySelector(".useremail");
    if(useremail.value==""){
        pemail.style.display="none";
    }else{
        if(emailregex.test(useremail.value)==true){
            pemail.style.display="none";
        }else{
            pemail.style.display="block";
        }
    }
}