type Task = {
  taskId: string;
  taskName: string;
  taskColor: string;
  taskDescription: string;
  totalTime: number; //total time needed to complete the task in ms
  completedTime: number; //time completed in ms
  record: TimeRecord[];
};

type TimeRecord = {
  date: string; //date in format YYYY-MM-DD
  time: number; //time in ms for the task on the date
};

export type { Task, TimeRecord };
