import MusicHeader from "./MusicHeader";
import MusicStation from "./MusicStations";
import MusicTip from "./MusicTip";

function MusicWidget() {
  return (
    <section className="bg-slate-800 w-full max-w-lg p-6 flex flex-col items-center gap-6  border-2 border-indigo-500 rounded-xl">
      <MusicHeader />
      <MusicStation />
      <MusicTip />
    </section>
  );
}

export default MusicWidget;
