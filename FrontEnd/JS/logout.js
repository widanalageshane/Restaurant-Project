import{User} from './CLASS/User.js';

const user = new User();

const login_link = document.querySelector('a#login-link');

user.logout();

login_link.innerHTML='Login';
login_link.href='logIn.html';