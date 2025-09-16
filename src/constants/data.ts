import { Skin } from "@src/entities/entities";

export const skins: Skin[] = [
  {
    id: "clock1",
    name: "Normal",
    static: require("@src/assets/clock-static.png"),
    dinamic: require("@src/assets/clock.gif"),
  },
  {
    id: "clock2",
    name: "Classic",
    static: require("@src/assets/classic_static.png"),
    dinamic: require("@src/assets/classic_gif.gif"),
  },
  {
    id: "clock3",
    name: "Pixel Sand",
    static: require("@src/assets/pixel-sand.png"),
    dinamic: require("@src/assets/pixel-sand.gif"),
  },
  {
    id: "clock4",
    name: "Pikachu Run",
    static: require("@src/assets/pikachu.png"),
    dinamic: require("@src/assets/pikachu.gif"),
  },
];
