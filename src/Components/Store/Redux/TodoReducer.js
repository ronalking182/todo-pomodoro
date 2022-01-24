import React from 'react';
import { Types } from './TodoTypes';
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    todoItem :[],
}


const TodoReducer = (state = initialState, action) => {
    let NewTodo
   switch (action.type) {
       case Types.ADD_TODO :
           NewTodo = {
               task:action.payload,
               id:uuidv4(),
               completed:false
           }
           let addMe = [NewTodo, ...state.todoItem]
           return{
               ...state,
                todoItem:addMe
           }
        case Types.REMOVE_TODO:
           return{
            ...state,
            todoItem:state.todoItem.filter(item => item.id !== action.payload.id)
           }
    case Types.UPDATE_TODO:
           const updatedToDo = state.todoItem.map((item) => {
               if(item.id === action.payload.id){
                   return{
                       ...item,
                       task:action.payload.task
                   }
               }
               return item
           })
           return{
               ...state,
               todoItem:updatedToDo
           }
       default:
           return state;
   }
};

export default TodoReducer;




