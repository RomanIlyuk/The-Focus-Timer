import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MusicWidget from "../components/MusicWidget/MusicWidget";
import Timer from "../components/Timer/Timer";

function Home() {
  return (
    <>
      <Header />
      <div className="flex items-start justify-center p-12 gap-12">
        <Timer />
        <MusicWidget />
      </div>
      <Footer />
    </>
  );
}

export default Home;
