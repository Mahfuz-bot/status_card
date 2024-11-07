export interface Client {
   name: string;
   avatarUrl: string;
}

export interface TeamMember {
   avatarUrl: string;
}

export interface Task {
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

export interface StatusColumn {
   status: string;
   tasks: Task[];
}
export interface Stats { comments: number; files: number; date: string } 