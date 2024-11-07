import { Client as ClientData } from "../../assets/data/dataType"
import Img from "./Img"

function Client({
   taskClient,
   name,
}: {
   taskClient: ClientData
   name: string
}) {
   return (
      <p className="flex items-center gap-2">
         <Img clientImage={taskClient.avatarUrl} />
         <span className="text-[0.8rem] font-[500] text-slate-600">{name}</span>
      </p>
   )
}

export default Client
