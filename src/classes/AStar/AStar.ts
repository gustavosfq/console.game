import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { Node } from "./Node";
import { GameObject } from '../GameObject';

export class AStar {
  matrix: string[];
  searching: boolean;
  start: Node;
  end: Node;
  publicList: Node[];
  privateList: Node[];
  path: GameObjectPosition[];
  gameObject: GameObject;
  constructor(start: Node, end: Node, matrix: string[], gameObject: GameObject) {
    this.matrix = matrix;
    this.start = start;
    this.end = end;
    this.publicList = [this.start];
    this.privateList = [];
    this.searching = true;
    this.gameObject = gameObject;
    this.path = [];
  }

  getPath() {
    let count = 10000;
    while (this.searching) {
      let best = this.getMinimum(this.publicList) || this.start;
      this.getChildren(best);
      this.switchNode(best);
      if (count < 0) {
        console.log("se deja");
        this.searching = false;
      }

      count--;
    }
    return this.createPath();
  }

  getMinimum(list: Node[]) {
    try {
      if (list) {
        let best = list.reduce((prev, curr) => {
          return prev.f && curr.f && prev.f < curr.f ? prev : curr;
        });
        let bestList = list.filter((node) => node.f === best.f);
        best = bestList.reduce((prev, curr) => {
          return prev.h && curr.h && prev.h < curr.h ? prev : curr;
        });
        return best;
      }
    } catch (error) {
      console.log(this.gameObject)
      this.searching = false;
    }
    return null;
  }

  getChildren(node: Node): Node[] {
    let list: Node[] = [];
    let options = [
      { x: node.x, y: node.y - 1 }, //up
      { x: node.x + 1, y: node.y }, //right
      { x: node.x, y: node.y + 1 }, //down
      { x: node.x - 1, y: node.y }, //left
      // { x: node.x + 1, y: node.y - 1}, //up right
      // { x: node.x + 1, y: node.y + 1}, //down right
      // { x: node.x - 1, y: node.y + 1}, // down left
      // { x: node.x - 1, y: node.y - 1}, //up left
    ];
    options.forEach((postion) => {
      let newNode: Node | null;
      let privateNode = this.findInList(this.privateList, postion);
      if (!privateNode) {
        let index = this.findIndexInList(this.publicList, postion);
        let publicNode = this.publicList[index];
        if (publicNode) {
          if (node.g + 10 < publicNode.g) {
            publicNode.g = node.g + 10;
            publicNode.f = publicNode.g + publicNode.h;
            publicNode.parent = node;
          }
          this.publicList[index] = publicNode;
          list.push(publicNode);
        } else {
          newNode = this.validateAndCreate(postion, node);
          if (newNode) {
            newNode.g = node.g + 10;
            newNode.h = this.manhathan(newNode, this.end);
            newNode.f = newNode.g + newNode.h;
            this.publicList.push(newNode);
            list.push(newNode);
          }
        }
      }
    });
    return list;
  }

  manhathan(start: Node, end: Node): number {
    return (end.y - start.y + (end.x + start.y)) * 10;
  }

  validateAndCreate(position: GameObjectPosition, node: Node) {
    try {
      let char = this.matrix[position.y][position.x];
      if (this.gameObject.willCollideStage(position) || char == undefined) throw "char es " + char;
      if (position.x === this.end.x && position.y == this.end.y) {
        this.end = new Node(position.x, position.y, node);
        this.searching = false;
      }
      return new Node(position.x, position.y, node);
    } catch (error) {
      return null;
    }
  }

  comparePosition(node: Node, postion: GameObjectPosition) {
    return node.x === postion.x && node.y === postion.y;
  }

  findInList(list: Node[], position: GameObjectPosition) {
    return list.find((node) => this.comparePosition(node, position));
  }

  findIndexInList(list: Node[], position: GameObjectPosition) {
    return list.findIndex((node) => this.comparePosition(node, position));
  }

  switchNode(position: GameObjectPosition) {
    let index = this.findIndexInList(this.publicList, position);
    let node = this.publicList[index];
    if (node == undefined || node == null) return;
    this.privateList.push(node);
    this.publicList.splice(index, 1);
  }

  createPath() {
    let list: GameObjectPosition[] = [];
    let node = this.end;
    while (node.parent) {
      list.push({ x: node.x, y: node.y });
      node = node.parent;
    }
    return list;
  }
}
