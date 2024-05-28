import { FaSchool } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



interface ClassEventProps {
    id?: number;
    desc: string;
    address: string;
}


const ClassesEvents = ({ desc, address}: ClassEventProps) => {
  return (
    <div className=" flex gap-10 items-center my-4 ring-2 ring-yellowngo rounded-2xl px-11 py-11">
        {/* logo on left  */}
        <div>
        <FaSchool color="#F3CA52" size={40} />
        </div>

        {/* Event Card  */}

        <div className=" flex flex-col gap-1">
            <p className=" text-xl font-bold">{desc}</p>
            <div className=" flex gap-2"><FaLocationDot size={15} color="#7ABA78" /><p className=" text-sm">{address}</p></div>
            
        </div>

    </div>
  )
}

export default ClassesEvents