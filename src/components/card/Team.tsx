import { TeamMember } from "../../assets/data/dataType"
import Img from "./Img"

function Team({ taskTeams }: { taskTeams: TeamMember[] }) {
   return (
      <>
         {taskTeams.map((taskTeam) => (
            <Img key={taskTeam.avatarUrl} clientImage={taskTeam.avatarUrl} />
         ))}
      </>
   )
}

export default Team
