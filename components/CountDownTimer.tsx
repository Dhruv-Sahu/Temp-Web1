import React, { useEffect,useState } from 'react';
import styles from './CountDownTimer.module.css'; // Import the CSS module

const CountdownTimer: React.FC = () => {
  const [countdown, setCountdown] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date('2030-01-01T00:00:00Z').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeRemaining = countdownDate - now;

      if (timeRemaining <= 0) {
        // Timer reached the target date
        clearInterval(timerInterval);
        return;
      }

      const years = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ years, days, hours, minutes, seconds });
    };

    const timerInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
<div className={styles['countdown-timer']}>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']} style={{ color: 'rgb(31, 192, 80)'}}>{countdown.years}</div>
        <div className={styles['countdown-label']}>Years</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{countdown.days}</div>
        <div className={styles['countdown-label']} >Days</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']} style={{ color: 'rgb(31, 192, 80)'}}>{countdown.hours}</div>
        <div className={styles['countdown-label']}>Hours</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']}>{countdown.minutes}</div>
        <div className={styles['countdown-label']} >Minutes</div>
      </div>
      <div className={styles['countdown-item']}>
        <div className={styles['countdown-value']} style={{ color: 'rgb(31, 192, 80)'}}>{countdown.seconds}</div>
        <div className={styles['countdown-label']}>Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
