import React, { useState, useEffect } from 'react';

const DigitalClock = () => {

  const [time, setTime] = useState(new Date());


  useEffect(() => {

    const tick = () => {
      setTime(new Date());
    };

    const intervalId = setInterval(tick, 1000);

 
    return () => clearInterval(intervalId);
  }, []);


  const formattedTime = time.toLocaleTimeString();

  return (
    <div style={{ fontSize: '2em', fontFamily: 'monospace', textAlign: 'center' }}>
      {formattedTime}
    </div>
  );
};

export default DigitalClock;
