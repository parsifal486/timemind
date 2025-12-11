import { useTimeStore } from "./useTimeStore";
import { useUserStore } from "./useUserStore";

export const useStore = () => {
  return {
    user: useUserStore(),
    time: useTimeStore(),
  };
};
