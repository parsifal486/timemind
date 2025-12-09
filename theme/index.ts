import { createThemes } from "@tamagui/themes";

const theme = createThemes({
  base: {
    palette: {
      light: [
        "#FCE5F6",
        "#F9CCE9",
        "#F3A6DA",
        "#EB83CA",
        "#E261BA",
        "#D848AA",
        "#CB2F9A",
        "#B81C8C",
        "#A50A83",
        "#95007A",
        "#8A0076",
        "#7A006E",
      ],
      dark: [
        "#25051E",
        "#300A29",
        "#3B1335",
        "#471E41",
        "#53214D",
        "#64235C",
        "#73256B",
        "#882C7C",
        "#9A3289",
        "#AB3794",
        "#BE42A1",
        "#E15CB8",
      ],
    },
  },
  accent: {
    palette: {
      light: [
        "#FFF6E3",
        "#FFECC7",
        "#FFE2AB",
        "#FFD78E",
        "#FFCC71",
        "#FEC259",
        "#FCB741",
        "#F4B342",
        "#EFA73D",
        "#E79A36",
        "#DF8A2F",
        "#D46F24",
      ],
      dark: [
        "#2A1800",
        "#352200",
        "#3F2A00",
        "#4A3300",
        "#553C00",
        "#614700",
        "#6C5100",
        "#775C00",
        "#916E0A",
        "#AA8120",
        "#C3962F",
        "#DCAA3A",
      ],
    },
  },
});

export default theme;
