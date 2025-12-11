import PieChart from "@/componets/donutChart";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "tamagui";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View
        style={{
          flex: 1,
        }}
      >
        <PieChart />
      </View>
    </SafeAreaView>
  );
}
