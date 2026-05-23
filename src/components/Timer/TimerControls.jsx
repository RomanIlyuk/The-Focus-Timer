function TimerControls() {
  return (
    <div className="flex items-center gap-3">
      <button className="px-6 py-3 rounded-xl bg-slate-600 text-white font-medium hover:bg-slate-500 transition-all duration-200">
        Start
      </button>

      <button className="px-6 py-3 rounded-xl bg-slate-700 text-slate-200 font-medium hover:bg-slate-600 transition-all duration-200">
        Reset
      </button>
    </div>
  );
}

export default TimerControls;
