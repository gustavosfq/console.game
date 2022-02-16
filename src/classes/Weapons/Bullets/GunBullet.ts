import { gunBulletAnimations } from "../../../animations/gunBullet";
import { KeyCodes } from "../../../utils/constants";
import { GameObject } from "../../GameObject";
import { Bullet } from "./Bullet";

export class GunBullet extends Bullet {
    public hurt: Boolean;

    constructor(keyCode: KeyCodes) {
        super(
            new GameObject(globalThis.game.player.x, globalThis.game.player.y, "-", "┏━┓┃┣┫}["),
            keyCode,
            gunBulletAnimations
        );
        this.hurt = true;
    }
}