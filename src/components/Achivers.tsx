// Sample data
const topScorers = [
    { name: 'Komal', percentage: '76%', img: 'path/to/komal.jpg' },
    { name: 'Manshi', percentage: '88%', img: 'path/to/manshi.jpg' },
    { name: 'Ria Gupta', percentage: '76%', img: 'path/to/ria.jpg' },
  ];
  
  const mentor = {
    name: 'Rishi K Gupta - Associate Mentor',
    img: 'path/to/rishi.jpg',
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
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-gray-600">{percentage}</p>
        </div>
      </div>
    </div>
  );

  interface MentorCardProps {
    name: string;
    img: string;
  }
  
  const MentorCard = ({ name, img }: MentorCardProps) => (
    <div className="w-full p-2">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={img} alt={name} className="w-full h-48 object-cover"/>
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold">{name}</h3>
        </div>
      </div>
    </div>
  );
  
  const Achivers = () => {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6">
          KGSV Congratulates its Stars - Manshi, Komal & Ria & their Mentor Rishi for the outstanding UP High School-2024, Results.
        </h1>
        
        
  
        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          {topScorers.map((scorer, index) => (
            <TopScorerCard key={index} name={scorer.name} percentage={scorer.percentage} img={scorer.img} />
          ))}
        </div>
  
        <div className="mt-6">
          <MentorCard name={mentor.name} img={mentor.img} />
        </div>

        <Notification />

      </div>
    );
  };
  
  export default Achivers;