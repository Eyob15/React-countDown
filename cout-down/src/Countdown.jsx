import React, { useEffect, useState } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate, resetCountdown }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      resetCountdown(); 
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <span>{timeLeft.days || 0}</span>
        <span>Days</span>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.hours || 0}</span>
        <span>Hours</span>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.minutes || 0}</span>
        <span>Minutes</span>
      </div>
      <div className="countdown-item">
        <span>{timeLeft.seconds || 0}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default Countdown; 