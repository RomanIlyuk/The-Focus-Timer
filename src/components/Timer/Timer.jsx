/* eslint-disable no-unused-vars */
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import TimerControls from "./TimerControls";
import TimerCounter from "./TimerCounter";
import TimerDisplay from "./TimerDisplay";
import TimerModes from "./TimerModes";
import TimerStatus from "./TimerStatus";

const modes = {
  focus: 25 * 60,
  shortBreak: 5 * 60,
};

function Timer() {
  const [mode, setMode] = useState("focus");

  const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  function handleModeChange(newMode) {
    setMode(newMode);
    setTime(modes[newMode]);
    setIsRunning(false);
  }

  function handleClick() {
    if (!isRunning && time >= 1) {
      setCount((c) => c + 1);
    }
    setIsRunning(!isRunning);
  }

  function handleReset() {
    if (mode === "focus") setTime(modes["focus"]);
    if (mode === "shortBreak") setTime(modes["shortBreak"]);
    setIsRunning(false);
    setCount(0);
  }

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          setIsRunning(false);
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      if (mode === "focus") {
        toast.success("Break time!");
      }
      if (mode === "shortBreak") {
        toast.success("Focus time!");
      }
    }
  }, [time, mode]);

  return (
    <section className="bg-slate-800 w-full max-w-md p-6 flex flex-col items-center gap-6  border-2 border-indigo-500 rounded-xl">
      <TimerModes mode={mode} onModeChange={handleModeChange} />

      <TimerDisplay time={time} setTime={setTime} />

      <TimerStatus isRunning={isRunning} setIsRunning={setIsRunning} />

      <TimerControls
        isRunning={isRunning}
        onStart={handleClick}
        onReset={handleReset}
      />

      <TimerCounter count={count} />
    </section>
  );
}

export default Timer;
