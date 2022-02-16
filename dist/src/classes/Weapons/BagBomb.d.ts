import { WeaponInterface } from "../../interfaces/Weapon";
import { Bomb } from "./Bullets/Bomb";
export declare class BombBag implements WeaponInterface {
    name: string;
    bullets: Bomb[];
    constructor();
    attack(): void;
}
