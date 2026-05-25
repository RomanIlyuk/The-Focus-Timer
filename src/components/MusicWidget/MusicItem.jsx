function MusicItem({ music }) {
  return (
    <li>
      <button className="flex flex-col text-left border border-indigo-500 rounded-xl p-2.5 h-full w-36">
        <h3 className="text-white text-xl">{music.style}</h3>
        <p className="text-gray-300 text-md mt-2">{music.description}</p>
      </button>
    </li>
  );
}

export default MusicItem;
