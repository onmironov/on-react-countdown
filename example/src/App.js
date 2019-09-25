import React from 'react';
import Countdown from 'on-react-countdown';
import './App.css';

function App() {
  const ny2020 = 1892563200;
  const text = {
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд'],
  };

  return (
    <div className="App">
      <div>
        <Countdown end={ny2020} text={text} lang="ru" limit={2}/>
      </div>
    </div>
  );
}

export default App;
