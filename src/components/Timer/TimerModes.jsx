import ButtonModes from "../Buttons/ButtonModes";

function TimerModes() {
  return (
    <nav className="flex gap-2 bg-slate-700 p-2 rounded-full ">
      <ButtonModes isActive={true}>Focus</ButtonModes>
      <ButtonModes>Start Break</ButtonModes>
      <ButtonModes>Long Break</ButtonModes>
    </nav>
  );
}

export default TimerModes;
