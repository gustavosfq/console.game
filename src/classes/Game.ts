import { DialogBox } from "./DialogBox";
import { Player } from "./Player";
import { Stage } from "./Stage";

export class Game {
  readonly mainElementId: string;
  readonly preElement: HTMLPreElement;
  readonly width: number;
  readonly height: number;
  readonly halfWidth: number;
  readonly halfHeight: number;

  public player: Player;
  public currentStage: Stage;
  public dialog: DialogBox | null;
  #lastScreen: string[];

  constructor(
    mainElementId: string,
    width: number,
    height: number,
    player: Player,
    stage: Stage
  ) {
    this.mainElementId = mainElementId;
    this.preElement = <HTMLPreElement>(
      document.getElementById(this.mainElementId)
    );
    this.width = width;
    this.height = height;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
    this.player = player;
    this.currentStage = stage;
    this.#lastScreen = [];
    this.dialog = null;
    setInterval(() => {
      this.draw();
    }, 40 / 1000);
  }

  replaceAt(str: string, index: number, replacement: string): string {
    return (
      str.substr(0, index) +
      replacement +
      str.substr(index + replacement.length)
    );
  }

  draw() {
    if (this.dialog) {
      console.log(this.dialog.getDialog(this.#lastScreen))
      this.#lastScreen = this.dialog.getDialog(this.#lastScreen);
      this.preElement.innerHTML = this.#lastScreen.join("\n");
      return;
    }
    this.drawStage();
  }

  drawStage() {
    let array = [...this.currentStage.matrix];
    this.currentStage.gameObjects.forEach((go) => {
      const row = this.replaceAt(array[go.y], go.x, go.char);
      array[go.y] = row;
    });
    const x = this.replaceAt(
      array[this.player.y],
      this.player.x,
      this.player.char
    );
    array[this.player.y] = x;
    // trim array by player position
    const yRange =
      this.player.y < this.halfHeight
        ? 0
        : this.player.y > array.length - this.halfHeight
        ? array.length - this.height
        : this.player.y - this.halfHeight;

    const xRange =
      this.player.x < this.halfWidth
        ? 0
        : this.player.x > array[0].length - this.halfWidth
        ? array[0].length - this.width
        : this.player.x - this.halfWidth;
    this.#lastScreen = array
      .slice(yRange, yRange + this.height)
      .map((row) => row.substring(xRange, xRange + this.width));
    this.#lastScreen.unshift(this.infoBar());
    this.preElement.innerHTML = this.#lastScreen.join("\n");
  }

  infoBar(): string {
    const weapon = this.player.currentItem?.name;
    return `Life:${" ♥".repeat(this.player.life)} - Weapon: ${
      weapon || "null"
    }`;
  }

  createDialog(text: string) {
    const dialog: string[] = [];
    const padding = 0;
    const paddingWord =  " ".repeat(((this.width) - text.length )/ 2);
    dialog.push(`╔${"═".repeat(this.width - padding * 2)}╗`);
    dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
    dialog.push(`║${paddingWord}${text}${paddingWord}║`);
    dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
    dialog.push(`╚${"═".repeat(this.width - padding * 2)}╝`);
    return dialog;
  }
}
