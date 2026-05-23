/* eslint-disable no-unused-vars */

import { useState } from "react";
import TimerControls from "./TimerControls";
import TimerCounter from "./TimerCounter";
import TimerDisplay from "./TimerDisplay";
import TimerModes from "./TimerModes";
import TimerStatus from "./TimerStatus";

function Timer() {
  const [mode, setMode] = useState("focus");
  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    if (!isRunning) {
      setCount((c) => c + 1);
    }
    setIsRunning(!isRunning);
  }

  function handleReset() {
    setIsRunning(false);
    setCount(0);
  }

  return (
    <div className="bg-slate-800 m-auto p-6 flex flex-col items-center gap-6 max-w-120 border-2 border-indigo-500 rounded-xl">
      <TimerModes />

      <TimerDisplay time={time} setTime={setTime} />

      <TimerStatus isRunning={isRunning} setIsRunning={setIsRunning} />

      <TimerControls
        isRunning={isRunning}
        onStart={handleClick}
        onReset={handleReset}
      />

      <TimerCounter count={count} setCount={setCount} />
    </div>
  );
}

export default Timer;
