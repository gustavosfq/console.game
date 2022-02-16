import { KeyCodes } from "../../../utils/constants";
import { Bullet } from "./Bullet";
export declare class Bomb extends Bullet {
    hurt: Boolean;
    constructor(keyCode: KeyCodes);
}
