import React ,{ Component } from 'react'
import './Login.css'

// // const { Component } = React

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: "login"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }



  render() {
    return (
      <section id="entry-page">
        <div>
                {
                    this.state.currentView === 'signUp'? (
                    <div>  
                      <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        </div>  
            )
            :
            
            (
                <form>
                <h2>Welcome Back!</h2>
                <fieldset>
                  <legend>Log In</legend>
                  <ul>
                    <li>
                      <label for="username">Username:</label>
                      <input type="text" id="username" required/>
                    </li>
                    <li>
                      <label for="password">Password:</label>
                      <input type="password" id="password" required/>
                    </li>
                  </ul>
                </fieldset>
                <button>Login</button>
                <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
              </form>
            )
                }
        </div>            
      </section>
    )
  }
}
export default Login

// ReactDOM.render(<EntryPage/>, document.getElementById("app"))
