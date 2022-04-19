import React , { Component } from 'react';
import { AuthContext } from "./AuthContext/AuthContextProvider";
// import User from './User'
import styles from './login.module.css'
import axios from 'axios';


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
            isLoggedIn:false,
            token:''
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
    const {setToken} = this.context
    
    axios.post('https://reqres.in/api/login', {
        email:this.state.email,
        password:this.state.password
    })
    .then((res)=> {
        console.log(res,"data");
        console.log(res.data.token);
        this.setState({
            token:res.data.token,
             isLoggedIn:true
        })
        setToken(this.state.token)
    })
    .catch((error)=>console.log(error))
       
} 
    
    render() {
    //    console.log(this.context.isAuth,'login')
    //    console.log(this.context.token,'token')
       console.log(this.state)
       console.log(this.context)
       const{isAuth} = this.context
        return (
            <div>
                {
                    this.context.token? (
                      <div>  
                          <ul>
                            <li><a onClick={this.context.toggleAuth} class="active" href="#logOut">Logout</a></li>
                        </ul>
                        {/* <User />  */}
                        
                        <h1>LoggedIn Successfully With Token:<h2>{this.context.token}</h2></h1>

                      </div>  
                    )
                    :
                    (      
                        <>
                        <div>  
                            <ul>
                                <li><a onClick={this.context.toggleAuth} class="active" href="#Login">LogIn</a></li>
                            </ul>
                        </div>
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
                     </>  
                    )
                  
                    
                }
            </div>
            
        )
    }
}
Login.contextType = AuthContext;
export default Login;