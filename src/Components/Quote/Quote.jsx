import React from 'react';
import './Quote.css'

const Quote = () => {


    let today = new Date()

    let time = today.getHours() + ":" + today.getMinutes() 
   let present = today.toDateString()
    console.log(time);

  return <div className='quote__section'>
         <span className='current__time'>
             <span><p>{time}</p></span>
             <span><p>{present}</p></span>
         </span>
         <div className='line'></div>
         <span className='main__quote'>
             <p>"Don't be intimidated by what you don't know. That can be your greatest strength, and ensure that you do thing different from everyone".</p>
         </span>
  </div>;
};

export default Quote;
