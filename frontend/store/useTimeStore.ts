import { TimeSection } from "@/types/time";
import { create } from "zustand";

const mockinitData: TimeSection[] = [
  {
    id: "1",
    taskId: "1",
    startTime: new Date("2025-11-11 10:00:00"),
    endTime: new Date("2025-11-11 11:00:00"),
  },
  {
    id: "2",
    taskId: "2",
    startTime: new Date("2025-11-11 11:00:00"),
    endTime: new Date("2025-11-11 12:00:00"),
  },
  {
    id: "3",
    taskId: "3",
    startTime: new Date("2025-11-11 12:00:00"),
    endTime: new Date("2025-11-11 13:00:00"),
  },
  {
    id: "4",
    taskId: "1",
    startTime: new Date("2025-11-11 14:00:00"),
    endTime: new Date("2025-11-11 14:30:00"),
  },
];

export const useTimeStore = create<{ timeSections: TimeSection[] }>()(
  (set) => ({
    timeSections: mockinitData,
  })
);
