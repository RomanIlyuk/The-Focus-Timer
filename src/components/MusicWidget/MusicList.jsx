import MusicItem from "./MusicItem";

function MusicList({ items }) {
  return (
    <ul className="flex justify-center items-stretch gap-4">
      {items.map((music) => (
        <MusicItem key={music.style} music={music} />
      ))}
    </ul>
  );
}

export default MusicList;
