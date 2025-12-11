import { Task } from "@/types/task";
import { create } from "zustand";

const mockinitData: Task[] = [
  {
    taskId: "1",
    taskName: "Task 1",
    taskColor: "#FF0000",
    taskDescription: "Task 1 description",
    totalTime: 10000,
    completedTime: 0,
    record: [],
  },
  {
    taskId: "2",
    taskName: "Task 2",
    taskColor: "#00FF00",
    taskDescription: "Task 2 description",
    totalTime: 20000,
    completedTime: 0,
    record: [],
  },
  {
    taskId: "3",
    taskName: "Task 3",
    taskColor: "#0000FF",
    taskDescription: "Task 3 description",
    totalTime: 30000,
    completedTime: 0,
    record: [],
  },
];

export const useTasksStore = create<{ tasks: Task[] }>()((set) => ({
  tasks: mockinitData,
}));
