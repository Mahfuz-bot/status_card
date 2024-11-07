import Client from "./card/Client"
import Team from "./card/Team"
import Stats from "./card/Stats"
import TaskDes from "./card/TaskDes"
import TaskProgress from "./card/TaskProgress"

function Card() {
   return (
      <section className="card">
         <header className="card-header">
            <Client />
            <Client />
         </header>
         <body className="card-body">
            <TaskDes />
            <TaskProgress />
         </body>
         <footer className="card-footer ">
            <Team />
            <Stats />
         </footer>
      </section>
   )
}

export default Card
