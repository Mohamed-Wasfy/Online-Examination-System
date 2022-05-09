function setCookie(key, value, date) {
    var date = new Date(date);
    document.cookie = key + "=" + value + "; expires = " + date;
}

function getCookie(key) {
    var date = document.cookie;
    var res = "not found";
    var arr = date.split("; ");
    arr.forEach(function(element){
        var keyAndValue = element.split("=");
        if(keyAndValue[0] === key) {
            res = keyAndValue[1];
        }
    })
    return res;
}


function deleteCookie(key) {
    setCookie(key, "asd", "1 / 1 / 1900");
}

function checkCookie(key) {
    if(!key) {
        throw "error";
    }

    var message = false;
    var checked = getCookie(key);
    if(checked !== "not found") {
        message = true;
        return message;
    }
}

function allCookie() {
    var data = document.cookie;
    var arr = data.split("; ");
    arr.forEach(function(element) {
        var keyAndValue = element.split("=");
        console.log(keyAndValue);
    })
}

allCookie();

var ema = document.getElementById("email");
var pass = document.getElementById("password");
var button = document.getElementById("btn");
var message1 = document.getElementById("spa-email");
var message2 = document.getElementById("spa-pass");

button.addEventListener("click", function(e) {
    e.preventDefault();
    checkEmail();    
    checkPass();
    if(ema.value == getCookie("email") && pass.value == getCookie("password")) {
        window.location.replace("test.html");
    }    
})

function checkEmail() {
    if(ema.value === '') {
        message1.innerHTML = "The email is required.";
    }
    else if(ema.value !== getCookie("email")) {
        message1.innerHTML = "The email is not registered";
    } 
    else {
        message1.innerHTML = '';
    }
}

function checkPass() {
    if(pass.value === '') {
        message2.innerHTML = "The Password is required.";
    }
    else if(pass.value !== getCookie("password")) {
        message2.innerHTML = "The Password is not correct";
    } 
    else {
        message2.innerHTML = '';
    }
}
