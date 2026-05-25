function MusicPlayer() {
  return (
    <div>
      <iframe
        width="425"
        height="250"
        src="https://www.youtube.com/embed/v=CLeZyIID9Bo"
        frameborder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MusicPlayer;
