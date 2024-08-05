
import Header from '../../components/Header'
import Hero from '../../components/section/Hero'
import { VideoCarousel } from '../../components/section/Video-carousel'
import Tagline from '../../components/Tagline'
import Zig from '../../components/Zig'
import Activity from '../../components/Activity'
import Support from '../../components/Support'
import Achivers from '../../components/Achivers'
import Footer from '../../components/Footer'
import DonateSection from '../../components/DonateSection'

const Homepage = () => {
  return (
    <>
    <div className=" font-popins">
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
        <DonateSection />
        <Footer />
        {/* <TestImageText /> */}
        {/* <Glassmorphism /> */}
      </main>
    </div>
    </>
  )
}

export default Homepage