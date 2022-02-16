import { WeaponInterface } from "../interfaces/Weapon";
import { GameObject } from "./GameObject";
export declare class Player extends GameObject {
    items: WeaponInterface[];
    currentItemIndex: number;
    life: number;
    constructor(gameObject: GameObject);
    get currentItem(): WeaponInterface;
    changeItem(): void;
    attack(): void;
}
