import React, { Component } from 'react';
import './Todo.css'
import Login from './Login'
import Pagination from './Pagination';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      isLoggedIn:true,
      currentPage:1,
      mockData: [
   
    ]
    }
  }

  onSubmitHandle(event) {
      console.log(event.target,'onSubmitHandle');
     event.preventDefault();

    this.setState({
      mockData: [...this.state.mockData, {
        id: Date.now(),
        title: event.target.item.value,
        done: false,
        date: new Date()
      }]
    });
    console.log(this.state.title,'addTitle');
    console.log(this.state.id,'addId');
    console.log(this.state.date,'addDate');

    event.target.item.value = '';
  }

  onDeleteHandle() {
    let id = arguments[0];
    console.log(arguments[0],'argument0');

    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
            console.log(id,'id')
            console.log(item);
          return item;
          
        }
      })
    });
  }

  onEditHandle(event) {
      console.log(event,'editHandle');
      console.log(arguments[0],'argument0');
      console.log(arguments[1],'argument1');
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    });
  }

  onUpdateHandle(event) {
      console.log(event,'event')
      console.log(event.target.value,'event value');
    event.preventDefault();

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === this.state.id) {
            console.log(item.id,'itemId');
            console.log(this.state.id,'stateId');
          item['title'] = event.target.updatedItem.value;
          console.log(item,'updated Item')
          return item;
          
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      mockData: this.state.mockData.map(item => {
        if (item.id === id) {
          item['done'] = true;
          console.log(item['done'],'item[done]');
          console.log(item,'oncompleteItem')
          return item;
          
        }

        return item;
      })
    });
  }
  handleLogout = (e) => {
    console.log('u logged out');
    this.setState({
      isLoggedIn:false
    })
  }
  handlePage = (num) => {
    console.log(num,'pagenum')
    this.setState({
      currentPage:num
    })
  }

  renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
        <input id ="myInput" type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
        <button id = "update" className="update-add-item">Update</button>
      </form>
    }
  }

  render() {
    console.log(this.state.mockData,'mockData');
    const {mockData , currentPage} = this.state;
    const perPage = 3;
    const totalPages = Math.ceil(mockData.length / perPage);
    console.log(currentPage,'currentPage');
    console.log(mockData,'mockdata');
    return (
      <div>
        {
        this.state.isLoggedIn ? (
          <div id="content">
          <h1>What needs to be done?</h1>
          <button id ="logout" onClick={this.handleLogout}>Logout</button>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input id = 'myInput' type="text" placeholder ='Enter The Task' name="item" className="item" />
          <button id='add' className="btn-add-item">Add</button>
        </form>
        <ul>
          {/* {this.state.mockData.map(item => ( */}
          {this.state.mockData.filter((_,index) => index >= (currentPage - 1) * perPage && (index < currentPage * perPage)).map(item => (
            <li key={item.id} className={ item.done ? 'done' : 'hidden' }> 
              {item.title}
              <span id="span">
              <button id = "delete" onClick={this.onDeleteHandle.bind(this, item.id)}>&#128473;</button>
              <button id = "edit" onClick={this.onEditHandle.bind(this, item.id, item.title)}>✎</button>
              <button id = "complete" onClick={this.onCompleteHandle.bind(this, item.id)}>✓</button>
              </span>
            </li>
          ))}
        </ul>  
        
      </div>
        ):(
          <div>
            <Login />
          </div>
        )
    } 
    <Pagination totalPages={totalPages} handlePage = {this.handlePage}/>  
        </div>
  
    );
        
  }
}

export default Todo;