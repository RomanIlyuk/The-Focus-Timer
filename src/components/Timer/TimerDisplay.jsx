/* eslint-disable no-unused-vars */
import { formatTime } from "../../utils/formatTime";

function TimerDisplay({ time, setTime }) {
  return (
    <div>
      <p className="text-7xl font-bold text-white tracking-tight">
        {formatTime(time)}
      </p>
    </div>
  );
}

export default TimerDisplay;
