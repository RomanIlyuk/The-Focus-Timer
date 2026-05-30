import MusicWidget from "../components/MusicWidget/MusicWidget";
import Timer from "../components/Timer/Timer";
import TimerFooter from "../components/Timer/TimerFooter";
import TimerHeader from "../components/Timer/TimerHeader";

function FocusTimer() {
  return (
    <section className="bg-slate-950 min-h-screen">
      <TimerHeader />
      <div className="flex items-start justify-center p-12 gap-12">
        <Timer />
        <MusicWidget />
      </div>
      <TimerFooter />
    </section>
  );
}

export default FocusTimer;
