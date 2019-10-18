// Group Project JavaScript

// Admin Login Validation
function validate() {
    if(document.myForm.email.value == "") {
        alert("Please enter an email address!");
        document.myForm.email.focus();
        return false;
    }
    if(document.myForm.password.value == "") {
        alert("Please enter your password!");
        document.myForm.password.focus();
        return false;
    }
    return(true);
}


// Contact Form Valiadtion
function contactValidate() {
    if(document.contactForm.firstname.value == "") {
        alert("Please enter your name!");
        document.contactForm.firstname.focus();
        return false;
    }
    if(document.contactForm.emailID.value == "") {
        alert("Please enter your email address!");
        document.contactForm.emailID.focus();
        return false;
    }
    if(document.contactForm.phone.value == "") {
        alert("Please enter your phone number!");
        document.contactForm.phone.focus();
        return false;
    }
    if(document.contactForm.msg.value == "") {
        alert("Please enter your message!");
        document.contactForm.msg.focus();
        return false;
    }
    return(true);
}


// Email Validation
// function validateEmail() {
//     let emailID = document.myForm.email.value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");

//     if (atpos < 1 || (dotpos - atpos < 2 )) {
//         alert("Please enter correct email format: ____@___.___")
//         document.myForm.email.focus();
//         return false;
//     }
//     return(true);
// }


// Email Validation
// function validateEmail() {
//     let emailID = document.myForm.email.value;
// } if(emailID == " ") {
//     alert("Please enter an email address")
//     document.myForm.emailID.focus();
//     return(false);
// } else {
//     return(true);
// }



// Field Focus
// function fieldFocus() {
//     document.getElementById("email").focus();
// }



// Email Validation
// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.form1.text1.focus();
//         return true;
//     }
//     else {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }



// Email Validation
// function emailValidation() {
//     if (/\S+@\S+\.\S+/ === true) {
//         alert ('email is okay');
//     } else {
//         alert ('email not okay')
//     }
// }