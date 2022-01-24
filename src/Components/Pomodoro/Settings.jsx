import {useState, useEffect} from 'react';
import Start from '../Incons/Start'
import Stop from '../Incons/Stop'
import Restart from '../Incons/Restart'
import Button from '../UI/Button/Button';
import './Settings.css'
import {useTimerContext} from '../Store/Context/TimerContext'

const Btn = () => {
  const [Timer, setTimer] = useState({
    work:25,
    shortBreak:5,
    longBreak:10,
    active:'work'
  });


  const {
    UpdateExecuting, 
    StopTimer,
    Settings, 
    ActiveCurrentTimer, 
    executing,
    StartTimer
  } = useTimerContext()

  useEffect(() => {
    UpdateExecuting(executing)
  }, [executing])
  
  

const handleChangeTImer = (event) => {
  const {name, value} = event.target
  switch(name){
    case 'work':
      setTimer({
        ...Timer,
        work:parseInt(value)
      })
      break
    case 'shortBreak':
      setTimer({
        ...Timer,
        shortBreak:parseInt(value)
      })
     break
    case 'longBreak' :
      setTimer({
        ...Timer,
        longBreak:parseInt(value)
      })
     break
     default:
       return
  }
}

function handleSubmitTimer(event){
  event.preventDefault()
  UpdateExecuting(Timer)
  // console.log(Timer);
}


  return (
    <div className='form-container'>
  <form noValidate onSubmit={handleSubmitTimer} >
     <span className='m'>
     <Button title='set Timer' type='submit'/>
         <input type='number' name='work' onChange={handleChangeTImer} value={Timer.work}/>
         <input type='number' name='shortBreak' onChange={handleChangeTImer} value={Timer.shortBreak}/>
         <input type='number' name='longBreak' onChange={handleChangeTImer} value={Timer.longBreak}/>
     </span>
     <span className='but'>
       <div onClick={StartTimer}>
       <Start/>
       </div>
       <div onClick={StopTimer}>
       <Stop/>
       </div>
       <div onClick={Settings}>
       <Restart/>
       </div>
     </span>
     <span className='activeBTN'>
          <Button title='work'
           activeClass= {executing.active === 'work' && "active-label"  }
          event={()=>ActiveCurrentTimer('work')}
           />
          <Button title='short break' 
           activeClass={ executing.active === 'shortBreak' && "active-label"  }
          event={()=>ActiveCurrentTimer('shortBreak')}/>
          <Button title='long break' 
           activeClass= { executing.active === 'longBreak' && "active-label"  }
          event={()=>ActiveCurrentTimer('longBreak')}/>
     </span>
  </form>
  </div>
  );
};

export default Btn;
