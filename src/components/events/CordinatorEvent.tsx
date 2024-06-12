

import { FaLocationDot } from "react-icons/fa6";



interface ClassEventProps {
    id?: number;
    location: string;
    cordinatorName: string;
    post: string;
    mobileno: string;
}


const CordinatorEvent = ({ location, cordinatorName, post, mobileno }: ClassEventProps) => {
  return (
    <div className=" flex gap-10 items-center my-4 ring-2 ring-greenngo rounded-2xl px-4 py-2">
        {/* Image on left  */}
        <div>
        <img className=" w-[10rem] rounded-2xl" src="/img/ten.jpg" alt="event" />
        </div>

        {/* Event Card  */}

        <div className=" flex flex-col gap-1">
            
            <div className=" flex gap-4 text-greenngo ">
            <p className=" text-xl font-bold">{cordinatorName}</p>
            <p className=" text-xl font-bold">{post}</p>
            <p className=" text-xl font-bold">{mobileno}</p>
            </div>
            <div className=" flex gap-2"><FaLocationDot size={15} color="#7ABA78" /><p className=" text-sm">{location}</p></div>

            
        </div>

    </div>
  )
}

export default CordinatorEvent