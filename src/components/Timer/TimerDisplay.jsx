import { formatTime } from "../../utils/formatTime";

function TimerDisplay({ time }) {
  return (
    <div>
      <p className="text-7xl font-bold text-white tracking-tight">
        {formatTime(time)}
      </p>
    </div>
  );
}

export default TimerDisplay;
