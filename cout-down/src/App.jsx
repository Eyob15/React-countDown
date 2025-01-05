import React, { useState } from 'react';
import Countdown from './Countdown';
import Home from './Home';
import './App.css';

function App() {
  const [targetDate, setTargetDate] = useState('2025-01-31T23:59:59'); 
  const [isActive, setIsActive] = useState(false);
  const [isCountdownActive, setIsCountdownActive] = useState(false);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
    setIsActive(true);
    setIsCountdownActive(true); 
  };

  const resetCountdown = () => {
    setTargetDate('2024-12-31T23:59:59'); 
    setIsActive(false); 
    setIsCountdownActive(false); 
  };

  return (
    <div className="app-container">
      {isCountdownActive ? (
        <Countdown targetDate={targetDate} resetCountdown={resetCountdown} />
      ) : (
        <Home setTargetDate={handleSetTargetDate} />
      )}
      {isActive && isCountdownActive && (
        <button className="reset-button" onClick={resetCountdown}>
          Reset Countdown
        </button>
      )}
    </div>
  );
}

export default App;
