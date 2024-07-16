
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MissionVision = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto font-popins">
      {/* Image on top with text */}
      <div className="relative w-full h-64">
        <img
          src="/img/seven.jpg"
          alt="Top Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-3xl font-bold">Mission And Vision</span>
        </div>
      </div>

      {/* Image on left and paragraph on right */}
      <h1 className=' text-center mt-7 font-semibold text-xl'>Vision</h1>
      <div className="flex flex-col md:flex-row my-8 items-center">
        
        <div className="md:w-1/2 w-full p-4">
          <img
            src="/pages/aboutus/vivekanand2.jpg"
            alt="Left Image"
            className=" w-full h-72"
          />
        </div>
        <div className="md:w-1/2 w-full p-4">
          <ul className='text-gray-800 list-disc leading-7 tracking-wide text-justify'>
            <li>To develop a few model exemplary self-sufficient villages , then gradually expand their number.</li>
            <li>Children in the villages are wholistically educated for a career path & to be disciplined, responsible citizen.</li>
            <li>Equal status for women in village society – in education, opportunity, growth & fulfillment of aspirations.</li>
            <li>Conservation of water , purity of air & other natural resources and build a clean , green and hygenic countryside</li>
            <li>Inclusive rural society that is disciplined, responsible, considerate & sensitive to human life & the environment.</li>
          </ul>
        </div>
      </div>

      {/* Image on right and paragraph on left */}
      <h1 className='  text-center mt-7 font-semibold text-xl'>Mission</h1>
      <div className="flex flex-col md:flex-row my-8 items-center">
        
        <div className="md:w-1/2 w-full p-4 order-2 md:order-1">
          <ul className='text-gray-800 list-disc leading-7 tracking-wide text-justify'>
            <li>Indian villages must inclusively develop & contribute to a happy, contented and prosperous State.</li>
            <li>Country's environment , natural resources and heritage must be judiciously preserved for posterity.</li>
            <li>Villages must wholistically prosper and fulfill people’s aspirations so that they are motivated to stay back in the countryside. Foster an environment in which professionals from urban centers would be happy to work in villages.</li>
            <li>Decongest cities so that they can be better managed to attain quality of life. </li>
            <li>To see India develop as a preferred global destination for education, spiritual learning and tourism.</li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full p-4 order-1 md:order-2">
          <img
            src="/pages/aboutus/kalammission1.jpg"
            alt="Right Image"
            className=" w-full h-72"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default MissionVision