import React from "react";
export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{
        constructor(props){
            super(props);
            this.state=({
                theme:"normal",
                btn:"normalbtn"
            });
        }
        
        toggleDark =()=>{
            this.setState({
                theme : "dark",
                btn:"darkbtn"
            })
        }
        toggleLight =()=>{
            this.setState({
                theme:"light",
                btn:"lightbtn"
            })
        }

        toggleDefault =()=>{
            this.setState({
                theme:"normal",
                btn:"normalbtn"
            })
        }

        render(){
            const{btn,theme} = this.state;
            const{toggleDark,toggleLight,toggleDefault}=this;
            return(
                    <ThemeContext.Provider value={{btn,theme,toggleDark,toggleLight,toggleDefault}}>
                        {this.props.children}
                    </ThemeContext.Provider>
            );
        }
}

export default ThemeContextProvider;