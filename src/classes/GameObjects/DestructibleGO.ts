import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { DialogBox } from "../DialogBox";
import { GameObject } from "../GameObject";
import { Player } from "../Player";
import { BombBag } from "../Weapons/BagBomb";
import { Bullet } from "../Weapons/Bullets/Bullet";
import { Gun } from "../Weapons/Gun";

export class Destructible extends GameObject {
  constructor(position: GameObjectPosition) {
    super(position.x, position.y, "≣");
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Bullet) {
      this.destroy();
    }
  }
}
