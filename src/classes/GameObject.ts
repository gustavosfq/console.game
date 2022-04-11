import { KeyCodes } from "../utils/constants";
import { GameObjectPosition } from "../interfaces/GameObjectPosition";

const GlobalColliders = "╔══╗╚╝║";

interface GameObjectInterface {
  readonly id: string;
  x: number;
  y: number;
  char: string;
  colliderList: string;
  active: boolean;
  facing: KeyCodes;
  onCollide(gameObject: GameObject): void;
}

export class GameObject implements GameObjectInterface {
  readonly id: string;
  public x: number;
  public y: number;
  public char: string;
  public colliderList: string;
  public facing: KeyCodes;
  public active: boolean;

  constructor(x: number, y: number, char: string, colliderList: string = "") {
    this.id = (Math.random() + 1).toString(36).substring(7);
    this.x = x;
    this.y = y;
    this.char = char;
    this.colliderList = colliderList + GlobalColliders;
    this.facing = KeyCodes.ARROW_RIGHT;
    this.active = true;
  }

  willCollideStage(position: GameObjectPosition): boolean {
    return this.colliderList.includes(
      globalThis.game.currentStage.getChar(position.x, position.y)
    );
  }

  willCollideGameObject(position: GameObjectPosition): GameObject | null {
    return (
      globalThis.game.currentStage.gameObjects.find(
        (go) =>
          go.x === position.x &&
          go.y === position.y &&
          go.id !== this.id 
      ) || null
    );
  }

  collide(arrow: KeyCodes) {
    let collideStage = false;
    let collideGameObject: GameObject | null = null;
    let position: GameObjectPosition;
    switch (arrow) {
      case KeyCodes.ARROW_UP:
        position = { x: this.x, y: this.y - 1 };
        collideStage = this.willCollideStage(position);
        collideGameObject = this.willCollideGameObject(position);
        break;
      case KeyCodes.ARROW_DOWN:
        position = { x: this.x, y: this.y + 1 };
        collideStage = this.willCollideStage(position);
        collideGameObject = this.willCollideGameObject(position);
        break;
      case KeyCodes.ARROW_LEFT:
        position = { x: this.x - 1, y: this.y };
        collideStage = this.willCollideStage(position);
        collideGameObject = this.willCollideGameObject(position);
        break;
      case KeyCodes.ARROW_RIGHT:
        position = { x: this.x + 1, y: this.y };
        collideStage = this.willCollideStage(position);
        collideGameObject = this.willCollideGameObject(position);
        break;
      default:
        collideStage = false;
        collideGameObject = null;
        break;
    }

    if (collideGameObject) {
      this.onCollide(collideGameObject);
      collideGameObject.onCollide(this);
    }

    return collideStage || collideGameObject;
  }

  onCollide(gameObject: GameObject): void {
    this.destroy();
  }

  up() {
    this.facing = KeyCodes.ARROW_UP;
    if (this.y - 1 >= 0 && !this.collide(KeyCodes.ARROW_UP)) {
      this.y -= 1;
    }
  }

  down() {
    this.facing = KeyCodes.ARROW_DOWN;
    if (
      this.y + 1 < globalThis.game.currentStage.matrix.length &&
      !this.collide(KeyCodes.ARROW_DOWN)
    ) {
      this.y += 1;
    }
  }

  left() {
    this.facing = KeyCodes.ARROW_LEFT;
    if (this.x - 1 >= 0 && !this.collide(KeyCodes.ARROW_LEFT)) {
      this.x -= 1;
    }
  }

  right() {
    this.facing = KeyCodes.ARROW_RIGHT;
    if (
      this.x + 1 < globalThis.game.currentStage.matrix[0].length &&
      !this.collide(KeyCodes.ARROW_RIGHT)
    ) {
      this.x += 1;
    }
  }

  destroy(): void {
    let gameObject = null;
    globalThis.game.currentStage.gameObjects =
      globalThis.game.currentStage.gameObjects.filter(
        (go) => {
          if(go.id !== this.id) {
            gameObject = undefined;
            return true
          }
          return false;
        }
        );
        gameObject = null;
  }

  setActive(active: boolean): void {
    this.active = active;
  }
}
