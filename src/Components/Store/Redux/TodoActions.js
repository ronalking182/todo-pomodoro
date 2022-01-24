import { Types } from "./TodoTypes"

export const addTodoList = (item) =>{
   return{
       type:Types.ADD_TODO,
       payload:item
   }
}

export const removeTodoList = (item) =>{
    return{
        type:Types.REMOVE_TODO,
        payload:item
    }
 }

 export const updateTodoList = (item) =>{
    return{
        type:Types.UPDATE_TODO,
        payload:item
    }
 }