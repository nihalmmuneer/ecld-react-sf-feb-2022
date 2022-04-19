import React from "react";
import { ThemeContext } from "../context/Themecontextprovider";
import './styles.css'

class Styles extends React.Component{
    render(){
        console.log(this.context,"asda")
        const {btn,theme,toggleDark,toggleLight,toggleDefault} = this.context;
        console.log({theme})
        console.log({btn})
        return(
            
             
            <>
                <div>
                {/* <div className={theme}> */}
                        <div className="navbar">
                           <div className="button">
                              <button onClick={toggleDark}>Dark</button>
                              <button onClick={toggleLight}>Light</button>
                              <button onClick={toggleDefault}>Normal</button>
                            </div>
                            </div>    
                            {/* <ul>
                              <li><a href="#home">Home</a></li>
                              <li><a href="#news">News</a></li>
                              <li><a href="#contact">Contact</a></li>
                              <li style="float:right"><a class="active" href="#about">About</a></li>
                        </ul> */}

                        <div className={theme}>
                           <form action="#">
                              <div className="field">
                                 <span class="fa fa-user"></span>
                                 <input type="email" required placeholder="Email or Phone" name = "email" onChange={this.handleChange} />
                              </div>
                              <div className="field">
                                 <span  class="fa fa-lock"></span>
                                 <input type="password" className="passKey" required placeholder="Password" name="password" onChange={this.handleChange} />
                              </div>
                              <div className="pass">
                                 <a href="#">Forgot Password?</a>
                              </div>
                              <div className="field">
                                 <input type="submit"  value="LogIn"  onClick = {this.handleLogin}/>
                              </div>
                           </form>
                        </div>
                </div>  
                
            
            </>
            
        );
    }
}
Styles.contextType = ThemeContext;

export default Styles;