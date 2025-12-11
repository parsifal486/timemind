import { useTimeStore } from "./useTimeStore";
import { useUserStore } from "./useUserStore";
import { useTasksStore } from "./useTaskStore";

export const useStore = () => {
  return {
    user: useUserStore(),
    time: useTimeStore(),
    tasks: useTasksStore(),
  };
};
