interface Client {
   name: string;
   avatarUrl: string;
}

interface TeamMember {
   avatarUrl: string;
}

interface Task {
   title: string;
   description: string;
   client: Client;
   assignee: string;
   taskProgress: string;
   stats: {
      comments: number;
      files: number;
      date: string;
   };
   team: TeamMember[];
}

interface StatusColumn {
   status: string;
   tasks: Task[];
}
