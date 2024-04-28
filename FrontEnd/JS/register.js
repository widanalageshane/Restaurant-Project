import { User } from "./CLASS/User.js";

    const user = new User()
    const username_input = document.querySelector('#username')
    const email_input = document.querySelector('#user-email')
    const password_input = document.querySelector('#password')
    const submit_button = document.querySelector('#signup-button')
    const message_element = document.querySelector('#message');
    
    submit_button.addEventListener('click',(event) => {
        event.preventDefault()
        const username = username_input.value
        const email = email_input.value
        const password = password_input.value
        
    
        user.register(username ,email, password).then(user => {
          message_element.style.display = 'block';;
          username_input.value = '';
          email_input.value = '';
          password_input.value = '';
          setTimeout(() => {
            window.location.href = 'login.html';
          }, 1800);
    
          }).catch(error => {
            alert(error)
          })
        })
        