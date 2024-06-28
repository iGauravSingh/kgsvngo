
import Header from '../../components/Header'
import Hero from '../../components/section/Hero'
import { VideoCarousel } from '../../components/section/Video-carousel'
import Tagline from '../../components/Tagline'
import Zig from '../../components/Zig'
import Activity from '../../components/Activity'
import Support from '../../components/Support'
import Achivers from '../../components/Achivers'
import Footer from '../../components/Footer'

const Homepage = () => {
  return (
    <>
    <div className="">
      <Header />
      <main className="">
        <div className="z-10">
          <Hero />
          
        </div>
        <VideoCarousel />
        <Tagline />
        <Zig />
        <div className="">
          <Activity />
        <Support />
        <Achivers />
        </div>
        
        <Footer />
        {/* <TestImageText /> */}
        {/* <Glassmorphism /> */}
      </main>
    </div>
    </>
  )
}

export default Homepage