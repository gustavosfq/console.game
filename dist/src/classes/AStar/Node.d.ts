export declare class Node {
    x: number;
    y: number;
    parent: Node | null;
    g: number;
    h: number;
    f: number;
    constructor(x: number, y: number, parent: Node | null);
}
