import { View } from "react-native";
import { useTheme } from "tamagui";
import { Pie, PolarChart } from "victory-native";

export default function DonutChart() {
  const theme = useTheme();

  const DATA = [
    { value: 10, color: theme.color1?.val, label: "Label 1" },
    { value: 20, color: theme.color2?.val, label: "Label 2" },
    { value: 30, color: theme.color3?.val, label: "Label 3" },
  ];

  return (
    <View
      style={{ height: 300, borderWidth: 1, borderColor: "red", width: "100%" }}
    >
      <PolarChart
        data={DATA}
        labelKey={"label"}
        valueKey={"value"}
        colorKey={"color"}
      >
        <Pie.Chart innerRadius={85} />
      </PolarChart>
    </View>
  );
}
