import {useState} from 'react';
import Button from '../UI/Button/Button';
import './TodoInput.css'
import { connect } from 'react-redux';
import { addTodoList } from '../Store/Redux/TodoActions';

const TodoInput = ({addTodoList}) => {
const [inputValue, setInputValue] = useState();

const handleInputChange = (event) =>{
const {name, value} = event.target
setInputValue(value)
}


const handleInputSubmit = (event) =>{
    event.preventDefault()
    if(!inputValue){
        return
    }
        addTodoList(inputValue)
        setInputValue('')
}

  return <form className='form' onSubmit={handleInputSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} className='value'/>
         <Button type='submit' title='add' />
  </form>;
};

const mapDispatchToProps = (dispatch) =>{
return{
    addTodoList:item => dispatch(addTodoList(item))
}
}

export default connect(null, mapDispatchToProps)(TodoInput);
