import { ActivitySquare, Award, Bolt } from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import { useTheme } from "tamagui";

export default function Layout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color11?.val,
        tabBarInactiveTintColor: theme.color7?.val,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 50,
          right: undefined,
          width: 220,
          height: 40,
          borderRadius: 20,
          backgroundColor: "$color",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 20,
          borderWidth: 1,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <ActivitySquare
              size={28}
              color={focused ? "$color11" : "$color7"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
          tabBarLabel: "Tasks",
          tabBarIcon: ({ focused }) => (
            <Award size={28} color={focused ? "$color11" : "$color7"} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabel: "About",
          tabBarIcon: ({ focused }) => (
            <Bolt size={28} color={focused ? "$color11" : "$color7"} />
          ),
        }}
      />
    </Tabs>
  );
}
