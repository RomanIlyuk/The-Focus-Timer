import MusicHeader from "./MusicHeader";
import MusicStation from "./MusicStations";
import MusicPlayer from "./MusicPlayer";
import MusicTip from "./MusicTip";

function MusicWidget() {
  return (
    <section className="bg-slate-800 m-auto p-6 flex flex-col items-center gap-6 max-w-120 border-2 border-indigo-500 rounded-xl">
      <MusicHeader />
      <MusicStation />
      <MusicPlayer />
      <MusicTip />
    </section>
  );
}

export default MusicWidget;
