import { BulletFrame } from "../../../interfaces/BulletFrame";
import { KeyCodes } from "../../../utils/constants";
import { GameObject } from "../../GameObject";
export declare class Bullet extends GameObject {
    hurt: Boolean;
    private interval?;
    readonly animation: BulletFrame[];
    readonly animations: {
        [index: number]: BulletFrame[];
    };
    constructor(gameObject: GameObject, playerFacing: KeyCodes, animations: {
        [index: number]: BulletFrame[];
    });
    init(): void;
    getAnimation(playerFacing: KeyCodes): BulletFrame[];
    onCollide(): void;
}
