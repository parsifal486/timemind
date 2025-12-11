import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TasksScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Tasks</Text>
      </View>
    </SafeAreaView>
  );
}
