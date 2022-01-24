import './App.css';
import Navigation from './Components/Navigation/Navigation.jsx'
import PomodoroContainer from './Components/Pomodoro/PomodoroContainer';
import { TimerContext } from './Components/Store/Context/TimerContext';
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
         <div className='todoCon'></div>
       </section>
       <section className='quote'></section>
     </div>
    </div>
    </TimerContext>
  );
}

export default App;
