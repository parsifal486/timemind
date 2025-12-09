import { ActivitySquare, Award, Bolt } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => <ActivitySquare size={28} />,
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ color }) => <Award size={28}> </Award>,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ color }) => <Bolt size={28}></Bolt>,
        }}
      />
    </Tabs>
  );
}
