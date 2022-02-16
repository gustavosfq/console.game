import { Bullet } from "../classes/Weapons/Bullets/Bullet";
export interface WeaponInterface {
    name: string;
    bullets: Array<Bullet>;
    attack: Function;
}
