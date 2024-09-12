import { FaCalendarAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

interface ClassEventProps {
  id?: number;
  desc: string;
  day: string;
  month: string;
  year: string;
  address: string;
}

const UpcomingEvents = ({
  desc,
  day,
  month,
  year,
  address,
}: ClassEventProps) => {
  return (
    <div className=" lg:w-[450px] flex gap-10 px-4 py-2 items-center justify-between ring-2 ring-greenngo rounded-2xl">
      {/* Image on left  */}
      <div className=" hidden md:block w-[30%]">
        <img
          className=" rounded-2xl object-cover"
          src="/img/ten.jpg"
          alt="event"
        />
      </div>

      {/* Event Card  */}

      <div className=" w-[70%] flex flex-col gap-1">
        <div className=" flex gap-2 items-center">
          <FaCalendarAlt size={15} color="#254d42" />
          <p className=" text-greenngo">
            {day} , {month} - {year}
          </p>
        </div>
        <p className=" text-sm md:text-xl text-greenngo font-bold text-wrap">{desc}</p>
        <div className=" flex gap-2">
          <FaLocationDot size={15} color="#7ABA78" />
          <p className=" text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
