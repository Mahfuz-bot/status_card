import { StatusColumn } from "../../assets/data/dataType"

function StatusHeader({ data }: { data: StatusColumn }) {
   const val = data.status
   let design
   if (val === "Doing") {
      design = "w-4 h-4 bg-yellow-500 custom-border"
   }
   if (val === "To Do") {
      design = "w-4 h-4 bg-blue-500 custom-border"
   }
   if (val === "Incomplete") {
      design = "w-4 h-4 bg-red-500 custom-border"
   }

   return (
      <section className="status-header ">
         <div className="flex items-center gap-2">
            {data.status === "Incomplete" ||
            data.status === "To Do" ||
            data.status === "Doing" ? (
               <aside className={design}></aside>
            ) : null}
            <p>{data.status}</p>
         </div>
         <p className="status-header-count">0</p>
      </section>
   )
}

export default StatusHeader
