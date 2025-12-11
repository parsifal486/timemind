import { TimeSection } from "@/types/time";
import { View } from "react-native";
import { Pie, PolarChart } from "victory-native";

export default function DonutChart({
  timeSections,
}: {
  timeSections: TimeSection[];
}) {
  return (
    <View
      style={{ height: 300, borderWidth: 1, borderColor: "red", width: "100%" }}
    >
      <PolarChart
        data={timeSections}
        labelKey="name"
        valueKey="value"
        colorKey="color"
      >
        <Pie.Chart innerRadius={85} />
      </PolarChart>
    </View>
  );
}
