import { defaultConfig } from "@tamagui/config/v4";
import { createTamagui } from "tamagui";
import themes from "./theme";

const config = createTamagui({
  ...defaultConfig,
  themes,
  defaultTheme: "dark",
});

export type AppConfig = typeof config;
export default config;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}
