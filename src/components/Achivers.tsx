// Sample data
const topScorers = [
    { name: 'Komal', percentage: '76%', img: '/toppers/komal.jpg' },
    { name: 'Manshi', percentage: '88%', img: 'toppers/manshi.webp' },
    { name: 'Ria Gupta', percentage: '76%', img: 'toppers/ria.jpg' },
  ];
  
  const mentor = {
    name: 'Rishi K Gupta - Associate Mentor',
    img: '/toppers/rishi.jpeg',
  };
  
  const Notification = () => (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
      <p>Komal, Manshi & Ria have now enrolled at Gandhi Vidhyalaya, Sidhauli for pursuing the Intermediate course.</p>
    </div>
  );

  interface TopScoreCardProps {
    name: string;
    percentage: string;
    img: string;
  }
  
  const TopScorerCard = ({ name, percentage, img }: TopScoreCardProps) => (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
      <div className=" bg-greenngo shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg text-white font-bold">{name}</h3>
          <p className="text-gray-600 text-white">{percentage}</p>
        </div>
      </div>
    </div>
  );

  interface MentorCardProps {
    name: string;
    img: string;
  }
  
  const MentorCard = ({ name, img }: MentorCardProps) => (
    <div className="w-[303px] h-[270px] p-2">
      <div className=" bg-greenngo shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg text-white font-bold">{name}</h3>
        </div>
      </div>
    </div>
  );
  
  const Achivers = () => {
    return (
      <div className="">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-greenngo">
        KGSV congratulates its Stars for outstanding UP High School Board Examination - 2024 Results
        </h1>
        
        
  
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          {topScorers.map((scorer, index) => (
            <TopScorerCard key={index} name={scorer.name} percentage={scorer.percentage} img={scorer.img} />
          ))}
        </div>
  
        <div className="mt-6 w-full flex justify-center mb-4">
          <MentorCard name={mentor.name} img={mentor.img} />
        </div>

        <Notification />

      </div>
      </div>
    );
  };
  
  export default Achivers;