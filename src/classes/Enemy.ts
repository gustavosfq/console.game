import { sleep } from "../utils/sleep";
import { GameObjectPosition } from "../interfaces/GameObjectPosition";
import { AStar } from "./AStar/AStar";
import { Node } from "./AStar/Node";
import { GameObject } from "./GameObject";
import { Player } from "./Player";
import { Bullet } from "./Weapons/Bullets/Bullet";

enum FollowMode {
  "AStar",
  "CheckingDirect",
  "DirectFollow",
}

export class Enemy extends GameObject {
  followMode: FollowMode;
  path: GameObjectPosition[];
  isAnimating: boolean;
  lastPosition: GameObjectPosition;
  stoppedCounter: number;
  aStartInterval: number;
  directInterval: number;
  constructor(position: GameObjectPosition) {
    super(position.x, position.y, "K", "┏━┓┃┣┫}[/");
    this.followMode = FollowMode.AStar;
    this.isAnimating = false;
    this.path = [];
    this.lastPosition = position;
    this.stoppedCounter = 0;
    this.aStartInterval = 0;
    this.directInterval = 0;
    this.startAStar();
    this.startDirectFollow();
  }

  startDirectFollow() {
    this.directInterval = window.setInterval(() => {
      if (globalThis.game.isPaused || !this.active) return;
      if (this.followMode === FollowMode.DirectFollow) {
        let { x, y } = globalThis.game.player;
        let tempX =
          this.x === x ? this.x : this.x > x ? this.x - 1 : this.x + 1;
        let tempY =
          this.y === y ? this.y : this.y > y ? this.y - 1 : this.y + 1;
        let position = { x: tempX, y: tempY };
        if (
          !(
            !!this.willCollideGameObject(position) ||
            this.willCollideStage(position)
          )
        ) {
          this.lastPosition = position;
          this.x = tempX;
          this.y = tempY;
        } else {
          if (this.lastPosition.x === tempX && this.lastPosition.y === tempY) {
            this.stoppedCounter++;
            if (this.stoppedCounter > 3) {
              this.followMode = FollowMode.AStar;
            }
          }
        }
      }
    }, 500);
  }
  startAStar() {
    this.aStartInterval = window.setInterval(() => {
      if (globalThis.game.isPaused || !this.active) return;
      if (this.followMode === FollowMode.AStar) {
        this.path = this.getPath();
        if (!this.isAnimating) {
          this.animate();
        }
        this.followMode = FollowMode.CheckingDirect;
      }
      let { x, y } = this;
      let ray = this.getRayCasting(
        { ...{ x, y } },
        { x: globalThis.game.player.x, y: globalThis.game.player.y },
        globalThis.game.currentStage.matrix
      );
      if (ray.replaceAll(" ", "").length === 0) {
        this.followMode = FollowMode.DirectFollow;
        this.path = [];
      } else {
        this.followMode = FollowMode.AStar;
      }
    }, 1000);
  }

  onCollide(gameObject: GameObject): void {
    if (gameObject instanceof Player) {
      gameObject.life--;
    }
    if (gameObject instanceof Bullet) {
      this.destroy();
    }
  }

  async animate() {
    this.isAnimating = true;
    while (this.path.length && this.followMode !== FollowMode.DirectFollow) {
      if (!globalThis.game.isPaused || !this.active) {
        let step = this.path.pop();
        if (step) {
          let collider =
            !!this.willCollideGameObject(step) || this.willCollideStage(step);
          if (!collider) {
            this.x = step.x;
            this.y = step.y;
          } else {
            this.path.push(step);
          }
        }
      }
      await sleep(500);
    }
    this.isAnimating = false;
  }

  getPath() {
    const astar = new AStar(
      new Node(this.x, this.y, null),
      new Node(globalThis.game.player.x, globalThis.game.player.y, null),
      globalThis.game.currentStage.matrix,
      this
    );
    return astar.getPath();
  }

  getRayCasting(
    start: GameObjectPosition,
    end: GameObjectPosition,
    matrix: string[]
  ) {
    let ray: string[] = [];
    let actual = { ...start };
    while (actual.x !== end.x || actual.y !== end.y) {
      actual.x =
        actual.x === end.x
          ? actual.x
          : actual.x > end.x
          ? actual.x - 1
          : actual.x + 1;
      actual.y =
        actual.y === end.y
          ? actual.y
          : actual.y > end.y
          ? actual.y - 1
          : actual.y + 1;
      ray.push(matrix[actual.y][actual.x]);
    }
    return ray.join("");
  }

  destroy(): void {
    super.destroy();
    clearInterval(this.aStartInterval);
    clearInterval(this.directInterval);
  }

  setActive(value: boolean) {
    this.active = value;
    if (!value) {
      clearInterval(this.aStartInterval);
      clearInterval(this.directInterval);
    } else {
      this.startAStar();
      this.startDirectFollow();
      this.followMode = FollowMode.AStar;
    }
  }
}
