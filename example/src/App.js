import React from 'react';
import Countdown from 'on-react-countdown';
import './App.css';

function App() {
  const end = 1569493980;
  const text = {
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
  };

  const handleFinish = () => console.log('finish!');

  return (
    <div className="App">
      <div>
        <Countdown end={end} onEnd={handleFinish} utc={3}/>
      </div>
    </div>
  );
}

export default App;
