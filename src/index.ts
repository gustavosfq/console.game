import { Game } from "./classes/Game";
import { GameObject } from "./classes/GameObject";
import { GunGo } from "./classes/GameObjects/GunGO";
import { BombBagGo } from "./classes/GameObjects/BombBagGO";
import { Listeners } from "./classes/Listeners";
import { Player } from "./classes/Player";
import { Stage } from "./classes/Stage";
import { Enemy } from "./classes/Enemy";

const stage = [
  "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                                       ",
  "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┣━━━━━━━━━━━━┓   ┏━━━━━━━━━━━━┫                                                       ",
  "┗┉┉┉┉┉┉┉┉┉┉┉┉┛   ┗┉┉┉┉┉┉┉┉┉┉┉┉┛      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                  ",
  "                                     ┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                  ",
  "                                     ┃           ┏━━━━━━┓          ┃                  ",
  "┏━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━┓                 h┃      ┃Ó         ┃                  ",
  "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┚  ┖┉┉┉┉┉┉┉┉┉┉┉┉┫                  ┣━━━━━━┫                             ",
  "┃                             ┃      ┃                             ┃                  ",
  "┃                             ┃      ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫                  ",
  "┃                             ┃      ┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                  ",
  "┃                             ┃                                                       ",
  "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫                                                       ",
  "┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                                                       ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
  "                                                                                      ",
];

const player = new Player(new GameObject(3, 3, "O"));
globalThis.game = new Game(
  "game",
  40,
  20,
  player,
  new Stage(stage, { x: 1, y: 1 })
);

globalThis.game.currentStage.addGameObject(new GunGo({ x: 10, y: 6 }));
globalThis.game.currentStage.addGameObject(new BombBagGo({ x: 16, y: 6 }));

globalThis.game.currentStage.addGameObject(new Enemy({ x: 40, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 41, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 42, y: 7 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 40, y: 3 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 41, y: 4 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 42, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 43, y: 7 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 41, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 42, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 40, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy({ x: 40, y: 4 }));

const listener = new Listeners(globalThis.game);
listener.init();
