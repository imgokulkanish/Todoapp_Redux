import React from 'react'
import { connect } from "react-redux";
import {deleteTodo} from '../../actions';
import './List.css'
function List(props) {
    return (
        <ul>
            {props.todos.map((todo,index) =>(
              <li key={index}>{todo.message}
                    <div className = "delete"
                        onClick={() => props.dispatch(deleteTodo(todo.id))}
                    >
                    </div>  
              </li>
            ))}
        </ul>
            
    )   
}
 const  mapStateToProps = (state) =>({
     todos:state.todos.data,
 })
export default connect(mapStateToProps)(List);