import React from "react";
import Login from '../login.js'
import Login1 from '../login1'
import { AuthContext } from "../AuthContext/AuthContextProvider";

class Status extends React.Component {
    render(){
        console.log(this.context);
        const {isAuth,toggleAuth} = this.context;
        console.log(isAuth,'isAuth');
        return(
            <div>
                {
                // isAuth ?<Login/>:<Login1/>}
                isAuth ? (
                    <div>
                    <Login/>
                    </div>
                ):(
                    <Login1/>
                )
                // /* <button onClick={toggleAuth}>{isAuth?"LogOut":"LogIn"}</button> */
                }   
            </div>
        )
    }
}
Status.contextType = AuthContext;
export default Status