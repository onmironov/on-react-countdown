import React from 'react';
import Countdown from 'on-react-countdown';
import './App.css';

function App() {
  const ny2020 = 1577836800;

  return (
    <div className="App">
      <div className="App-block">
        <Countdown end={ny2020} utc={3}/>
      </div>
    </div>
  );
}

export default App;
