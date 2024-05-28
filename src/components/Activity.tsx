import Container from "./Container";
import ClassesEvents from "./events/ClassesEvents";
import CordinatorEvent from "./events/CordinatorEvent";
import UpcomingEvents from "./events/UpcomingEvents";


const classesData = [
    {id: 1, desc: "CMC - Mayur Dhaba, Punnapur", address: "Tehsil Sidhauli, Distt Sitapur-261303"},
    {id: 2, desc: "CMC - Govt Primary School, Gram Asal", address: "Tehsil Sidhauli, District Sitapur- 261303"},
    {id: 3, desc: "PSK - KGSV Centre of Learning , Punnapur", address: "Tehsil Sidhauli , District Sitapur-261303"},
    {id: 4, desc: "SVKBPK , Gram Kakrighat", address: " District Almora - 263678 , Uttarakhand "},
]

const upcomingEvents = [
    {id: 1, desc: "Visit of the Children to Regional Science City", day: "22", month: "may", year: "2024", address: "Lucknow"},
    {id: 2, desc: "Annual Drama Competition", day: "22", month: "may", year: "2024", address: "Lucknow"}
]

const visitCordinator = [
    {id: 1, location: "Punnapur Village", cordinatorName: "Rishi K Gupta", post: "KGSV Associate", mobileno: "8707726641" },
    {id: 2, location: "Asal Village", cordinatorName: "Ms Shalini Vishwakarma", post: "KGSV Mentor", mobileno: "9569691760" },
]

const Activity = () => {
  return (
    <Container>
      <div className=" font-popins mb-10">
      {/* heading  */}
      <div className=" flex flex-col items-center">
        <h2 className=" text-2xl font-bold">Wish to know More -- See KGSV Onsite for Yourself</h2>
        <p className="">Gifts of any kind during visits are discouraged</p>
        
      </div>

      

      {/* Classes for children */}
      <div className=" mt-4 ">
      <h3 className=" text-xl font-bold">Ongoing Activitys</h3>
        <h4 className=" text-lg font-semibold mb-2 mt-2">Classes for Children </h4>
        {classesData.map((item) => (
            <div key={item.id}><ClassesEvents id={item.id} desc={item.desc} address={item.address} /></div>
        ))}
      </div>

      {/* upcoming Events  */}
      <div className=" mt-5">
        <h3 className=" text-xl font-bold mb-2">Upcoming Events</h3>
        {upcomingEvents.map((item)=> (
            <div key={item.id} className="">
                <UpcomingEvents id={item.id} day={item.day} month={item.month} year={item.year} desc={item.desc} address={item.address} />
                
            </div>
        ))}
        
      </div>

      {/* Coordinators for Visit  */}
      <div className=" mt-5">
        <h3 className=" text-lg font-semibold mb-2">Coordinators for Visit </h3>
        {visitCordinator.map((item) => (
            <div key={item.id} className="">
                <CordinatorEvent id={item.id} location={item.location} cordinatorName={item.cordinatorName} post={item.post} mobileno={item.mobileno}  />
            </div>
        ))}
      </div>

    </div>
    </Container>
  );
};

export default Activity;
