import{BACKEND_URL} from '../config.js'

class User {
    #id = undefined
    #username = undefined
    #email = undefined
  
    constructor() {
      const userFromStorage = sessionStorage.getItem('user')
      if (userFromStorage) {
        const userObject = JSON.parse(userFromStorage)
        this.#id = userObject.account_id
        this.#username = userObject.username
        this.#email = userObject.email
      }
    }

      getid() {
        return this.#id
      }

      getusername() {
        return this.#username
      }
    
      getemail() {
        return this.#email
      }

      get isLoggedIn(){
        return this.#id !== undefined ? true : false
      }

      async login(email,password) {
        const data = JSON.stringify({email: email,password: password})
        const response = await fetch(BACKEND_URL+'/user/login',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: data
        })
        if (response.ok === true) {
          const json = await response.json()
          this.#id = json.account_id
          this.#email = json.email
          sessionStorage.setItem('user',JSON.stringify(json))
          //account_id =json.account_id;
          return this
        } else {
          throw response.statusText
        }
      }

      async register(username,email,password) {
        const data = JSON.stringify({username:username,email: email,password: password})
        const response = await fetch(BACKEND_URL+'/user/register',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: data
        })
        if (response.ok === true) {
          const json = await response.json()
          return json.account_id
        } else {
          throw response.statusText 
        }
      }

      logout(){
        this.#id = undefined
        this.#email = undefined
        sessionStorage.removeItem('user')
      }




}

export{User} 
