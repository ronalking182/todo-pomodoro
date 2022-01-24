import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({todo}) => {
  return <div className='List__container'>
      <h1 className='heading'>Things to do:</h1>
      <ul>
       {
           todo.map((item) => (
               <TodoItem key={item.id} todo={item}/>
           ))
       }
       </ul>
  </div>;
};

const mapStateToProps = (state) =>{
return{
    todo : state.Todo.todoItem
}
}

export default connect(mapStateToProps)(TodoList);