let html = document.querySelector("html");

let password = document.querySelector(".password");
let secret = document.querySelector(".secret");
let expose = document.querySelector(".password-shown");
let input = document.querySelector(".input");

secret.addEventListener('click', function() {
 
     secret.style.display = "none";
      expose.style.display = "inline";
      input.setAttribute("type", "text");
 });

 expose.addEventListener('click', function() {
   
      secret.style.display = "inline";
       expose.style.display = "none";
       input.setAttribute("type", "password");
  });
