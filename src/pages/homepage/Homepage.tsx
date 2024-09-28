
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
// import News from '../../components/News'
import DonateSectionUpper from '../../components/DonateSectionUpper'
import Vasudev from '../../components/Vasudev'
// import Copyrightsection from '../../components/copyright/Copyrightsection'

const Homepage = () => {
  return (
    <>
    <div className=" font-popins">
      <Header />
      <main className="">
        <div className="z-10">
          <Vasudev />
          <Hero />
          
        </div>
        <VideoCarousel />
        <Tagline />
        <DonateSectionUpper />
        
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