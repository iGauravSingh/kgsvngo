import "./App.css";
import "./custom.css";
import Achivers from "./components/Achivers";
import Activity from "./components/Activity";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Support from "./components/Support";
import Tagline from "./components/Tagline";
import Zig from "./components/Zig";
import Hero from "./components/section/Hero";
import TestImageText from "./components/TestImageText";

import { VideoCarousel } from "./components/section/Video-carousel";


function App() {
  return (
    <>
      <Header />
      <main className=" custom-gradient">
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
        {/* <TestImageText /> */}
      </main>
    </>
  );
}

export default App;