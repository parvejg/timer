import { useEffect, useState } from "react";
import "./Timer.css";
export const Timer = () => {
  const [inputValue, setInputValue] = useState();
  const [ctime, setCTime] = useState();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const getTime = () => {
    const time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(getTime, 1000);
  const startTimeHandler = () => {
    setMinutes(inputValue);
    setInputValue("");
  };
  const resetTimeHandler = () => {
    setMinutes(0);
    setSeconds(0);
  };
  let timer;

  useEffect(() => {
    timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
  }, [minutes, seconds]);
  return (
    <div className="timer-container">
      <div className="timer">
        <h1>Timer</h1>
        <input
          className="timer-input"
          onChange={(e) => setInputValue(Number(e.target.value))}
          placeholder=" Please Enter Minutes"
          type="number"
          min="0"
          max="59"
        />
        <p>current Time: {ctime}</p>
        <div className="output-box">
          <h1 className="timer-time">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}{" "}
          </h1>
        </div>
        <div className="timer-btn-wrapper">
          <button className="timer-btn" onClick={startTimeHandler}>
            {" "}
            Start
          </button>
          <button className="timer-btn" onClick={resetTimeHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
