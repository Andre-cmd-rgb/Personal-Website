import React from 'react';

const random = (min, max) => Math.random() * (max - min) + min;

const TunnelBackground = () => {
  const streaks = [...Array(60)].map((_, i) => {
    return (
      <div
        key={`streak-${i}`}
        className="streak"
        style={{
          '--angle': `${random(0, 360)}deg`,
          animationDelay: `${random(0, 0)}s`, // Slightly increased delay range
          // THE KEY CHANGE IS HERE: Slower and more varied duration
          animationDuration: `${random(2.5, 8.0)}s`,
        }}
      />
    );
  });

  return (
    <div className="tunnel-container">
      {streaks}
    </div>
  );
};

export default TunnelBackground;