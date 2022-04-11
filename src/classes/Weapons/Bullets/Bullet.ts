import { BulletFrame } from "../../../interfaces/BulletFrame";
import { GameObjectPosition } from "../../../interfaces/GameObjectPosition";
import { KeyCodes } from "../../../utils/constants";
import { GameObject } from "../../GameObject";

export class Bullet extends GameObject {
  public hurt: Boolean;
  private interval?: number;
  readonly animation: BulletFrame[];
  readonly animations: { [index: number]: BulletFrame[] };

  constructor(
    gameObject: GameObject,
    playerFacing: KeyCodes,
    animations: { [index: number]: BulletFrame[] }
  ) {
    super(gameObject.x, gameObject.y, gameObject.char, gameObject.colliderList);
    this.animations = { ...animations };
    this.hurt = false;
    this.animation = [...this.getAnimation(playerFacing)];
  }

  init() {
    const { x, y } = this;
    this.interval = window.setInterval(() => {
      if(globalThis.game.isPaused) return;
      const frame = this.animation.shift();
      if (!frame) {
        this.onCollide();
        return;
      }

      this.x = x + frame.x;
      this.y = y + frame.y;
      let position: GameObjectPosition = { x: this.x, y: this.y };
      this.char = frame.char || this.char;
      this.hurt = frame.hurt || false;

      if (this.hurt) {
        const collideStage = this.willCollideStage(position);
        const collideGameObject = this.willCollideGameObject(position);
        if (collideStage) this.onCollide();
        if (collideGameObject) {
          this.onCollide();
          collideGameObject.onCollide(this);
        }
      }
    }, 50);
  }

  getAnimation(playerFacing: KeyCodes): BulletFrame[] {
    return [...this.animations[playerFacing]];
  }

  onCollide(): void {
    this.interval && clearInterval(this.interval);

    this.char = "×";

    setTimeout(() => {
      this.destroy();
    }, 50);
  }

  willCollideGameObject(position: GameObjectPosition): GameObject | null {
    return (
      globalThis.game.currentStage.gameObjects.find(
        (go) =>
          go.x === position.x &&
          go.y === position.y &&
          go.id !== this.id &&
          go.constructor.name !== this.constructor.name
      ) || null
    );
  }

  destroy(): void {
    super.destroy();
    clearInterval(this.interval);
  }
}
