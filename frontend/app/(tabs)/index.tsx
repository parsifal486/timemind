import PieChart from "@/componets/donutChart";
import { useStore } from "@/store";
import { useTasksStore } from "@/store/useTaskStore";
import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "tamagui";

export default function HomeScreen() {
  const { timeSections } = useStore().time;
  const tasks = useTasksStore((state) => state.tasks);

  const dataForDonut = useMemo(() => {
    const grouped = timeSections.reduce((acc, section) => {
      const duration = section.endTime.getTime() - section.startTime.getTime();

      if (acc[section.taskId]) {
        acc[section.taskId] += duration;
      } else {
        acc[section.taskId] = duration;
      }

      return acc;
    }, {} as Record<string, number>);

    return Object.entries(grouped).map(([taskId, totalDuration]) => {
      const task = tasks.find((t) => t.taskId === taskId);
      return {
        id: taskId,
        value: totalDuration,
        color: task?.taskColor || "#999999",
      };
    });
  }, [timeSections, tasks]);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View
        style={{
          flex: 1,
        }}
      >
        <PieChart data={dataForDonut} />
      </View>
    </SafeAreaView>
  );
}
