import { FaLayerGroup } from "react-icons/fa"

function TaskDes({ taskDes }: { taskDes: string }) {
   return (
      <p className="flex items-center gap-2 text-[0.8rem] text-slate-500">
         <FaLayerGroup />
         <span className="font-[500] ">{taskDes}</span>
      </p>
   )
}

export default TaskDes
