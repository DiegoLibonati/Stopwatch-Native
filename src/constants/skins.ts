import { Skin } from "@src/entities/app";

import assets from "@src/assets/export";

const skins: Skin[] = [
  {
    id: "clock1",
    name: "Normal",
    static: assets.images.clockStatic,
    dinamic: assets.images.clockGif,
  },
  {
    id: "clock2",
    name: "Classic",
    static: assets.images.classicStatic,
    dinamic: assets.images.classicGif,
  },
  {
    id: "clock3",
    name: "Pixel Sand",
    static: assets.images.pixelSandStatic,
    dinamic: assets.images.pixelSandGif,
  },
  {
    id: "clock4",
    name: "Pikachu Run",
    static: assets.images.pikachuStatic,
    dinamic: assets.images.pikachuGif,
  },
];

export default skins;
