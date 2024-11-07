import { FaClipboardList } from "react-icons/fa6"

function TaskProgress() {
   return (
      <p className="bg-gray-200 rounded flex items-center gap-1 px-1 text-slate-500 font-[500] text-[0.8rem]">
         <FaClipboardList /> <span>1/2</span>
      </p>
   )
}

export default TaskProgress
