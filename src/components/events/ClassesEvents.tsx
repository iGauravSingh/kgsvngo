
import { FaLocationDot } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


interface ClassEventProps {
    id?: number;
    desc: string;
    address: string;
    mentor: string;
    phone: string;
}


const ClassesEvents = ({ desc, address, mentor, phone}: ClassEventProps) => {
  return (
    <div className=" lg:w-[405px] h-[185px] gap-10 items-center my-4  bg-white/30 backdrop-blur-lg shadow-lg  px-4 py-4 rounded-x hover:bg-green-950 ease-in-out duration-1000 rounded-2xl group">
        {/* logo on left  */}
        
        {/* Event Card  */}

        <div className=" w-full h-full flex flex-col justify-between py-2">
            <p className=" text-xl text-greenngo group-hover:text-white font-bold">{desc}</p>
            <div className=" flex gap-2"><FaLocationDot size={15} color="#7ABA78" /><p className=" text-sm group-hover:text-white">{address}</p></div>
            <div className=" flex gap-2"><FaChalkboardTeacher size={15} color="#7ABA78" /><p className=" text-sm group-hover:text-white">{mentor}</p></div>
            <div className=" flex gap-2"><FaPhoneAlt size={15} color="#7ABA78" /><p className=" text-sm group-hover:text-white">{phone}</p></div>
        </div>

    </div>
  )
}

export default ClassesEvents