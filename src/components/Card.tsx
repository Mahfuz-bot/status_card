import Client from "./card/Client"
import Team from "./card/Team"
import Stats from "./card/Stats"
import TaskDes from "./card/TaskDes"
import TaskProgress from "./card/TaskProgress"
import { Task } from "../assets/data/dataType"
// import Img from "./card/Img"

function Card({ task }: { task: Task }) {
   return (
      <section className="card">
         <div className="card-header">
            <Client taskClient={task.client} name={task.client.name} />
            <Client taskClient={task.client} name={task.assignee} />
         </div>
         <div className="card-body">
            <TaskDes taskDes={task.description} />
            <TaskProgress />
         </div>
         <div className="card-footer ">
            <Team taskTeams={task.team} />
            <Stats taskStats={task.stats} />
         </div>
      </section>
   )
}

export default Card
