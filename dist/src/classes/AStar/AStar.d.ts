import { GameObjectPosition } from "../../interfaces/GameObjectPosition";
import { Node } from "./Node";
export declare class AStar {
    matrix: string[];
    searching: boolean;
    start: Node;
    end: Node;
    publicList: Node[];
    privateList: Node[];
    path: GameObjectPosition[];
    constructor(start: Node, end: Node, matrix: string[]);
    getPath(): GameObjectPosition[];
    getMinimum(list: Node[]): Node | null;
    getChildren(node: Node): Node[];
    manhathan(start: Node, end: Node): number;
    validateAndCreate(position: GameObjectPosition, node: Node): Node | null;
    comparePosition(node: Node, postion: GameObjectPosition): boolean;
    findInList(list: Node[], position: GameObjectPosition): Node | undefined;
    findIndexInList(list: Node[], position: GameObjectPosition): number;
    switchNode(position: GameObjectPosition): void;
    createPath(): GameObjectPosition[];
}
