import React from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { useTimerContext } from '../Store/Context/TimerContext';

const AnimationCountDown = ({children, key, animate, timer}) => {
    const {StopTimer,} = useTimerContext()
    return(
        <span className='Co'>
    <CountdownCircleTimer
        key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[['#151932']]}
        strokeWidth={6}
        size={140}
        trailColor='#FE6F6B'
        onComplete={() =>{
            StopTimer()
        }}
        >
            {children}
        </CountdownCircleTimer>
        </span>
    );
};

export default AnimationCountDown;
