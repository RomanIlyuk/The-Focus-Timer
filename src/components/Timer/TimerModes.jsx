import ButtonModes from "../Buttons/ButtonModes";

function TimerModes({ mode, onModeChange }) {
  return (
    <nav className="flex gap-2 bg-slate-700 p-2 rounded-full ">
      <ButtonModes
        onClick={() => onModeChange("focus")}
        isActive={mode === "focus"}
      >
        Focus
      </ButtonModes>
      <ButtonModes
        onClick={() => onModeChange("shortBreak")}
        isActive={mode === "shortBreak"}
      >
        Start Break
      </ButtonModes>
    </nav>
  );
}

export default TimerModes;
