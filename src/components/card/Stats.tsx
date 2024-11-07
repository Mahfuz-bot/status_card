import { FaRegComments } from "react-icons/fa"
import { FaRegCalendarDays } from "react-icons/fa6"
import { FiPaperclip } from "react-icons/fi"

function Stats() {
   return (
      <section className="flex items-center gap-2">
         <p className="stats">
            <FaRegComments /> <span>23</span>
         </p>
         <p className="stats">
            <FiPaperclip /> <span>25</span>
         </p>
         <p className="stats">
            <FaRegCalendarDays /> <span>15-3-2024</span>
         </p>
      </section>
   )
}

export default Stats
