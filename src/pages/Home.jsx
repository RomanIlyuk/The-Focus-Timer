import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MusicWidget from "../components/MusicWidget/MusicWidget";
import Timer from "../components/Timer/Timer";

function Home() {
  return (
    <>
      <Header />

      <Timer />
      <MusicWidget />

      <Footer />
    </>
  );
}

export default Home;
