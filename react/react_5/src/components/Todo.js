import React,{Component} from "react";
import {v4 as uuidv4} from 'uuid';
import TodoItem from './TodoItem'

class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            list:[]
        }
}
render(){
    const handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            value:e.target.value
            
        })
    }
    const handleAddTask = () => {
        console.log('addingTask');
        console.log(this.state.list);
        if(this.state.value ===''){
            alert('Enter a task');
        }
        this.setState({
            list:[...this.state.list,{
                id:uuidv4(),
                task:this.state.value
            }]
        })
        console.log(this.state.value)
    }
return(
    <div>
        <h1>Todo App</h1>
        <input placeholder = "Enter Task" onChange ={handleChange}/>
        <button onClick = {handleAddTask}>Add</button>
        {
            this.state.list.map((item)=>{
                return(
                    <TodoItem key={item.id} task = {item.task}/>
                )
            })
        }
    </div>
)
}
}
export default Todo