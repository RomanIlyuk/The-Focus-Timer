function TimerControls({ isRunning, onStart, onReset }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onStart}
        className="px-6 py-3 rounded-xl bg-slate-700 text-white font-medium hover:bg-slate-600 transition-all duration-200"
      >
        {isRunning ? "Stop" : "Start"}
      </button>

      <button
        onClick={onReset}
        className="px-6 py-3 rounded-xl bg-slate-700 text-white font-medium hover:bg-slate-600 transition-all duration-200"
      >
        Reset
      </button>
    </div>
  );
}

export default TimerControls;
