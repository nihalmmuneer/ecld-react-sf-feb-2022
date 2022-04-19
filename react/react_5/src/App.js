// import React from "react";
// import Todo from './components/Todo'
// function App() {
//   return (
//     <div>
//       <Todo/>
//     </div>
//   )
// }
// export default App

import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Registration />
        </div>
      </div>
    </div>
  );
}

export default App;