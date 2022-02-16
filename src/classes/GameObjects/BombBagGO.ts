import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { GameObject } from "../GameObject";
import { Player } from "../Player";
import { BombBag } from "../Weapons/BagBomb";
import { Gun } from "../Weapons/Gun";

export class BombBagGo extends GameObject {
  constructor(position: GameObjectPosition) {
    super(position.x, position.y, "☌");
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Player) {
      gameObject.items.push(new BombBag());
      this.destroy();
    }
  }
}
