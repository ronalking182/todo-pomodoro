import React from 'react';
import './PomodoroContainer.css'
import Button from '../UI/Button/Button';
import AnimationCountDown from './AnimationCountDown';
import Settings from './Settings'
import { useTimerContext } from '../Store/Context/TimerContext';

const PomodoroContainer = () => {
  const {
    childrenContent,
    pomodoro,
    animate

  } = useTimerContext()
  return( <div className='pom__container'>
        <div className='activeStateBtn'>
        <Button title='Pomodoro' />
        {/* <Button title='Break'/> */}
        </div>
        <div className='time__container'>
            {/* <div className='circle'> */}
              <AnimationCountDown  animate={animate} timer={pomodoro} key={pomodoro}>
                {childrenContent}
              </AnimationCountDown>
            {/* </div> */}
            {/* <div className='btn'> */}
              <Settings/>
            {/* </div> */}
        </div>
  </div>
  );
};

export default PomodoroContainer;
