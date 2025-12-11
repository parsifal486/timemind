import PieChart from "@/componets/donutChart";
import { TimeSection } from "@/types/time";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "tamagui";

const mockinitData: TimeSection[] = [
  {
    id: "1",
    name: "Work",
    color: "red",
    value: 10,
  },
  {
    id: "2",
    name: "Study",
    color: "blue",
    value: 20,
  },
  {
    id: "3",
    name: "Sleep",
    color: "green",
    value: 30,
  },
  {
    id: "4",
    name: "Eat",
    color: "yellow",
    value: 40,
  },
  {
    id: "5",
    name: "Other",
    color: "gray",
    value: 50,
  },
];

export default function HomeScreen() {
  const [timeSections, setTimeSections] = useState<TimeSection[]>(mockinitData);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View
        style={{
          flex: 1,
        }}
      >
        <PieChart timeSections={timeSections} />
      </View>
    </SafeAreaView>
  );
}
