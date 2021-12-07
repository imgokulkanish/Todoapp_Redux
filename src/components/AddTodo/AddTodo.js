import React from 'react';
import { connect } from "react-redux";
import './AddTodo.css';
import { addTodo } from "../../actions"
export const AddTodo = (props) => {
    return (
        <>
        <h1 className="todo">TODO App</h1>
       <form
          onSubmit={(event) =>{
              event.preventDefault();
              let input = event.target.userInput.value;
              props.dispatch(addTodo(input));
              event.target.userInput.value = "";
          }}
          >
        <input type="text" name="userInput" placeholder="Task"/>
        <button className="button">Add Task</button>
        </form>
        </>
    );
};

export default connect()(AddTodo);
