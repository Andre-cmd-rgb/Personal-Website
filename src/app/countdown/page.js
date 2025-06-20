"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => { setCountDown(countDownDate - new Date().getTime()); }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);
  if (countDown < 0) return { finished: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return { finished: false, days, hours, minutes, seconds };
};

export default function CountdownPage() {
  const { finished, days, hours, minutes, seconds } = useCountdown("Jan 1, 2026 00:00:00");
  return (
    <>
      <Header />
      <section className="section" style={{ textAlign: 'center' }}>
        <h2>⏳ Countdown to 2026</h2>
        <p>Time until the new year:</p>
        <div className="timer-display">
          {finished ? "🎉 Happy New Year!" : <span>{`${days}d ${hours}h ${minutes}m ${seconds}s`}</span>}
        </div>
      </section>
      <Footer />
    </>
  );
}