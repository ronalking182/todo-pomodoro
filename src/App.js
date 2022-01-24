import './App.css';
import Navigation from './Components/Navigation/Navigation.jsx'
import PomodoroContainer from './Components/Pomodoro/PomodoroContainer';
import Quote from './Components/Quote/Quote';
import { TimerContext } from './Components/Store/Context/TimerContext';
import TodoInput from './Components/Todo/TodoInput';
import TodoItem from './Components/Todo/TodoItem';
import TodoList from './Components/Todo/TodoList';
// import Container from './Components/UI/Container/Container.jsx'

function App() {
  return (
    <TimerContext>
    <div className="container">
     <div className='nav'>
       <Navigation/>
     </div>
     <div className='main'>
       <section className='time__todo'>
         <div className='time'>
           <PomodoroContainer/>
         </div>
         <div className='todoCon'>
           <TodoInput/>
           <TodoList/>
         </div>
       </section>
       <section className='quote'>
         <Quote/>
       </section>
     </div>
    </div>
    </TimerContext>
  );
}

export default App;
