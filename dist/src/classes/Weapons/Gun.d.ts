import { WeaponInterface } from "../../interfaces/Weapon";
import { GunBullet } from "./Bullets/GunBullet";
export declare class Gun implements WeaponInterface {
    name: string;
    bullets: GunBullet[];
    constructor();
    attack(): void;
}
