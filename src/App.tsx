import { useState } from "react"
import Card from "./components/Card"
import Dashboard from "./components/Dashboard"
import Status from "./components/Status"
import { dataSet } from "./assets/data/dataSet"

function App() {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [infos, setInfos] = useState(dataSet)

   if (!infos) {
      return <div>Loading...</div>
   }

   return (
      <Dashboard>
         {infos.map((info) => (
            <Status key={info.id} data={info}>
               {info.tasks.map((task) => (
                  <Card key={task.id} task={task} />
               ))}
            </Status>
         ))}
      </Dashboard>
   )
}

export default App
