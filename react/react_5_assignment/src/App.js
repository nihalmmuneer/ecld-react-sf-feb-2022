import React, { Component } from 'react';
import Login from './Login';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    
    return (
      <div id="App">
        {/* <Todo /> */}
        <Login />
        
      </div>
    );
  }
}

export default App;