function TimerStatus({ isRunning }) {
  return (
    <div>
      <p className="text-gray-300 text-lg">
        {isRunning ? "Running" : "Paused"}
      </p>
    </div>
  );
}

export default TimerStatus;
