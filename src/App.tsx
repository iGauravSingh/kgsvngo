import "./App.css";
import "./custom.css";

import { Outlet } from "react-router-dom";


function App() {
  return (
    <Outlet />
    // <div className="">
    //   <Header />
    //   <main className="">
    //     <div className="z-10">
    //       <Hero />
          
    //     </div>
    //     <VideoCarousel />
    //     <Tagline />
    //     <Zig />
    //     <div className="">
    //       <Activity />
    //     <Support />
    //     <Achivers />
    //     </div>
        
    //     <Footer />
    //     {/* <TestImageText /> */}
    //     {/* <Glassmorphism /> */}
    //   </main>
    // </div>
  );
}

export default App;