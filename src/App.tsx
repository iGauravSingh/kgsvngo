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

import { VideoCarousel } from "./components/section/Video-carousel";


function App() {
  return (
    <div className="">
      <Header />
      <main className="">
        <div className="z-10">
          <Hero />
          
        </div>
        <VideoCarousel />
        <Tagline />
        <Zig />
        <div className="custom-gradient">
          <Activity />
        <Support />
        <Achivers />
        </div>
        
        <Footer />
        {/* <TestImageText /> */}
        {/* <Glassmorphism /> */}
      </main>
    </div>
  );
}

export default App;