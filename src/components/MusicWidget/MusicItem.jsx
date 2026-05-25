function MusicItem({ music, onSelect, selectedMusic }) {
  const isActive = music.style === selectedMusic.style;

  return (
    <li>
      <button
        onClick={() => onSelect(music)}
        className={`flex flex-col text-left border-2 border-indigo-500 rounded-xl p-2.5 h-full w-36
        ${
          isActive
            ? "border-3 border-indigo-500 bg-slate-700"
            : "border-2 border-indigo-500 hover:bg-slate-700"
        }
        
        `}
      >
        <h3 className="text-white text-xl">{music.style}</h3>
        <p className="text-gray-300 text-md mt-2">{music.description}</p>
      </button>
    </li>
  );
}

export default MusicItem;
