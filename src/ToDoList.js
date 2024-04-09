import { Component } from "react";
import checklist from './check.jpg'

export class ToDoList extends Component{
    state={
        userinput: "",
        todoList:[]
    }
    onChangeEvent(e) {
        this.setState({ userinput: e });
        console.log(e)
    }
    addItem(input) {
        if (input === '') {
            alert ('Please enter an item')
        } else{
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({ todoList: listArray, userinput: "" })
        console.log(listArray)
       } 
    }
    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }
     cross(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }
    onFormSubmit(e) {
        e.preventDefault();
        // console.log('clicked')
    }
    render() {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                    <input type="text"
                    placeholder="What do you want to do??"
                    onChange={(e)=> {this.onChangeEvent(e.target.value)}}
                    value={this.state.userinput}/>
                </div>
                <div  className="container">
                <button onClick={() => this.addItem(this.state.userinput)} className="btn add">Add</button>
                </div>
                <ul  className="container">
                    {this.state.todoList.map((item, index) => (
                        <li onClick={this.cross} key={index}>
                            <img src={checklist} width='30px' alt="checklist"/>{item}</li>
                    ))}
                </ul>
                <div  className="container">
                <button onClick={() => this.deleteItem(this.state.userinput)} className="btn delete">Delete</button>
                    </div>
                    </form>
            </div>
        )
    }
}