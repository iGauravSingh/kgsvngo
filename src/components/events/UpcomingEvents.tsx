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
    <div className=" flex gap-10 items-center my-4 ring-2 ring-yellowngo rounded-2xl px-11 py-11">
      {/* Image on left  */}
      <div>
        <img
          className=" w-[10rem] rounded-2xl"
          src="/img/ten.jpg"
          alt="event"
        />
      </div>

      {/* Event Card  */}

      <div className=" flex flex-col gap-1">
        <div className=" flex gap-2 items-center">
          <FaCalendarAlt size={15} />{" "}
          <p>
            {day} , {month} - {year}
          </p>
        </div>
        <p className=" text-xl font-bold">{desc}</p>
        <div className=" flex gap-2">
          <FaLocationDot size={15} color="#7ABA78" />
          <p className=" text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
