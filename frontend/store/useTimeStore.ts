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
  {
    id: "5",
    taskId: "1",
    startTime: new Date("2025-11-11 14:30:00"),
    endTime: new Date("2025-11-11 15:00:00"),
    note: "Note for the time section",
  },
  {
    id: "6",
    taskId: "1",
    startTime: new Date("2025-11-11 15:00:00"),
    endTime: new Date("2025-11-11 15:30:00"),
    note: "Note for the time section",
  },
  {
    id: "7",
    taskId: "1",
    startTime: new Date("2025-11-11 15:30:00"),
    endTime: new Date("2025-11-11 16:00:00"),
    note: "Note for the time section",
  },
  {
    id: "8",
    taskId: "1",
    startTime: new Date("2025-11-11 16:00:00"),
    endTime: new Date("2025-11-11 16:30:00"),
    note: "Note for the time section",
  },
  {
    id: "9",
    taskId: "1",
    startTime: new Date("2025-11-11 16:30:00"),
    endTime: new Date("2025-11-11 17:00:00"),
    note: "Note for the time section",
  },
];

export const useTimeStore = create<{ timeSections: TimeSection[] }>()(
  (set) => ({
    timeSections: mockinitData,
  })
);
