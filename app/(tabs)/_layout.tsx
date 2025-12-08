import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarLabel: "Tasks",
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabel: "About",
        }}
      />
    </Tabs>
  );
}
