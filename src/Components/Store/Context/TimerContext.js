import {createContext, useContext, useState} from 'react';


export const TimeContext = createContext()

export const TimerContext = ({children}) => {
    const [pomodoro, setPomodoro] = useState(0);
    const [executing, setExecuting] = useState({});
    const [animate, setAnimate] = useState(false);

    //startTimer
    const StartTimer = () => {
        setAnimate(true)
    }

    //pauseTimer
    const PauseTimer = () => {
        setAnimate(false)
    }

    //stopAnimate
    const StopTimer = () => {
        setAnimate(false)
    }


    //getItems from  updateExecute inside settings Component
function UpdateExecuting(time){
        setExecuting(time)
        CurrentTimer(time)
}
  


        //getItemFrom UpdateExecuting
function CurrentTimer(evaluation){
            switch (evaluation.active) {
                case 'work':
                    setPomodoro(evaluation.work)
                    break;
                 case 'shortBreak':
                    setPomodoro(evaluation.shortBreak)
                     break;
                 case 'longBreak':
                    setPomodoro(evaluation.longBreak)
                       break;
                default:
                    setPomodoro(0)
            }
        }


              //get the state of the timer 
function ActiveCurrentTimer(items){  
    executing.active = items
    UpdateExecuting({
        ...executing
    })
    // console.log(executing);
    CurrentTimer(executing)
}  

  
    //settingsForTimer
function Settings(){
    setExecuting({})
    setPomodoro(0)
    }


    //animationTimer function //directly from the documentation of the timer count down npm package
function childrenContent({remainingTime}){
        const minute = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        return `${minute}:${seconds}`
    }

    const timerContextValue = {
        PauseTimer,
        Settings,
        StartTimer,
        StopTimer,
        childrenContent,
        UpdateExecuting,
        ActiveCurrentTimer,
        pomodoro,
        executing,
        animate,
    }
  return (
  <TimeContext.Provider value={timerContextValue}>
      {children}
</TimeContext.Provider> );
};


export const useTimerContext = () => useContext(TimeContext)

