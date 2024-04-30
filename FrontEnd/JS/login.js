import { User } from "./CLASS/User.js";

//const params = new URLSearchParams(window.location.search);
//const account_id = params.get('account_id');


const user = new User();
const email_input = document.querySelector('#user-email');
const password_input = document.querySelector('#password');

document.querySelector('#login-button').addEventListener('click', (event) => {
  event.preventDefault();
  const email = email_input.value;
  const password = password_input.value;


  user.login(email, password)
  .then(user => {
    if (email === "admin@gmail.com") {
      window.location.href = "MainPageAdmin.html";
      // alert("Login successful!");
    } else {
    window.location.href = "MainPage.html";
    // alert("Login successful!");
    }
  }).catch(error => {
    alert(error);
  });
});
