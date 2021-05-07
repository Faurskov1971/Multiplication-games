import React, { useState, useEffect } from "react";

const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter]   = useState(10);

  useEffect(() => {
    let intervalId:any;
    if(counter<=0){
      // Tiden er gået
      setIsActive(false);
      setCounter(0);
    }
    if (isActive) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => setIsActive(!isActive)} className="start">
          {isActive ? counter : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;