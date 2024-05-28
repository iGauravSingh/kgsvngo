import { FaSchool } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const EventCard = () => {
  return (
    <div>
        {/* logo on left  */}
        <div>
        <FaSchool color="red" size={40} />
        </div>

        {/* Event Card  */}

        <div>
            {/* date section  */}
            <div>
                {/* date  */}
                <FaCalendarAlt /> 


                {/* timing  */}
            </div>
        </div>
    </div>
  )
}

export default EventCard