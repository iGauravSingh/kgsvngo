
import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const areasOfWork = [
  { name: 'Agricultural Development', link: '/agriculturalDevelopment' },
  { name: 'Child Education', link: '/childeducation' },
  { name: 'Cleanliness', link: '/cleanliness' },
  { name: 'Child Health and Nutrition', link: '/child-health-nutrition' },
  { name: 'Environment Conservation', link: '/enviroment-conservation' },
  { name: 'Women Empowerment', link: '/women-empowerment' },
];

const AreasOfWork = () => {
  return (
    <>
    <Header />

    <>
    <div className="bg-gray-50 py-12">
      <h2 className="text-center text-4xl font-extrabold text-[#176e3b] mb-12">
        Our Areas of Work
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6">
        {areasOfWork.map((area, index) => (
          <Link
            to={area.link}
            key={index}
            className="group transform transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-white/30 backdrop-blur-lg border border-gray-200 rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
              <div className="p-6 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold text-[#176e3b] mb-4">
                  {area.name}
                </h3>
                <p className="text-center text-sm text-gray-700 group-hover:text-[#176e3b] font-medium">
                  Learn more about {area.name.toLowerCase()}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    
    
    </>


    <Footer />
    </>
  );
};

export default AreasOfWork;