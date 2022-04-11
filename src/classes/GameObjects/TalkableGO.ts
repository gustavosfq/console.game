import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { DialogBox } from "../DialogBox";
import { GameObject } from "../GameObject";
import { Player } from "../Player";

export class Talkable extends GameObject {
  onTalk: Function;
  constructor(position: GameObjectPosition, char: string, func: Function) {
    super(position.x, position.y, char || "?");
    this.onTalk = func;
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Player) {
      gameObject.x = this.x;
      gameObject.y = this.y;
      setTimeout(() => {
        this.onTalk();
        // this.text.map((str) => new DialogBox(str));
      }, 50);
    }
  }
}
