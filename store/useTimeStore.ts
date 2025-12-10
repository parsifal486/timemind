import { create } from "zustand";

interface TimeStore {
  time: number;
  setTime: (time: number) => void;
}

export const useTimeStore = create<TimeStore>((set) => ({
  time: 0,
  setTime: (time) => set({ time }),
}));
