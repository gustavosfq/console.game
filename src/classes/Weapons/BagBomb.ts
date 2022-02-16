import { WeaponInterface } from "../../interfaces/Weapon";
import { Bomb } from "./Bullets/Bomb";

export class BombBag implements WeaponInterface {
  public name: string;
  public bullets: Bomb[];

  constructor() {
    this.name = "Bomb Bag";
    this.bullets = [];
  }

  attack() {
    const bullet = new Bomb(globalThis.game.player.facing);
    bullet.init();
    globalThis.game.currentStage.addGameObject(bullet);
  }
}
