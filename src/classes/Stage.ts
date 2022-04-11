import { GameObjectPosition } from "../interfaces/GameObjectPosition";
import { GameObject } from "./GameObject";

export class Stage {
  public matrix: string[];
  public gameObjects: Array<GameObject>;
  public playerPosition: GameObjectPosition;

  constructor(matrix: string[], playerPosition: GameObjectPosition) {
    this.matrix = this.addFrame(matrix);
    this.playerPosition = playerPosition;
    this.gameObjects = [];
  }

  addGameObject(gameObject: GameObject) {
      this.gameObjects.push(gameObject);
  }

  getChar(x: number, y: number) {
    return this.matrix[y][x];
  }

  addFrame(matrix: string[]): string[] {
    const length = matrix[0].length;
    matrix = matrix.map((x) => "║" + x.slice(0, length) + "║");
    matrix.unshift("╔" + "═".repeat(length) + "╗");
    matrix.push("╚" + "═".repeat(length) + "╝");
    return matrix;
  }
}

// ╔══╗╚╝║
