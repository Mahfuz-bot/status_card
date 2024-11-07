import Img from "./Img"

function Client() {
   return (
      <p className="flex items-center gap-2">
         <Img />
         <span className="text-[0.8rem] font-[500] text-slate-600">
            Client Name
         </span>
      </p>
   )
}

export default Client
