import ButtonModes from "../Buttons/ButtonModes";

function TimerModes() {
  return (
    <nav className="flex gap-2 bg-slate-700 p-2 rounded-full ">
      <ButtonModes isActive={true}>Focus</ButtonModes>
      <ButtonModes>Start break</ButtonModes>
      <ButtonModes>Long break</ButtonModes>
    </nav>
  );
}

export default TimerModes;
