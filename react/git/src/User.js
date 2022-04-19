import React from 'react'
import axios from "axios"
import './User.css'
class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            data:[],
            details:[],
            showTable:false,    
            showDetails:false
        }
    }
    handlechange = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value)
    }
    handleSearch = () => {
        axios.get("https://api.github.com/search/users?",{
            params:{
                q:this.state.name
            }
            
        }).then((res) => 
        this.setState({
            data:res.data.items,
            showTable:true,
            name:''
        })
       
        ).catch((error) => console.log(error))
    }
    // componentDidMount() {
    //     axios.get("https://api.github.com/search/users?q=nihal")
    //     .then((res) => this.setState({
    //         data:res.data.items
    //     })
    //     )
    // }
    handleDetails = (login) => {
        axios.get("https://api.github.com/users/" + login)
        .then((res) => {
            console.log(res,'details')
            this.setState({
                details:res.data,
                showDetails:true
            })
        }).catch((error) => console.log(error));
    }
    render(){
        console.log(this.state.data,"data")
        return (
            <div>
                <div class='users'>
                    <h1>LIST OF GITHUB USERS</h1>
                    <input id="input" placeholder='Search User' onChange={this.handlechange} />
                    <button id="search" onClick={this.handleSearch}>search</button>
                </div>
                { this.state.showDetails && (
                    <table id="moreInfo">
                        <tr>
                            <th>Created Data</th>
                            <th>Followers</th>
                            <th>Repository</th>
                        </tr>
                        <tr>
                            <td>{this.state.details.created_at}</td>
                            <td>{this.state.details.followers}</td>
                            <td>{this.state.details.public_repos}</td>
                        </tr>
                    </table>
                )}
                 {this.state.showTable && (
                      <table id="table">
                      <tr>
                        <th>NAME</th>
                        <th>PROFILE PHOTO</th>
                        <th>MORE INFO</th>
                      </tr>
           
                 {this.state.data.map((item) => {
                    return(
                        <tr >
                        <td>{item.login}</td>
                        <td>
                          <img width="100" height="100" src={item.avatar_url} alt="Photo" />
                        </td>
                        <td>
                        <button id ="more" onClick={()=>this.handleDetails(item.login)}>more details</button>     
                        </td>
                      </tr>
                    );
                  })}
                </table>
        )}
    </div>
 )
}
}
export default User
