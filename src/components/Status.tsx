import StatusHeader from "./status/StatusHeader"
function Status({ children }: { children: React.ReactNode }) {
   return (
      <section className="status">
         <StatusHeader />
         <section className="status-body">
            <body>{children}</body>
         </section>
      </section>
   )
}

export default Status
