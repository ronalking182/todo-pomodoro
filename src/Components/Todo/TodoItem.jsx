import {useState} from 'react';
import {BsCheck2Square, BsCheckLg} from 'react-icons/bs'
import {BiSquare} from 'react-icons/bi'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
import './TodoItem.css'
import { connect } from 'react-redux';
import { removeTodoList, updateTodoList } from '../Store/Redux/TodoActions';

const TodoItem = ({todo, removeTodoList, updateTodoList}) => {
const [editable, setEditable] = useState(false);
const [editableValue, setEditableValue] = useState(todo.task);


const handleEditable = () =>{
     setEditable(true)
}


const handleEditableInputChange = (event) =>{
    setEditableValue(event.target.value)
}

const handleSubmitHandler = () =>{
    updateTodoList({
        ...todo,
        task:editableValue
    })
   setEditable(false)
}

  return <li className='items'>
       <p className='listItem'>
        {todo.completed ? <BsCheck2Square/> : <BiSquare/>} 
       {""} 
       {editable ? <input type='text' value={editableValue} onChange={handleEditableInputChange} className='value'/>
       :
       todo.task
       }

           {editable ? <span className='btXX'> <BsCheckLg onClick={handleSubmitHandler}/> </span>:
                 <span className='btXX'>
               <AiOutlineEdit onClick={handleEditable} />
            <AiOutlineDelete onClick={()=> removeTodoList(todo)}/>
           </span>
           }
       </p>
  </li>;
};

const mapDispatchToProps = dispatch =>{
    return{
        removeTodoList:item =>dispatch(removeTodoList(item)),
       updateTodoList:item =>dispatch( updateTodoList(item))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem);

