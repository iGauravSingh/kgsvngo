

import Container from "./Container";
import ClassesEvents from "./events/ClassesEvents";

import UpcomingEvents from "./events/UpcomingEvents";


const classesData = [
    {id: 1, desc: "CMC Gram Punnapur",mentor: 'Rishi Kumar Gupta',phone: '8707726641', address: "Tehsil Sidhauli, Distt Sitapur-261303"},
    {id: 2, desc: "CMC Gram Asal",mentor: 'Shalini Vishwakarma',phone: '9569691760', address: "Tehsil Sidhauli, District Sitapur- 261303"},
    {id: 3, desc: "PSK - KGSV Centre of Learning , Punnapur",mentor: 'Rishi Kumar Gupta',phone: '8707726641', address: "Tehsil Sidhauli , District Sitapur-261303"},
    {id: 4, desc: "SVBPK, Kakrighat",mentor: 'Tanuja Bisht',phone: '9569691760', address: " District Almora - 263678 , Uttarakhand "},
]

const upcomingEvents = [
    {id: 1, desc: "Visit of the Children to Regional Science City", day: "22", month: "may", year: "2024", address: "Lucknow"},
    {id: 2, desc: "Annual Drama Competition", day: "22", month: "may", year: "2024", address: "Lucknow"}
]

// const visitCordinator = [
//     {id: 1, location: "Punnapur Village", cordinatorName: "Rishi K Gupta", post: "KGSV Associate", mobileno: "8707726641" },
//     {id: 2, location: "Asal Village", cordinatorName: "Ms Shalini Vishwakarma", post: "KGSV Mentor", mobileno: "9569691760" },
// ]

const Activity = () => {
  return (
    <div className=" pb-10">
      <Container> 
      <div className=" font-popins pt-7 mb-10">
      {/* heading  */}
      <div className=" flex flex-col items-center">
        <h2 className=" text-3xl text-ngodark font-bold text-wrap">Wish to know more</h2>
          <p className=" text-ngodark text-md md:text-lg mt-4 text-wrap text-center">Visit KGSV onsite.</p>
        {/* <p className=" text-greenngo">Gifts of any kind during visits are discouraged</p> */}
        
      </div>

      

      {/* Classes for children */}
      <div className=" mt-4 ">
      {/* <h3 className=" text-xl text-greenngo text-center font-bold">Ongoing Activitys</h3> */}
        <h4 className=" text-lg text-ngodark font-semibold mb-2 mt-6">Mentoring classes of Children </h4>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {classesData.map((item) => (
            <div key={item.id} className=""><ClassesEvents id={item.id} desc={item.desc} address={item.address} mentor={item.mentor} phone={item.phone} /></div>
        ))}
        </div>
      </div>

      {/* upcoming Events  */}
      <div className=" mt-5">
        <h3 className=" text-xl font-bold mb-2">Upcoming Events</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        {upcomingEvents.map((item)=> (
            <div key={item.id} className="">
                <UpcomingEvents id={item.id} day={item.day} month={item.month} year={item.year} desc={item.desc} address={item.address} />
                
            </div>
        ))}
        </div>
        
      </div>

      {/* Coordinators for Visit  */}
      {/* <div className=" mt-5">
        <h3 className=" text-lg font-semibold mb-2">Coordinators for Visit </h3>
        {visitCordinator.map((item) => (
            <div key={item.id} className="">
                <CordinatorEvent id={item.id} location={item.location} cordinatorName={item.cordinatorName} post={item.post} mobileno={item.mobileno}  />
            </div>
        ))}
      </div> */}

    </div>
    </Container>
    </div>
  );
};

export default Activity;
