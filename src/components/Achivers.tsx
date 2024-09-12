import { FaStar } from "react-icons/fa";

// Sample data

const topScorers = [
    { name: 'Komal', percentage: '76%', img: '/toppers/komalog.jpg' },
    { name: 'Manshi', percentage: '88%', img: 'toppers/manshi.jpg' },
    { name: 'Ria Gupta', percentage: '76%', img: 'toppers/ria.jpg' },
  ];
  
  const mentor = {
    name: 'Rishi K Gupta',
    img: '/toppers/mentor.jpg',
  };
  
  const Notification = () => (
    <div className="bg-yellow-100 border-l-4 border-r-4 border-yellow-500 text-yellow-700 p-4 mb-4 text-center" role="alert">
      <p>U.P High School Board Exam Results - 2024</p>
    </div>
  );

  // const Notification2 = () => (
  //   <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
  //     <p>UP High School Board Exam Results.</p>
  //   </div>
  // );

  interface TopScoreCardProps {
    name: string;
    percentage: string;
    img: string;
  }
  
  const TopScorerCard = ({ name, percentage, img }: TopScoreCardProps) => (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2 font-popins">
      <div className=" shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-[250px] object-cover object-top"/>
        <div className="p-4 text-center">
          <h3 className="text-lg text-ngodark font-semibold">{name}</h3>
          <p className=" text-ngodark">{percentage}</p>
        </div>
        <p></p>
      </div>
    </div>
  );

  interface MentorCardProps {
    name: string;
    img: string;
  }
  
  const MentorCard = ({ name, img }: MentorCardProps) => (
    <div className="w-[303px] h-[270px] p-2 font-popins">
      <div className=" shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg text-ngodark font-semibold">{name}</h3>
          <h3 className="text-lg text-ngodark font-semibold">Associate Mentor</h3>
        </div>
      </div>
    </div>
  );
  
  const Achivers = () => {
    return (
      <div className=" font-popins overflow-x-hidden py-5 md:py-0">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className=" flex justify-center gap-5">
      <span className=" hidden md:block animate-bounce"><FaStar size={40} color="#d4af37" /></span>
      <span className=" animate-bounce"><FaStar size={40} color="#d4af37" /></span>
        <div>
        <h1 className="text-3xl sm:text-2xl lg:text-3xl font-semibold text-center mb-6 text-greenngo font-CormorantUpright">
          
          KGSV Congratulates its Stars 
          
          </h1>
          
        </div>
        <span className=" animate-bounce"><FaStar size={40} color="#d4af37" /></span>
        <span className=" hidden md:block animate-bounce"><FaStar size={40} color="#d4af37" /></span>
      </div>
        
        
        <Notification />
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          
          {topScorers.map((scorer, index) => (
            <TopScorerCard key={index} name={scorer.name} percentage={scorer.percentage} img={scorer.img} />
          ))}
        </div>
  
        <div className="mt-6 w-full flex justify-center mb-4">
          <MentorCard name={mentor.name} img={mentor.img} />
        </div>

        {/* <Notification2 />   */}
        {/* <Notification /> */}

      </div>
      </div>
    );
  };
  
  export default Achivers;