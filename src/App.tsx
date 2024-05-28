import "./App.css";
import Achivers from "./components/Achivers";
import Activity from "./components/Activity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Support from "./components/Support";
import Tagline from "./components/Tagline";
import Zig from "./components/Zig";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";
import { VideoCarousel } from "./components/section/Video-carousel";


function App() {
  return (
    <>
      <Header />
      <main>
        <div className="z-10">
          <Hero />
          
        </div>
        <VideoCarousel />
        <Tagline />
        <Zig />
        <Activity />
        <Support />
        <Achivers />
        <Footer />
      </main>
    </>
  );
}

export default App;