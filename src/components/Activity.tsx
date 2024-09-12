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
  {id: 1, desc: "Visit of the Children to Regional Science City", day: "22", month: "May", year: "2024", address: "Lucknow"},
  {id: 2, desc: "Annual Drama Competition", day: "22", month: "May", year: "2024", address: "Lucknow"}
]

const Activity = () => {
  return (
    <div className="pb-10 font-popins overflow-x-hidden">
      <Container>
        <div className="font-popins pt-7 mb-10">
          {/* Heading */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-ngodark font-bold font-CormorantUpright text-center">
              Wish to know more
            </h2>
            <p className="text-sm sm:text-md md:text-lg text-ngodark mt-4 text-center">
              Visit KGSV onsite.
            </p>
          </div>

          {/* Classes for children */}
          <div className="mt-4">
            <h4 className="text-xl sm:text-2xl text-ngodark font-semibold mb-2 mt-6 font-CormorantUpright text-center">
              Mentoring classes for Children
            </h4>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {classesData.map((item) => (
                  <div key={item.id}>
                    <ClassesEvents id={item.id} desc={item.desc} address={item.address} mentor={item.mentor} phone={item.phone} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mt-5">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 font-CormorantUpright text-center">
              Upcoming Events
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {upcomingEvents.map((item) => (
                  <div key={item.id}>
                    <UpcomingEvents id={item.id} day={item.day} month={item.month} year={item.year} desc={item.desc} address={item.address} />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Activity;