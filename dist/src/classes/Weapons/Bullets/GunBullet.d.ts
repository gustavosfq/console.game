import { KeyCodes } from "../../../utils/constants";
import { Bullet } from "./Bullet";
export declare class GunBullet extends Bullet {
    hurt: Boolean;
    constructor(keyCode: KeyCodes);
}
