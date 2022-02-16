import { GameObjectPosition } from "../interfaces/GameObjectPosition";
import { GameObject } from "./GameObject";
import { Player } from "./Player";
import { Bullet } from "./Weapons/Bullets/Bullet";

export class Enemy extends GameObject {
  constructor(position: GameObjectPosition) {
    super(position.x, position.y, "K");
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Player) {
      gameObject.life--;
    }
    if (gameObject instanceof Bullet) {
      this.destroy();
    }
  }
}
