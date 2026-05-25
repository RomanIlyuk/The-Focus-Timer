import MusicItem from "./MusicItem";

function MusicList({ items, onSelect }) {
  return (
    <ul className="flex justify-center items-stretch gap-4">
      {items.map((music) => (
        <MusicItem key={music.style} music={music} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default MusicList;
