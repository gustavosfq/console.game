import { WeaponInterface } from "../../interfaces/Weapon";
import { GunBullet } from "./Bullets/GunBullet";

export class Gun implements WeaponInterface {
  public name: string;
  public bullets: GunBullet[];

  constructor() {
    this.name = "Gun"
    this.bullets = [];
  }

  attack() {
    const bullet = new GunBullet(globalThis.game.player.facing);
    bullet.init();
    globalThis.game.currentStage.addGameObject(bullet);
  }
}
