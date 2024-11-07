function StatusHeader() {
   return (
      <header className="status-header ">
         <div className="flex items-center gap-2">
            <aside className="w-4 h-4 custom-border bg-red-500"></aside>
            <p>Incomplete</p>
         </div>
         <p className="status-header-count">1</p>
      </header>
   )
}

export default StatusHeader
