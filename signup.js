let html = document.querySelector("html");
let password = document.querySelector(".password");
let passwords = document.getElementById("password");
let secret = document.querySelector(".secret");
let expose = document.querySelector(".password-shown");
let input = document.querySelector(".input");

secret.addEventListener('click', function () {

     secret.style.display = "none";
     expose.style.display = "inline";
     input.setAttribute("type", "text");
});

expose.addEventListener('click', function () {

     secret.style.display = "inline";
     expose.style.display = "none";
     input.setAttribute("type", "password");
});

let passwordStrenght = document.querySelector(".password-strenght-meter")
let meter1 = document.querySelector(".meter1");
let meter2 = document.querySelector(".meter2");
let meter3 = document.querySelector(".meter3");
let meter4 = document.querySelector(".meter4");
let meter5 = document.querySelector(".meter5");
let passwordinfo = document.querySelector(".password-info");
let picon = document.querySelector(".p-icon");
let picon2 = document.querySelector(".p-icon2");
let passwordbox = document.querySelector(".password-box");
let capsstart = /[A-Z]/;
let smallletter = /[a-z]/;
let digits = /[0-9]/;
let fullnameerror = document.querySelector(".fullnameerror");
let tradingnameerror = document.querySelector(".tradingnameerror");
let emailerror = document.querySelector(".emailerror");


function validateFullname() {
     var x = document.forms["myForm"]["fname"].value;
     if (x == "") {
          fullnameerror.innerHTML = '<svg data-v-f6b9c668="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path data-v-f6b9c668="" fill="#ED6347" stroke="none" fill-rule="evenodd" d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z"></path></svg> Full name cannot be empty';
          fullnameerror.style.color = "#bf0711";
          fullnameerror.style.size = "11px";
          return false;
     }
};

function validateTradename() {
     var y = document.forms["myForm"]["tradingname"].value;

     if (y == "") {
          tradingnameerror.innerHTML = '<svg data-v-f6b9c668="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path data-v-f6b9c668="" fill="#ED6347" stroke="none" fill-rule="evenodd" d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z"></path></svg> Trading name cannot be empty';
          tradingnameerror.style.color = "#bf0711";
          tradingnameerror.style.size = "11px";
          return false;
     }
};

function validateEmail() {
     var z = document.forms["myForm"]["email"].value;

     if (z == "") {
          let emailerror = document.querySelector(".emailerror");
          emailerror.innerHTML = '<svg data-v-f6b9c668="" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20"><path data-v-f6b9c668="" fill="#ED6347" stroke="none" fill-rule="evenodd" d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-8h2V6H9v4zm0 4h2v-2H9v2z"></path></svg> Business email cannot be empty';
          emailerror.style.color = "#bf0711";
          emailerror.style.size = "11px";
          return false;
     }
};

function validateForm() {
     var isFormValid = true;
     isFormValid &= validateFullname();
     isFormValid &= validateTradename();
     isFormValid &= validateEmail();
     return isFormValid ? true : false;
}

passwords.onkeyup = function () {

     if (passwords.value.match(capsstart) || passwords.value.match(smallletter) || passwords.value.match(digits)) {
          meter1.classList.add("weak");
          passwordinfo.innerHTML = "Password is quite weak 😕";
          passwordinfo.style.color = "#bf0711";
     }
     else {
          meter1.classList.remove("weak");
     }
     if (passwords.value.match(capsstart) && passwords.value.match(smallletter) || passwords.value.match(capsstart) && passwords.value.match(digits) || passwords.value.match(smallletter) && passwords.value.match(digits)) {
          meter1.classList.add("okay");
          meter2.classList.add("okay");
     }
     else {
          meter1.classList.remove("okay");
          meter2.classList.remove("okay");
     }
     if (passwords.value.match(capsstart) && passwords.value.match(smallletter) && passwords.value.match(digits)) {
          meter1.classList.add("strong");
          meter2.classList.add("strong");
          meter3.classList.add("strong");
          passwordinfo.innerHTML = "Fair enough, but can be better 😐";
          passwordinfo.style.color = "#8a7100";
     }
     else {
          meter1.classList.remove("strong");
          meter2.classList.remove("strong");
          meter3.classList.remove("strong");
     }
     if (passwords.value.match(capsstart) && passwords.value.match(smallletter) && passwords.value.match(digits) && passwords.value.length >= 8) {
          meter1.classList.add("great");
          meter2.classList.add("great");
          meter3.classList.add("great");
          meter4.classList.add("great");
          meter5.classList.add("great");
          passwordinfo.innerHTML = "Strong. Great! 😤";
          passwordinfo.style.color = "#449834";
     }
     else {
          meter1.classList.remove("great");
          meter2.classList.remove("great");
          meter3.classList.remove("great");
          meter4.classList.remove("great");
          meter5.classList.remove("great");
     }
}

