

class User {
    #id = undefined
    #email = undefined
  
    constructor() {
      const userFromStorage = sessionStorage.getItem('user')
      if (userFromStorage) {
        const userObject = JSON.parse(userFromStorage)
        this.#id = userObject.id
        this.#email = userObject.email
      }
    }

    getid() {
        return this.#id
      }
    
      getemail() {
        return this.#email
      }

      async login(email,password) {
        const data = JSON.stringify({email: email,password: password})
        const response = await fetch('http://localhost:3001/user/login',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: data
        })
        if (response.ok === true) {
          const json = await response.json()
          this.#id = json.id
          this.#email = json.email
          sessionStorage.setItem('user',JSON.stringify(json))
          return this
        } else {
          throw response.statusText
        }
      }

      async register(username,email,password) {
        const data = JSON.stringify({username:username,email: email,password: password})
        const response = await fetch('http://localhost:3001/user/register',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: data
        })
        if (response.ok === true) {
          const json = await response.json()
          return json.id
        } else {
          throw response.statusText 
        }
      }

}

export{User} 
