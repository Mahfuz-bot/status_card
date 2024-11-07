import { FaRegComments } from "react-icons/fa"
import { FaRegCalendarDays } from "react-icons/fa6"
import { FiPaperclip } from "react-icons/fi"
import { Stats as StatsData } from "../../assets/data/dataType"

function Stats({ taskStats }: { taskStats: StatsData }) {
   return (
      <section className="flex items-center gap-2">
         <p className="stats">
            <FaRegComments /> <span>{taskStats.comments}</span>
         </p>
         <p className="stats">
            <FiPaperclip /> <span>{taskStats.files}</span>
         </p>
         <p className="stats">
            <FaRegCalendarDays /> <span>{taskStats.date}</span>
         </p>
      </section>
   )
}

export default Stats
