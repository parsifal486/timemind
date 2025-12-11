import { View } from "react-native";
import { Pie, PolarChart } from "victory-native";

export type DonutChartProps = {
  id: string;
  value: number;
  color: string;
};

export default function DonutChart({ data }: { data: DonutChartProps[] }) {
  return (
    <View
      style={{ height: 300, borderWidth: 1, borderColor: "red", width: "100%" }}
    >
      <PolarChart data={data} labelKey="id" valueKey="value" colorKey="color">
        <Pie.Chart innerRadius={85} />
      </PolarChart>
    </View>
  );
}
