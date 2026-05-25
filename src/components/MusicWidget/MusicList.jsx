import MusicItem from "./MusicItem";

function MusicList({ items, onSelect, selectedMusic }) {
  return (
    <ul className="flex justify-center items-stretch gap-4">
      {items.map((music) => (
        <MusicItem
          key={music.style}
          music={music}
          onSelect={onSelect}
          selectedMusic={selectedMusic}
        />
      ))}
    </ul>
  );
}

export default MusicList;
