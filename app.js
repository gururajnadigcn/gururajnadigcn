function validate() {
  phoneValidate();
  validateEmail();
}

function phoneValidate() {
  var text = document.getElementById("phnumber").value;
  var regx = /^[1-9]{1}[0-9]{9}/;

  if (regx.test(text)) alert("valid phonenumber");
  else alert("invalid phonenumber");
}

function validateEmail() {
  var email = document.getElementById("emailid");
  var mailFormat =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email.value == "") {
    alert("  Please enter your Email Id  ");
  } else if (!mailFormat.test(email.value)) {
    alert("  Email Address is not valid, Please provide a valid Email ");
    return false;
  } else {
    alert(" Email Validation Success ");
  }
}

document.getElementById("myform").addEventListener("submit", validate);
