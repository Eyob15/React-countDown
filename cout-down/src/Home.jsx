import React, { useState } from 'react';

const Home = ({ setTargetDate }) => {
  const [inputDate, setInputDate] = useState('');

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  const handleSetTargetDate = () => {
    if (inputDate) {
      setTargetDate(inputDate);
    }
  };

  return (
    <div className="home-container">
      <h1>Set Target Date</h1>
      <input
        type="datetime-local"
        value={inputDate}
        onChange={handleDateChange}
        className="date-input"
      />
      <button className="set-date-button" onClick={handleSetTargetDate}>
        Set Target Date
      </button>
    </div>
  );
};

export default Home; 