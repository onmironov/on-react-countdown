import React from 'react';
import Countdown from 'on-react-countdown';
import './App.css';

function App() {
  const now = new Date().getTime() / 1000;
  const end = now + (60 * 60) + 5;
  const text = {
    days   : 'дн.',
    hours  : 'ч.',
    minutes: 'мин.',
    seconds: 'сек.',
  };

  const handleFinish = () => console.log('finish!');

  return (
    <div className="App">
      <div>
        <Countdown end={end} onEnd={handleFinish} text={text} limit={ 3 } wordsEndingOff/>
      </div>
    </div>
  );
}

export default App;
