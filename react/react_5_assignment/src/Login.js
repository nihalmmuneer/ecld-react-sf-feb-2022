import React , { Component } from 'react';
import Todo from './Todo'
import styles from './Login.module.css'

// const defaultEmail = 'nihal@gmail.com'
// const defaultPass = 'nihal@123'
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            isLoggedIn:false,
            currentView:'login',
            fname:'',
            address:'',
            department:'',
            confirmPassword:'',
            flag:'false'
        }
    }
    handleChange= (e) => {
        const {name,value} = e.target;
        console.log(name,value);
        this.setState({
            [name]:value
        })
    }
    handleLogin = () => {
      
        let mail = localStorage.getItem('Email').replace(/"/g,"");
        
        let pass = localStorage.getItem('Password').replace(/"/g,"");
        
            if(mail === this.state.email &&  pass === this.state.password ){
                this.setState({
                    isLoggedIn:true
                })
            }else {
                alert('Please Enter The Correct Credentials') 
            }
 
       
    }
    changeView = (value) => {
        this.setState({
         
            currentView:value
        })
    }
    handleFormSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(!this.state.fname || !this.state.email || !this.state.password || !this.state.address || !this.state.department || !this.state.confirmPassword ){
            this.setState({
                flag:'true'
            })
        } else {
            this.setState({
                flag:'false'
            })
            localStorage.setItem("Email",JSON.stringify(this.state.email));
            localStorage.setItem("Password",JSON.stringify(this.state.password));
            // localStorage.setItem("fname",JSON.stringify(this.state.fname));
            // localStorage.setItem("Address",JSON.stringify(this.state.address));
            // localStorage.setItem("Department",JSON.stringify(this.state.department));
        }
        console.log("Saved in local storage");
        this.setState({
            currentView:'login'
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoggedIn? (
                      <div>  
                        <Todo /> 
                      </div>  
                    )
                    :this.state.currentView === 'login'?
                    (     
                        <div className={styles.bgImg}>
                        <div className={styles.content}>
                           <h1>  LogIn </h1>
                           <form action="#">
                              <div className={styles.field}>
                                 <span class="fa fa-user"></span>
                                 <input type="email" required placeholder="Email or Phone" name = "email" onChange={this.handleChange} />
                              </div>
                              <div className={styles.field}>
                                 <span  class="fa fa-lock"></span>
                                 <input type="password" className={styles.passKey} required placeholder="Password" name="password" onChange={this.handleChange} />
                              </div>
                              <div className={styles.pass}>
                                 <a href="#">Forgot Password?</a>
                              </div>
                              <div className={styles.field}>
                                 <input type="submit"  value="LogIn"  onClick = {this.handleLogin}/>
                              </div>
                              <div className={styles.signup}>
                                Don't have account?
                                <a href="#" onClick={ () => this.changeView("SignUp")}> Signup Now</a>
                              </div>
                           </form>
                        </div>
                     </div>      
                    )
                    :
                    (
                        <div className={styles.bgImg}>
                        <div className={styles.content}>
                           <h1> SignUp !  </h1>
                           <form action="#" onSubmit = {this.handleFormSubmit}>
                           <div className={styles.field}>
                                 <span class="fa fa-user"></span>
                                 <input type="text" required placeholder="Enter Your Name" name = "fname" onChange={this.handleChange} />
                              </div>
                             <div className={styles.field}>
                                 <span class="fa fa-envelope"></span>
                                 <input type='text' required placeholder="Enter Your Address" name = "address" onChange={this.handleChange} />
                              </div>
                              <div className={styles.field}>
                                 <span class="fa fa-graduation-cap"></span>
                                 <input type='search'  placeholder="Department" name = "department" onChange={this.handleChange} />
                                 <select>
                                    <option >none</option>
                                     <option >Finance</option>
                                     <option >HR</option>
                                     <option >IT</option>
                                 </select>
                               </div>  
                              <div className={styles.field}>
                                 <span class="fa fa-envelope-square"></span>
                                 <input type="email" required placeholder="Email or Phone" name = "email" onChange={this.handleChange} />
                              </div>
                              <div className={styles.field}>
                                 <span  class="fa fa-lock"></span>
                                 <input type="password" className={styles.passKey} required placeholder="Password" name="password" onChange={this.handleChange} />
                              </div>
                              <div className={styles.field}>
                                 <span  class="fa fa-lock"></span>
                                 <input type="password" className={styles.passKey} required placeholder="Confirm Password" name="confirmPassword" onChange={this.handleChange} />
                              </div>
                              <div className={styles.field}>
                                 <input type="submit"  value="SignUp" />
                              </div>
                              <div className={styles.pass}>
                                 <a href="#" onClick={ () => this.changeView("login")}>Already have an account?</a>
                              </div>
                           </form>
                        </div>
                     </div>      
                    )
                    
                }
            </div>
        )
    }
}
export default Login;