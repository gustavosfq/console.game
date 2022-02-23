export class Node {
    x: number;
    y: number;
    parent: Node | null;
    g: number;
    h: number;
    f: number;

    constructor(x: number, y: number, parent: Node | null) {
        this.x = x;
        this.y = y;
        this.parent = parent || null;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
}