import { bombAnimations } from "../../../animations/bomb";
import { KeyCodes } from "../../../utils/constants";
import { GameObject } from "../../GameObject";
import { Bullet } from "./Bullet";

export class Bomb extends Bullet {
    public hurt: Boolean;

    constructor(keyCode: KeyCodes) {
        super(
            new GameObject(globalThis.game.player.x, globalThis.game.player.y, "b", "┏━┓┃┣┫}["),
            keyCode,
            bombAnimations
        );
        this.hurt = true;
    }
}