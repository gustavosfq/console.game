import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { DialogBox } from "../DialogBox";
import { GameObject } from "../GameObject";
import { Player } from "../Player";
import { Gun } from "../Weapons/Gun";

export class GunGo extends GameObject {
  constructor(position: GameObjectPosition) {
    super(position.x, position.y, "╾");
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Player) {
      gameObject.x = this.x;
      gameObject.y = this.y;
      gameObject.items.push(new Gun());
      this.destroy();
      new DialogBox("Acabas de encontrar una ╾ ")
    }
  }
}
