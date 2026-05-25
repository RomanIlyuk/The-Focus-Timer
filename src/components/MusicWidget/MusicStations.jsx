import { useState } from "react";
import MusicList from "./MusicList";
import MusicPlayer from "./MusicPlayer";

const musicData = [
  {
    style: "Lofi beats",
    description: "Relaxed lofi hip-hop for steady focus.",
    url: "https://www.youtube.com/embed/CLeZyIID9Bo",
  },

  {
    style: "Chill jazz",
    description: "Mellow jazz for reading and deep work.",
    url: "https://www.youtube.com/embed/3SGNtFQ1v3M",
  },

  {
    style: "Nature ambience",
    description: "Gentle rain and forest sounds, no music.",
    url: "https://www.youtube.com/embed/xNN7iTA57jM",
  },
];

function MusicStations() {
  const [selectedMusic, setSelectedMusic] = useState(musicData[0]);

  return (
    <>
      <nav aria-label="Music stations">
        <MusicList
          items={musicData}
          onSelect={setSelectedMusic}
          selectedMusic={selectedMusic}
        />
      </nav>
      <MusicPlayer url={selectedMusic.url} />
    </>
  );
}

export default MusicStations;
