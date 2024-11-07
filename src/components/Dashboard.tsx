function Dashboard({ children }: { children: React.ReactNode }) {
   return (
      <section className="dashboard">
         <div>{children}</div>
      </section>
   )
}

export default Dashboard
