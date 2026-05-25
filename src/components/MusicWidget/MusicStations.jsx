/* eslint-disable no-unused-vars */

import MusicList from "./MusicList";

const musicData = [
  {
    style: "Lofi beats",
    description: "Relaxed lofi hip-hop for steady focus.",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },

  {
    style: "Chill jazz",
    description: "Mellow jazz for reading and deep work.",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },

  {
    style: "Nature ambience",
    description: "Gentle rain and forest sounds, no music.",
    url: "https://www.youtube.com/embed/VIDEO_ID",
  },
];

function MusicStations() {
  return (
    <nav aria-label="Music stations">
      <MusicList items={musicData} />
    </nav>
  );
}

export default MusicStations;
