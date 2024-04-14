import { User } from "./CLASS/User.js";

const user = new User()
const username_input = document.querySelector('#username')
const email_input = document.querySelector('#user-email')
const password_input = document.querySelector('#password')
const submit_button = document.querySelector('#signup-button')

submit_button.addEventListener('click',(event) => {
    event.preventDefault()
    const username = username_input.value
    const email = email_input.value
    const password = password_input.value
    

    user.register(username ,email, password).then(user => {
      alert("registered successful!");
      }).catch(error => {
        alert(error)
      })
    })


    


