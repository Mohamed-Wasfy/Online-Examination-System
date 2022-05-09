inputPassword1 = document.querySelector("#pass1");
inputPassword2 = document.querySelector("#pass2");
showHide1 = document.querySelector("#one");
showHide2 = document.querySelector("#two");
indicator = document.querySelector(".indicator");
iconText = document.querySelector(".icon-text");
text = document.querySelector(".text");
small = document.getElementById('message');
var submit = document.getElementById("submit");
const form = document.getElementById("form");

// js code to show & hide password

showHide1.addEventListener("click", function() {
    if(inputPassword1.type === "password") {
        inputPassword1.type = "text";
        showHide1.classList.replace("fa-eye-slash","fa-eye");
    } else {
        inputPassword1.type = "password";
        showHide1.classList.replace("fa-eye","fa-eye-slash");
    }
});

showHide2.addEventListener("click", function() {
    if(inputPassword2.type === "password") {
        inputPassword2.type = "text";
        showHide2.classList.replace("fa-eye-slash","fa-eye");
    } else {
        inputPassword2.type = "password";
        showHide2.classList.replace("fa-eye","fa-eye-slash");
    }
});

// js code to show password strength (with regex)


let alphabet = /[a-zA-Z]/, // letter a to z and A to Z;
    numbers = /[0-9]/, // numbers 0 to 9 
    scharacters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/; // Special characters 
    
inputPassword1.addEventListener("keyup", function() {
    indicator.classList.add("active");

    let val1 = inputPassword1.value;
    if(val1.match(alphabet) || val1.match(numbers) || val1.match(scharacters)) {
        text.textContent = "Password is weak";
        inputPassword1.style.borderColor = "#FF6333";
        showHide1.style.color = "#FF6333";
        iconText.style.color = "#FF6333";
    }    
    if(val1.match(alphabet) && val1.match(numbers) && val1.length >= 8) {
        text.textContent = "Password is medium";
        inputPassword1.style.borderColor = "#cc8500";
        showHide1.style.color = "#cc8500";
        iconText.style.color = "#cc8500";
    }
    if(val1.match(alphabet) && val1.match(numbers) && val1.match(scharacters) && val1.length >= 8) {
        text.textContent = "Password is Strong";
        inputPassword1.style.borderColor = "#22C32A";
        showHide1.style.color = "#22C32A";
        iconText.style.color = "#22C32A";
    }

    if(val1 == "") {
        indicator.classList.remove("active");
        inputPassword1.style.borderColor = "#A6A6A6";
        showHide1.style.color = "#A6A6A6";
        iconText.style.color = "#A6A6A6";
    }
});

// function checkPassword() {
//     // small.display = block;
    
//     if(password.length != 0) {
//         if(password === confirmPassword) {
//             small.textContent = "Password Matches";
//             small.style.color = "rgb(0 255 0)";
//         }
//         else if(password !== confirmPassword) {
//             small.textContent = "Password doesn't Match";
//         }
//     } else {
//         small.textContent = "Password Mustn't be empty!";
//     }
// }


// function SubmitValues() {
//     let password = inputPassword1.value;
//     let confirmPassword = inputPassword2.value;
//     let email = document.getElementById("email").value;
//     var fName = document.getElementById("fName").value;
//     var lName = document.getElementById("lName").value;
//     var phoneNum = document.getElementById("phone").value;
    
//     if(password.length != 0) {
//         if(password === confirmPassword) {
//             // console.log("Hello World.");
//             window.location.replace("login.html");
//             // setCookie("email", email, "10/10/2022");
//             // setCookie("Password", password, "10/10/2022");
//             // setCookie("fName", fName, "10/10/2022");
//             // setCookie("lName", lName, "10/10/2022");
//             // setCookie("phoneNumber", phoneNum, "10/10/2022");
//         }
//         else if(password !== confirmPassword) {
//             small.textContent = "Password Doesn't Match.";
//         } 
//     } else {
//         small.textContent = "Password Mustn't be empty!";
//     }
// }


form.addEventListener("submit", function(e) {
    e.preventDefault();
    let password = inputPassword1.value;
    let confirmPassword = inputPassword2.value;
    let email = document.getElementById("email").value;
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var phoneNum = document.getElementById("phone").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var msg1 = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    
    if(password.length != 0 && typeof fName !== 'number' && typeof lName !== 'number') {
        if(password === confirmPassword && email.match(pattern)) {
            window.location.replace("login.html");
            setCookie("email", email, "10/10/2022");
            setCookie("password", password, "10/10/2022");
            setCookie("fName", fName, "10/10/2022");
            setCookie("lName", lName, "10/10/2022");
            setCookie("phoneNum", phoneNum, "10/10/2022");
        } else if (password !== confirmPassword){
            small.textContent = "Password Doesn't Match";
        } else if(!email.match(pattern)){
            form.classList.add("invalid");
            text.innerHTML = "Please Enter Valid Email Address";
            text.style.color = "#ff0000";
        }
    } else if(password.length === 0){
        small.textContent = "Password Mustn't be empty!";
    } else if(typeof fName === 'number') {
        msg1.innerHTML = "Name must Consists of characters.";
    } else if(typeof lName === 'number') {
        msg2.innerHTML = "Name must consists of characters.";
    }
});
