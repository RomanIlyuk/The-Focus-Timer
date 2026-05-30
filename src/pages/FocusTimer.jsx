import MusicWidget from "../components/MusicWidget/MusicWidget";
import Timer from "../components/Timer/Timer";
import TimerFooter from "../components/Timer/TimerFooter";
import TimerHeader from "../components/Timer/TimerHeader";
import MainLayout from "../layout/MainLayout";

function FocusTimer() {
  return (
    <MainLayout>
      <TimerHeader />
      <div className="flex items-start justify-center p-12 gap-12">
        <Timer />
        <MusicWidget />
      </div>
      <TimerFooter />
    </MainLayout>
  );
}

export default FocusTimer;
