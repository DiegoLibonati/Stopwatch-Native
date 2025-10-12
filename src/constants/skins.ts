import { Skin } from "@src/entities/app";

import assets from "@src/assets/export";

const skins: Skin[] = [
  {
    id: "clock1",
    name: "Normal",
    static: assets.pngs.clock,
    dinamic: assets.gifs.clock,
  },
  {
    id: "clock2",
    name: "Classic",
    static: assets.pngs.classic,
    dinamic: assets.gifs.classic,
  },
  {
    id: "clock3",
    name: "Pixel Sand",
    static: assets.pngs.pixelSand,
    dinamic: assets.gifs.pixelSand,
  },
  {
    id: "clock4",
    name: "Pikachu Run",
    static: assets.pngs.pikachu,
    dinamic: assets.gifs.pikachu,
  },
];

export default skins;
