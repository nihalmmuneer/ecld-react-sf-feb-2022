import React from 'react';
export const AuthContext = React.createContext();
class AuthContextProvider extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isAuth:true,
            token:''
        }
    }
    setToken =(value) =>{
        this.setState({
            token:value
        })
    } 
    toggleAuth = () => {
        this.setState({
            isAuth:!this.state.isAuth
        })
    }
    render(){
        const {isAuth,token} = this.state;
        const {toggleAuth,setToken} = this;
        return(
            <AuthContext.Provider value = {{isAuth,toggleAuth,setToken,token}}>{this.props.children}</AuthContext.Provider>
        )
    }
}
export default AuthContextProvider