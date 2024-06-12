
import { FaLocationDot } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";


interface ClassEventProps {
    id?: number;
    desc: string;
    address: string;
    mentor: string
}


const ClassesEvents = ({ desc, address, mentor}: ClassEventProps) => {
  return (
    <div className=" w-[355px] h-[145px] gap-10 items-center my-4 ring-2 ring-greenngo bg-white/10 shadow-lg  px-4 py-4 rounded-xl">
        {/* logo on left  */}
        
        {/* Event Card  */}

        <div className=" w-full h-full flex flex-col justify-between">
            <p className=" text-xl text-greenngo font-bold">{desc}</p>
            <div className=" flex gap-2"><FaLocationDot size={15} color="#7ABA78" /><p className=" text-sm">{address}</p></div>
            <div className=" flex gap-2"><FaChalkboardTeacher size={15} color="#7ABA78" /><p className=" text-sm">{mentor}</p></div>
        </div>

    </div>
  )
}

export default ClassesEvents