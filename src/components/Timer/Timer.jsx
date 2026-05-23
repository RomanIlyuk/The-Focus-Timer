import TimerControls from "./TimerControls";
import TimerCounter from "./TimerCounter";
import TimerDisplay from "./TimerDisplay";
import TimerModes from "./TimerModes";
import TimerStatus from "./TimerStatus";

function Timer() {
  return (
    <div className="bg-slate-800 p-6 flex flex-col items-center gap-6">
      <TimerModes />

      <TimerDisplay />

      <TimerStatus />

      <TimerControls />

      <TimerCounter />
    </div>
  );
}

export default Timer;
