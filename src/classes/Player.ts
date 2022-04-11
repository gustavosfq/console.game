import { WeaponInterface } from "../interfaces/Weapon";
import { Game } from "./Game";
import { GameObject } from "./GameObject";
import { BombBag } from "./Weapons/BagBomb";
import { Gun } from "./Weapons/Gun";

export class Player extends GameObject {
  public items: WeaponInterface[];
  public currentItemIndex;
  public life: number;

  constructor(gameObject: GameObject) {
    gameObject.colliderList = "┏━┓┃┣┫}[/";
    super(gameObject.x, gameObject.y, gameObject.char, gameObject.colliderList);
    this.items = [];
    this.currentItemIndex = 0;
    this.life = 4;
  }

  get currentItem() {
    return this.items[this.currentItemIndex];
  }

  changeItem() {
    this.currentItemIndex =
      this.currentItemIndex + 1 > this.items.length - 1
        ? 0
        : this.currentItemIndex + 1;
  }

  attack() {
    this.currentItem.attack();
  }
}
