import Footer from "../../components/Footer";
import Header from "../../components/Header";

const RememberingGurudev = () => {


return (
    <>
    <Header />
    <div className="relative bg-slate-50 font-popins">
      {/* Full Width Image */}
      <img
        src="/pages/aboutus/gurutagore12.jpg"
        alt="Full Width Header"
        className="w-full h-60 "
      />
      
      {/* constainer  */}
      <div className=" flex">


        {/* left gif */}
      <div className="  w-[33%]">
        <div className=" space-y-96">
        <div className=" flex justify-center mt-16">
        <img className=" w-32 transform scale-x-[-1] animate-pigin-move" src="/pages/aboutus/dove.png" alt="dove" />
        </div>

        <div className=" flex justify-center mt-8">
        <img className=" w-32 transform scale-x-[-1] animate-pigin-move" src="/pages/aboutus/monk.png" alt="dove" />
        </div>
        </div>
      </div>
      
      {/* Poem Section */}
      <div className=" bg-white p-8 mt-4 mx-auto max-w-2xl rounded-lg shadow-lg">
        
        <h2 className="text-2xl font-bold text-center mb-4">Invoking Gurudev</h2>
        <p className="text-gray-700 text-base leading-relaxed flex flex-col items-center gap-4 text-lg">
          <span>Where the mind is without fear</span>
          <span>and the head is held high</span>
          <span>Where knowledge is free</span>
          <span>Where the world has not</span>
          <span>been broken up into fragments</span>
          <span>By narrow domestic walls</span>
          <span>Where words come out from</span>
          <span>the depth of truth</span>
          <span>Where tireless striving</span>
          <span>stretches its arms towards perfection</span>
          <span>Where the clear stream of reason</span>
          <span>has not lost its way</span>
          <span>Into the dreary desert sand of dead habit</span>
          <span>Where the mind is lead forward by Thee</span>
          <span>Into ever widening thought and action</span>
          <span>Into that heaven of freedom, my Father,</span>
          <span>let my Country awake</span>
        </p>
      </div>

      {/* right gif  */}
      <div className="  w-[33%]">
        <div className=" space-y-96">
        <div className=" flex justify-center mt-16">
        <img className=" w-32 animate-pigin-move " src="/pages/aboutus/dove.png " alt="dove" />
        </div>

        <div className=" flex justify-center mt-8">
        <img className=" w-32 animate-pigin-move " src="/pages/aboutus/monk.png" alt="dove" />
        </div>
        </div>

      </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default RememberingGurudev;
