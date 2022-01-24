import React from 'react';
import './Navigation.css'
// import  Container  from '../UI/Container/Container';
import Clock from '../Incons/Clock'
import ListIcon from '../Incons/ListIcon'
import SettingsIcon from '../Incons/SettingsIcon'
import Logout from '../Incons/Logout'
import Pic from '../images/study.png'

const Navigation = () => {
  return <div className='genNav'>
        <div className='top'>
            <h1>YoPro.</h1>
            <p>Yor productive assistant</p>
        </div>
        <div className='bottom'>
            <span className='header'>
               <p><Clock className='c'/>Pomodoro Timer</p> 
                </span>
            <span className='menu'>
                <ul>
                <li><ListIcon/> To Do List</li>
                 <li><SettingsIcon/> Settings</li>
                 <li><Logout/> Logout</li>
                </ul>
            </span>
            <span className='img'>
            <img src={Pic} alt="table"  />
            </span>
        </div>
  </div>;
};

export default Navigation;
