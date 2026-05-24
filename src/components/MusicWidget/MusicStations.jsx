function MusicStations() {
  return (
    <nav aria-label="Music stations">
      <ul>
        <li>
          <button type="button ">
            <h3 className="text-white text-2xl">Lofi beats</h3>
            <p className="text-gray-300 text-lg">
              Relaxed lofi hip-hop for steady focus.
            </p>
          </button>
        </li>

        <li>
          <button type="button">
            <h3 className="text-white text-2xl">Chill jazz</h3>
            <p className="text-gray-300 text-lg">
              Mellow jazz for reading and deep work.
            </p>
          </button>
        </li>

        <li>
          <button type="button">
            <h3 className="text-white text-2xl">Nature ambience</h3>
            <p className="text-gray-300 text-lg">
              Gentle rain and forest sounds, no music.
            </p>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MusicStations;
