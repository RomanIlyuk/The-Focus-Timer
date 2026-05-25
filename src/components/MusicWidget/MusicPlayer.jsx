function MusicPlayer({ url }) {
  return (
    <div className="w-[425px] aspect-video rounded-2xl overflow-hidden shadow-lg shadow-indigo-700 border-2 border-indigo-500">
      <iframe
        className="w-full h-full"
        src={url}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPlayer;
