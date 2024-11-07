import { StatusColumn } from "../assets/data/dataType"
import StatusHeader from "./status/StatusHeader"
function Status({
   children,
   data,
}: {
   children: React.ReactNode
   data: StatusColumn
}) {
   return (
      <section className="status">
         <StatusHeader data={data} />
         <section className="status-body">
            <div>{children}</div>
         </section>
      </section>
   )
}

export default Status
