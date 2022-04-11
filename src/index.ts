import { Game } from "./classes/Game";
import { GameObject } from "./classes/GameObject";
import { GunGo } from "./classes/GameObjects/GunGO";
import { BombBagGo } from "./classes/GameObjects/BombBagGO";
import { Listeners } from "./classes/Listeners";
import { Player } from "./classes/Player";
import { Stage } from "./classes/Stage";
import { Enemy } from "./classes/Enemy";
import { Destructible } from "./classes/GameObjects/DestructibleGO";
import { DialogBox } from "./classes/DialogBox";
import { Talkable } from "./classes/GameObjects/TalkableGO";
import { OptionDialog } from "./classes/GameObjects/OptionDialog";
import { Option } from "./classes/Option";

const stage = [
  "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                                       ",
  "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┃                             ┃                                                       ",
  "┣━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━┫                                                       ",
  "┗┉┉┉┉┉┉┉┉┉┉┉┉┛  ┗┉┉┉━┉┉┉┉┉┉┉┉┉┛      ┏////////////┓                                   ",
  "                                     ┣////////////┫                                   ",
  "                                     ┃////////////┃                                   ",
  "┏━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━┓      ┃////////////┃                                   ",
  "┣┉┉┉┉┉┉┉┉┉┉┉┉┚  ┖┉┉┉┉┉━┉┉┉┉┉┉┉┫      ┃////////////┃                                   ",
  "┃                             ┃      ┃////////////┃                                   ",
  "┃                             ┃      ┣━━━━┓  ┏━━━━┫                                   ",
  "┃                             ┃      ┗┉┉┉┉┛  ┗┉┉┉┉┛                                   ",
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
  "                       ( ͡° ͜ʖ ͡°)                                                      ",
  "                                                                                      ",
];

const stage2 = [
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
  "                        ",
];

const stageObj1 = new Stage(stage, {x:1, y:1});
const stageObj2 = new Stage(stage2, {x:12, y:8});

const asdf2 = () => {
  const options = new OptionDialog([
    new Option("Salir de la casa", () => {
      globalThis.game.changeStage(stageObj1);
      
    }),
    new Option("Cancelar", () => {
    })]);
  globalThis.game.dialog.push(options);
}

stageObj2.addGameObject(new Talkable({ x: 12, y: 9 }, "▄", asdf2));
stageObj2.addGameObject(new Talkable({ x: 13, y: 9 }, "▄", asdf2));
stageObj2.addGameObject(new Talkable({ x: 9, y: 3 }, "M", () => {
  new DialogBox("Es muy peligroso salir sin nada, ten esta bomba para que no te hagan daño");
  stageObj2.addGameObject(new BombBagGo({ x: 10, y: 3 }))
}));

const player = new Player(new GameObject(3, 3, "O"));
globalThis.game = new Game(
  "game",
  60,
  20,
  player,
  stageObj1
);
globalThis.game.currentStage.addGameObject(new GunGo({ x: 10, y: 6 }));

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

globalThis.game.currentStage.addGameObject(new Destructible({ x: 15, y: 7 }));
globalThis.game.currentStage.addGameObject(new Destructible({ x: 16, y: 7 }));

const asdf = () => {
  const options = new OptionDialog([
    new Option("Entrar a la casa", () => {
      globalThis.game.changeStage(stageObj2);
    }),
    new Option("Cancelar", () => {
    })]);
  console.log(options);
  globalThis.game.dialog.push(options);
}
globalThis.game.currentStage.addGameObject(
  new Talkable({ x: 44, y: 14 }, " ", asdf)
);
globalThis.game.currentStage.addGameObject(
  new Talkable({ x: 45, y: 14 }, " ", asdf)
);
setTimeout(() => {
  new DialogBox("this is a Dialog Box");
}, 1000);
const listener = new Listeners(globalThis.game);
listener.init();
