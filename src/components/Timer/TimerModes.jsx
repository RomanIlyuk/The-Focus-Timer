import Button from "../Buttons/Button";

function TimerModes() {
  return (
    <nav className="flex gap-2 bg-slate-700 p-2 rounded-full ">
      <Button isActive={true}>Focus</Button>
      <Button>Start break</Button>
      <Button>Long break</Button>
    </nav>
  );
}

export default TimerModes;
