
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const WhoAreWe = () => {
  return (
    <>
    <Header />
    <div className="App font-popins">
      {/* Full screen image with text on top */}
      <div className="relative w-full h-[256px] bg-cover bg-center" style={{ backgroundImage: "url('/img/eleven.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Who Are We</h1>
        </div>
      </div>

      {/* Image on left and paragraph on right */}
      <div className="flex flex-col md:flex-row items-center justify-center p-8">
        <div className="md:w-1/2">
          <img src="/img/twelve.jpg" alt="Placeholder" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <p className="text-gray-700 leading-7 tracking-wide">
          Khushhal Gram Samaj Vikas Foundation was incorporated as a 'not for profit organization' on February 5th, 2019 under the Companies Act, 2013, to assist, support and promote rural development, more specifically  primary and junior school education, clean & green environment, nutrition and health care, agriculture, women empowerment, skilful employment etc in villages. It is an endeavour to create modern, model villages. The Corporate Identity number of the Company is U74994UP2019NPL113235.  
          </p>
          <p className="text-gray-700 mt-4 leading-7 tracking-wide">We are a group of friends from different fields and with varied interests that have come together for a common cause – rural development & prosperity. We believe that prosperity and happiness in India can be achieved only if needs of its agrarian society is fulfilled. Prosperity in villages would ease the migratory pressure in cities and they could be better managed.</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default WhoAreWe