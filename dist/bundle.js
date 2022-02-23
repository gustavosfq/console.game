/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations/bomb.ts":
/*!********************************!*\
  !*** ./src/animations/bomb.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bombAnimations = void 0;
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
const rightAnimation = [
    { y: -1, x: 1, hurt: false, char: "☌" },
    { y: -1, x: 1, hurt: false, char: "☌" },
    { y: -1, x: 2, hurt: false, char: "☌" },
    { y: -2, x: 2, hurt: false, char: "☌" },
    { y: -2, x: 3, hurt: false, char: "☌" },
    { y: -2, x: 3, hurt: false, char: "☌" },
    { y: -2, x: 4, hurt: false, char: "☌" },
    { y: -2, x: 4, hurt: false, char: "☌" },
    { y: -2, x: 5, hurt: false, char: "☌" },
    { y: -2, x: 5, hurt: false, char: "☌" },
    { y: -2, x: 6, hurt: false, char: "☌" },
    { y: -2, x: 6, hurt: false, char: "☌" },
    { y: -1, x: 7, hurt: false, char: "☌" },
    { y: -1, x: 7, hurt: false, char: "☌" },
    { y: -1, x: 8, hurt: false, char: "☌" },
    { y: -1, x: 8, hurt: false, char: "⊗" },
    { y: 0, x: 9, hurt: true, char: "×" },
];
const downAnimation = [
    { x: -1, y: 1, hurt: false, char: "☌" },
    { x: -1, y: 1, hurt: false, char: "☌" },
    { x: -1, y: 2, hurt: false, char: "☌" },
    { x: -2, y: 2, hurt: false, char: "☌" },
    { x: -2, y: 3, hurt: false, char: "☌" },
    { x: -2, y: 3, hurt: false, char: "☌" },
    { x: -2, y: 4, hurt: false, char: "☌" },
    { x: -2, y: 4, hurt: false, char: "☌" },
    { x: -2, y: 5, hurt: false, char: "☌" },
    { x: -2, y: 5, hurt: false, char: "☌" },
    { x: -2, y: 6, hurt: false, char: "☌" },
    { x: -2, y: 6, hurt: false, char: "☌" },
    { x: -1, y: 7, hurt: false, char: "☌" },
    { x: -1, y: 7, hurt: false, char: "☌" },
    { x: -1, y: 8, hurt: false, char: "☌" },
    { x: -1, y: 8, hurt: false, char: "⊗" },
    { x: 0, y: 9, hurt: true, char: "×" },
];
const upAnimation = [
    { x: -1, y: -1, hurt: false, char: "☌" },
    { x: -1, y: -1, hurt: false, char: "☌" },
    { x: -1, y: -2, hurt: false, char: "☌" },
    { x: -2, y: -2, hurt: false, char: "☌" },
    { x: -2, y: -3, hurt: false, char: "☌" },
    { x: -2, y: -3, hurt: false, char: "☌" },
    { x: -2, y: -4, hurt: false, char: "☌" },
    { x: -2, y: -4, hurt: false, char: "☌" },
    { x: -2, y: -5, hurt: false, char: "☌" },
    { x: -2, y: -5, hurt: false, char: "☌" },
    { x: -2, y: -6, hurt: false, char: "☌" },
    { x: -2, y: -6, hurt: false, char: "☌" },
    { x: -1, y: -7, hurt: false, char: "☌" },
    { x: -1, y: -7, hurt: false, char: "☌" },
    { x: -1, y: -8, hurt: false, char: "☌" },
    { x: -1, y: -8, hurt: false, char: "⊗" },
    { x: 0, y: -9, hurt: true, char: "×" },
];
const leftAnimation = [
    { y: -1, x: -1, hurt: false, char: "☌" },
    { y: -1, x: -1, hurt: false, char: "☌" },
    { y: -1, x: -2, hurt: false, char: "☌" },
    { y: -2, x: -2, hurt: false, char: "☌" },
    { y: -2, x: -3, hurt: false, char: "☌" },
    { y: -2, x: -3, hurt: false, char: "☌" },
    { y: -2, x: -4, hurt: false, char: "☌" },
    { y: -2, x: -4, hurt: false, char: "☌" },
    { y: -2, x: -5, hurt: false, char: "☌" },
    { y: -2, x: -5, hurt: false, char: "☌" },
    { y: -2, x: -6, hurt: false, char: "☌" },
    { y: -2, x: -6, hurt: false, char: "☌" },
    { y: -1, x: -7, hurt: false, char: "☌" },
    { y: -1, x: -7, hurt: false, char: "☌" },
    { y: -1, x: -8, hurt: false, char: "☌" },
    { y: -1, x: -8, hurt: false, char: "☌" },
    { y: 0, x: -9, hurt: true, char: "×" },
];
exports.bombAnimations = {
    [constants_1.KeyCodes.ARROW_UP]: upAnimation,
    [constants_1.KeyCodes.ARROW_DOWN]: downAnimation,
    [constants_1.KeyCodes.ARROW_LEFT]: leftAnimation,
    [constants_1.KeyCodes.ARROW_RIGHT]: rightAnimation,
};


/***/ }),

/***/ "./src/animations/gunBullet.ts":
/*!*************************************!*\
  !*** ./src/animations/gunBullet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gunBulletAnimations = void 0;
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
const rightAnimation = [
    { y: 0, x: 1, hurt: true },
    { y: 0, x: 2, hurt: true },
    { y: 0, x: 3, hurt: true },
    { y: 0, x: 4, hurt: true },
    { y: 0, x: 5, hurt: true },
    { y: 0, x: 6, hurt: true },
    { y: 0, x: 7, hurt: true },
    { y: 0, x: 8, hurt: true, char: "×" },
];
const upAnimation = [
    { x: 0, y: -1, hurt: true, char: "|" },
    { x: 0, y: -2, hurt: true },
    { x: 0, y: -3, hurt: true },
    { x: 0, y: -4, hurt: true },
    { x: 0, y: -5, hurt: true },
    { x: 0, y: -6, hurt: true },
    { x: 0, y: -7, hurt: true },
    { x: 0, y: -8, hurt: true, char: "×" },
];
const downAnimation = [
    { x: 0, y: 1, hurt: true, char: "|" },
    { x: 0, y: 2, hurt: true, char: "|" },
    { x: 0, y: 3, hurt: true, char: "|" },
    { x: 0, y: 4, hurt: true, char: "|" },
    { x: 0, y: 5, hurt: true, char: "|" },
    { x: 0, y: 6, hurt: true, char: "|" },
    { x: 0, y: 7, hurt: true, char: "|" },
    { x: 0, y: 8, hurt: true, char: "×" },
];
const leftAnimation = [
    { y: 0, x: -1, hurt: true },
    { y: 0, x: -2, hurt: true },
    { y: 0, x: -3, hurt: true },
    { y: 0, x: -4, hurt: true },
    { y: 0, x: -5, hurt: true },
    { y: 0, x: -6, hurt: true },
    { y: 0, x: -7, hurt: true },
    { y: 0, x: -8, hurt: true, char: "×" },
];
exports.gunBulletAnimations = {
    [constants_1.KeyCodes.ARROW_UP]: upAnimation,
    [constants_1.KeyCodes.ARROW_DOWN]: downAnimation,
    [constants_1.KeyCodes.ARROW_LEFT]: leftAnimation,
    [constants_1.KeyCodes.ARROW_RIGHT]: rightAnimation,
};


/***/ }),

/***/ "./src/classes/AStar/AStar.ts":
/*!************************************!*\
  !*** ./src/classes/AStar/AStar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AStar = void 0;
const Node_1 = __webpack_require__(/*! ./Node */ "./src/classes/AStar/Node.ts");
class AStar {
    constructor(start, end, matrix) {
        this.matrix = matrix;
        this.start = start;
        this.end = end;
        this.publicList = [this.start];
        this.privateList = [];
        this.searching = true;
        this.path = [];
    }
    getPath() {
        let count = 10000;
        while (this.searching || count < 0) {
            let best = this.getMinimum(this.publicList) || this.start;
            this.getChildren(best);
            this.switchNode(best);
            count--;
        }
        return this.createPath();
    }
    getMinimum(list) {
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
        return null;
    }
    getChildren(node) {
        let list = [];
        let options = [
            { x: node.x, y: node.y - 1 },
            { x: node.x + 1, y: node.y },
            { x: node.x, y: node.y + 1 },
            { x: node.x - 1, y: node.y },
        ];
        options.forEach((postion) => {
            let newNode;
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
                }
                else {
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
    manhathan(start, end) {
        return (end.y - start.y + (end.x + start.y)) * 10;
    }
    validateAndCreate(position, node) {
        try {
            let char = this.matrix[position.y][position.x];
            if (char !== " " || char == undefined)
                throw "char es " + char;
            if (position.x === this.end.x && position.y == this.end.y) {
                this.searching = false;
                this.end = new Node_1.Node(position.x, position.y, node);
            }
            return new Node_1.Node(position.x, position.y, node);
        }
        catch (error) {
            return null;
        }
    }
    comparePosition(node, postion) {
        return node.x === postion.x && node.y === postion.y;
    }
    findInList(list, position) {
        return list.find((node) => this.comparePosition(node, position));
    }
    findIndexInList(list, position) {
        return list.findIndex((node) => this.comparePosition(node, position));
    }
    switchNode(position) {
        let index = this.findIndexInList(this.publicList, position);
        let node = this.publicList[index];
        if (node == undefined || node == null)
            return;
        this.privateList.push(node);
        this.publicList.splice(index, 1);
    }
    createPath() {
        let list = [];
        let node = this.end;
        while (node.parent) {
            list.push({ x: node.x, y: node.y });
            node = node.parent;
        }
        return list;
    }
}
exports.AStar = AStar;


/***/ }),

/***/ "./src/classes/AStar/Node.ts":
/*!***********************************!*\
  !*** ./src/classes/AStar/Node.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Node = void 0;
class Node {
    constructor(x, y, parent) {
        this.x = x;
        this.y = y;
        this.parent = parent || null;
        this.g = 0;
        this.h = 0;
        this.f = 0;
    }
}
exports.Node = Node;


/***/ }),

/***/ "./src/classes/DialogBox.ts":
/*!**********************************!*\
  !*** ./src/classes/DialogBox.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DialogBox = void 0;
class DialogBox {
    constructor(text) {
        this.matrix = [];
        this.text = text;
        this.width = globalThis.game.width;
        this.init();
    }
    getDialog(lastScreen) {
        const xyPoint = {
            x: 0,
            y: lastScreen.length - this.matrix.length,
        };
        for (let i = 0; i < this.matrix.length; i++) {
            lastScreen[xyPoint.y + i] = this.matrix[i];
        }
        return lastScreen;
    }
    init() {
        const dialog = [];
        const padding = 0;
        const paddingWord = " ".repeat((this.width - this.text.length) / 2);
        dialog.push(`╔${"═".repeat(this.width - padding * 2)}╗`);
        dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
        dialog.push(`║${paddingWord}${this.text}${paddingWord}║`);
        dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
        dialog.push(`╚${"═".repeat(this.width - padding * 2)}╝`);
        this.matrix = dialog;
        globalThis.game.dialog = this;
    }
}
exports.DialogBox = DialogBox;


/***/ }),

/***/ "./src/classes/Enemy.ts":
/*!******************************!*\
  !*** ./src/classes/Enemy.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const sleep_1 = __webpack_require__(/*! ../utils/sleep */ "./src/utils/sleep.ts");
const AStar_1 = __webpack_require__(/*! ./AStar/AStar */ "./src/classes/AStar/AStar.ts");
const Node_1 = __webpack_require__(/*! ./AStar/Node */ "./src/classes/AStar/Node.ts");
const GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/classes/GameObject.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/classes/Player.ts");
const Bullet_1 = __webpack_require__(/*! ./Weapons/Bullets/Bullet */ "./src/classes/Weapons/Bullets/Bullet.ts");
var FollowMode;
(function (FollowMode) {
    FollowMode[FollowMode["AStar"] = 0] = "AStar";
    FollowMode[FollowMode["CheckingDirect"] = 1] = "CheckingDirect";
    FollowMode[FollowMode["DirectFollow"] = 2] = "DirectFollow";
})(FollowMode || (FollowMode = {}));
class Enemy extends GameObject_1.GameObject {
    constructor(position) {
        super(position.x, position.y, "K");
        this.followMode = FollowMode.AStar;
        this.isAnimating = false;
        this.path = [];
        setInterval(() => {
            if (this.followMode === FollowMode.AStar) {
                this.path = this.getPath();
                if (!this.isAnimating) {
                    this.animate();
                }
                this.followMode = FollowMode.CheckingDirect;
            }
            let { x, y } = this;
            let ray = this.getRayCasting(Object.assign({ x, y }), { x: globalThis.game.player.x, y: globalThis.game.player.y }, globalThis.game.currentStage.matrix);
            if (ray.replaceAll(" ", "").length === 0) {
                this.followMode = FollowMode.DirectFollow;
                this.path = [];
            }
            else {
                this.followMode = FollowMode.AStar;
            }
        }, 1000);
        setInterval(() => {
            if (this.followMode === FollowMode.DirectFollow) {
                let { x, y } = globalThis.game.player;
                this.x = this.x === x ? this.x : this.x > x ? this.x - 1 : this.x + 1;
                this.y = this.y === y ? this.y : this.y > y ? this.y - 1 : this.y + 1;
            }
        }, 500);
    }
    onCollide(gameObject) {
        if (gameObject instanceof Player_1.Player) {
            gameObject.life--;
        }
        if (gameObject instanceof Bullet_1.Bullet) {
            this.destroy();
        }
    }
    animate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isAnimating = true;
            while (this.path.length && this.followMode !== FollowMode.DirectFollow) {
                let step = this.path.pop();
                if (step) {
                    this.x = step.x;
                    this.y = step.y;
                }
                yield (0, sleep_1.sleep)(500);
            }
            this.isAnimating = false;
        });
    }
    getPath() {
        const astar = new AStar_1.AStar(new Node_1.Node(this.x, this.y, null), new Node_1.Node(globalThis.game.player.x, globalThis.game.player.y, null), globalThis.game.currentStage.matrix);
        return astar.getPath();
    }
    getRayCasting(start, end, matrix) {
        let ray = [];
        let actual = Object.assign({}, start);
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
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/classes/Game.ts":
/*!*****************************!*\
  !*** ./src/classes/Game.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Game_lastScreen;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
class Game {
    constructor(mainElementId, width, height, player, stage) {
        _Game_lastScreen.set(this, void 0);
        this.mainElementId = mainElementId;
        this.preElement = (document.getElementById(this.mainElementId));
        this.width = width;
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
        this.player = player;
        this.currentStage = stage;
        __classPrivateFieldSet(this, _Game_lastScreen, [], "f");
        this.dialog = null;
        setInterval(() => {
            this.draw();
        }, 40 / 1000);
    }
    replaceAt(str, index, replacement) {
        return (str.substr(0, index) +
            replacement +
            str.substr(index + replacement.length));
    }
    draw() {
        if (this.dialog) {
            __classPrivateFieldSet(this, _Game_lastScreen, this.dialog.getDialog(__classPrivateFieldGet(this, _Game_lastScreen, "f")), "f");
            this.preElement.innerHTML = __classPrivateFieldGet(this, _Game_lastScreen, "f").join("\n");
            return;
        }
        this.drawStage();
    }
    drawStage() {
        let array = [...this.currentStage.matrix];
        this.currentStage.gameObjects.forEach((go) => {
            const row = this.replaceAt(array[go.y], go.x, go.char);
            array[go.y] = row;
        });
        const x = this.replaceAt(array[this.player.y], this.player.x, this.player.char);
        array[this.player.y] = x;
        const yRange = this.player.y < this.halfHeight
            ? 0
            : this.player.y > array.length - this.halfHeight
                ? array.length - this.height
                : this.player.y - this.halfHeight;
        const xRange = this.player.x < this.halfWidth
            ? 0
            : this.player.x > array[0].length - this.halfWidth
                ? array[0].length - this.width
                : this.player.x - this.halfWidth;
        __classPrivateFieldSet(this, _Game_lastScreen, array
            .slice(yRange, yRange + this.height)
            .map((row) => row.substring(xRange, xRange + this.width)), "f");
        __classPrivateFieldGet(this, _Game_lastScreen, "f").unshift(this.infoBar());
        this.preElement.innerHTML = __classPrivateFieldGet(this, _Game_lastScreen, "f").join("\n");
    }
    infoBar() {
        var _a;
        const weapon = (_a = this.player.currentItem) === null || _a === void 0 ? void 0 : _a.name;
        return `Life:${" ♥".repeat(this.player.life)} - Weapon: ${weapon || "null"}`;
    }
    createDialog(text) {
        const dialog = [];
        const padding = 0;
        const paddingWord = " ".repeat((this.width - text.length) / 2);
        dialog.push(`╔${"═".repeat(this.width - padding * 2)}╗`);
        dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
        dialog.push(`║${paddingWord}${text}${paddingWord}║`);
        dialog.push(`║${" ".repeat(this.width - padding * 2)}║`);
        dialog.push(`╚${"═".repeat(this.width - padding * 2)}╝`);
        return dialog;
    }
}
exports.Game = Game;
_Game_lastScreen = new WeakMap();


/***/ }),

/***/ "./src/classes/GameObject.ts":
/*!***********************************!*\
  !*** ./src/classes/GameObject.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameObject = void 0;
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
const GlobalColliders = "╔══╗╚╝║";
class GameObject {
    constructor(x, y, char, colliderList = "") {
        this.id = (Math.random() + 1).toString(36).substring(7);
        this.x = x;
        this.y = y;
        this.char = char;
        this.colliderList = colliderList + GlobalColliders;
        this.facing = constants_1.KeyCodes.ARROW_RIGHT;
    }
    willCollideStage(position) {
        return this.colliderList.includes(globalThis.game.currentStage.getChar(position.x, position.y));
    }
    willCollideGameObject(position) {
        return (globalThis.game.currentStage.gameObjects.find((go) => go.x === position.x &&
            go.y === position.y &&
            go.id !== this.id &&
            go.constructor.name !== this.constructor.name) || null);
    }
    collide(arrow) {
        let collideStage = false;
        let collideGameObject = null;
        let position;
        switch (arrow) {
            case constants_1.KeyCodes.ARROW_UP:
                position = { x: this.x, y: this.y - 1 };
                collideStage = this.willCollideStage(position);
                collideGameObject = this.willCollideGameObject(position);
                break;
            case constants_1.KeyCodes.ARROW_DOWN:
                position = { x: this.x, y: this.y + 1 };
                collideStage = this.willCollideStage(position);
                collideGameObject = this.willCollideGameObject(position);
                break;
            case constants_1.KeyCodes.ARROW_LEFT:
                position = { x: this.x - 1, y: this.y };
                collideStage = this.willCollideStage(position);
                collideGameObject = this.willCollideGameObject(position);
                break;
            case constants_1.KeyCodes.ARROW_RIGHT:
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
    onCollide(gameObject) {
        this.destroy();
    }
    up() {
        this.facing = constants_1.KeyCodes.ARROW_UP;
        if (this.y - 1 >= 0 && !this.collide(constants_1.KeyCodes.ARROW_UP)) {
            this.y -= 1;
        }
    }
    down() {
        this.facing = constants_1.KeyCodes.ARROW_DOWN;
        if (this.y + 1 < globalThis.game.currentStage.matrix.length &&
            !this.collide(constants_1.KeyCodes.ARROW_DOWN)) {
            this.y += 1;
        }
    }
    left() {
        this.facing = constants_1.KeyCodes.ARROW_LEFT;
        if (this.x - 1 >= 0 && !this.collide(constants_1.KeyCodes.ARROW_LEFT)) {
            this.x -= 1;
        }
    }
    right() {
        this.facing = constants_1.KeyCodes.ARROW_RIGHT;
        if (this.x + 1 < globalThis.game.currentStage.matrix[0].length &&
            !this.collide(constants_1.KeyCodes.ARROW_RIGHT)) {
            this.x += 1;
        }
    }
    destroy() {
        globalThis.game.currentStage.gameObjects =
            globalThis.game.currentStage.gameObjects.filter((go) => go.id !== this.id);
    }
}
exports.GameObject = GameObject;


/***/ }),

/***/ "./src/classes/GameObjects/BombBagGO.ts":
/*!**********************************************!*\
  !*** ./src/classes/GameObjects/BombBagGO.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BombBagGo = void 0;
const DialogBox_1 = __webpack_require__(/*! ../DialogBox */ "./src/classes/DialogBox.ts");
const GameObject_1 = __webpack_require__(/*! ../GameObject */ "./src/classes/GameObject.ts");
const Player_1 = __webpack_require__(/*! ../Player */ "./src/classes/Player.ts");
const BagBomb_1 = __webpack_require__(/*! ../Weapons/BagBomb */ "./src/classes/Weapons/BagBomb.ts");
class BombBagGo extends GameObject_1.GameObject {
    constructor(position) {
        super(position.x, position.y, "☌");
    }
    onCollide(gameObject) {
        if (gameObject instanceof Player_1.Player) {
            gameObject.items.push(new BagBomb_1.BombBag());
            this.destroy();
            globalThis.game.dialog = new DialogBox_1.DialogBox("Acabas de encontrar una ☌ ");
        }
    }
}
exports.BombBagGo = BombBagGo;


/***/ }),

/***/ "./src/classes/GameObjects/GunGO.ts":
/*!******************************************!*\
  !*** ./src/classes/GameObjects/GunGO.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GunGo = void 0;
const DialogBox_1 = __webpack_require__(/*! ../DialogBox */ "./src/classes/DialogBox.ts");
const GameObject_1 = __webpack_require__(/*! ../GameObject */ "./src/classes/GameObject.ts");
const Player_1 = __webpack_require__(/*! ../Player */ "./src/classes/Player.ts");
const Gun_1 = __webpack_require__(/*! ../Weapons/Gun */ "./src/classes/Weapons/Gun.ts");
class GunGo extends GameObject_1.GameObject {
    constructor(position) {
        super(position.x, position.y, "╾");
    }
    onCollide(gameObject) {
        if (gameObject instanceof Player_1.Player) {
            gameObject.items.push(new Gun_1.Gun());
            this.destroy();
            globalThis.game.dialog = new DialogBox_1.DialogBox("Acabas de encontrar una ╾ ");
        }
    }
}
exports.GunGo = GunGo;


/***/ }),

/***/ "./src/classes/Listeners.ts":
/*!**********************************!*\
  !*** ./src/classes/Listeners.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Listeners = void 0;
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
class Listeners {
    constructor(game) {
        this.game = game;
    }
    init() {
        document.onkeydown = (e) => {
            this.checkKey(e, this.game);
        };
    }
    checkKey(e, game) {
        e = e || window.event;
        if (globalThis.game.dialog) {
            if (e.keyCode === constants_1.KeyCodes.SPACE) {
                globalThis.game.dialog = null;
            }
            return;
        }
        ;
        if (e.keyCode === constants_1.KeyCodes.ARROW_UP) {
            globalThis.game.player.up();
        }
        else if (e.keyCode === constants_1.KeyCodes.ARROW_DOWN) {
            globalThis.game.player.down();
        }
        else if (e.keyCode === constants_1.KeyCodes.ARROW_LEFT) {
            globalThis.game.player.left();
        }
        else if (e.keyCode === constants_1.KeyCodes.ARROW_RIGHT) {
            globalThis.game.player.right();
        }
        else if (e.keyCode === constants_1.KeyCodes.SPACE) {
            globalThis.game.player.attack();
        }
        else if (e.keyCode === constants_1.KeyCodes.V) {
            globalThis.game.player.changeItem();
        }
    }
}
exports.Listeners = Listeners;


/***/ }),

/***/ "./src/classes/Player.ts":
/*!*******************************!*\
  !*** ./src/classes/Player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Player = void 0;
const GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/classes/GameObject.ts");
class Player extends GameObject_1.GameObject {
    constructor(gameObject) {
        gameObject.colliderList = "┏━┓┃┣┫}[";
        super(gameObject.x, gameObject.y, gameObject.char, gameObject.colliderList);
        this.items = [];
        this.currentItemIndex = 0;
        this.life = 4;
    }
    get currentItem() {
        return this.items[this.currentItemIndex];
    }
    changeItem() {
        this.currentItemIndex =
            this.currentItemIndex + 1 > this.items.length - 1
                ? 0
                : this.currentItemIndex + 1;
    }
    attack() {
        this.currentItem.attack();
    }
}
exports.Player = Player;


/***/ }),

/***/ "./src/classes/Stage.ts":
/*!******************************!*\
  !*** ./src/classes/Stage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Stage = void 0;
class Stage {
    constructor(matrix, playerPosition) {
        this.matrix = this.addFrame(matrix);
        this.playerPosition = playerPosition;
        this.gameObjects = [];
    }
    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }
    getChar(x, y) {
        return this.matrix[y][x];
    }
    addFrame(matrix) {
        const length = matrix[0].length;
        matrix = matrix.map((x) => "║" + x.slice(0, length) + "║");
        matrix.unshift("╔" + "═".repeat(length) + "╗");
        matrix.push("╚" + "═".repeat(length) + "╝");
        return matrix;
    }
}
exports.Stage = Stage;


/***/ }),

/***/ "./src/classes/Weapons/BagBomb.ts":
/*!****************************************!*\
  !*** ./src/classes/Weapons/BagBomb.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BombBag = void 0;
const Bomb_1 = __webpack_require__(/*! ./Bullets/Bomb */ "./src/classes/Weapons/Bullets/Bomb.ts");
class BombBag {
    constructor() {
        this.name = "Bomb Bag";
        this.bullets = [];
    }
    attack() {
        const bullet = new Bomb_1.Bomb(globalThis.game.player.facing);
        bullet.init();
        globalThis.game.currentStage.addGameObject(bullet);
    }
}
exports.BombBag = BombBag;


/***/ }),

/***/ "./src/classes/Weapons/Bullets/Bomb.ts":
/*!*********************************************!*\
  !*** ./src/classes/Weapons/Bullets/Bomb.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bomb = void 0;
const bomb_1 = __webpack_require__(/*! ../../../animations/bomb */ "./src/animations/bomb.ts");
const GameObject_1 = __webpack_require__(/*! ../../GameObject */ "./src/classes/GameObject.ts");
const Bullet_1 = __webpack_require__(/*! ./Bullet */ "./src/classes/Weapons/Bullets/Bullet.ts");
class Bomb extends Bullet_1.Bullet {
    constructor(keyCode) {
        super(new GameObject_1.GameObject(globalThis.game.player.x, globalThis.game.player.y, "b", "┏━┓┃┣┫}["), keyCode, bomb_1.bombAnimations);
        this.hurt = true;
    }
}
exports.Bomb = Bomb;


/***/ }),

/***/ "./src/classes/Weapons/Bullets/Bullet.ts":
/*!***********************************************!*\
  !*** ./src/classes/Weapons/Bullets/Bullet.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Bullet = void 0;
const GameObject_1 = __webpack_require__(/*! ../../GameObject */ "./src/classes/GameObject.ts");
class Bullet extends GameObject_1.GameObject {
    constructor(gameObject, playerFacing, animations) {
        super(gameObject.x, gameObject.y, gameObject.char, gameObject.colliderList);
        this.animations = Object.assign({}, animations);
        this.hurt = false;
        this.animation = [...this.getAnimation(playerFacing)];
    }
    init() {
        const { x, y } = this;
        this.interval = window.setInterval(() => {
            const frame = this.animation.shift();
            if (!frame) {
                this.onCollide();
                return;
            }
            this.x = x + frame.x;
            this.y = y + frame.y;
            let position = { x: this.x, y: this.y };
            this.char = frame.char || this.char;
            this.hurt = frame.hurt || false;
            if (this.hurt) {
                const collideStage = this.willCollideStage(position);
                const collideGameObject = this.willCollideGameObject(position);
                if (collideStage)
                    this.onCollide();
                if (collideGameObject) {
                    this.onCollide();
                    collideGameObject.onCollide(this);
                }
            }
        }, 50);
    }
    getAnimation(playerFacing) {
        return [...this.animations[playerFacing]];
    }
    onCollide() {
        this.interval && clearInterval(this.interval);
        this.char = "×";
        setTimeout(() => {
            this.destroy();
        }, 50);
    }
}
exports.Bullet = Bullet;


/***/ }),

/***/ "./src/classes/Weapons/Bullets/GunBullet.ts":
/*!**************************************************!*\
  !*** ./src/classes/Weapons/Bullets/GunBullet.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GunBullet = void 0;
const gunBullet_1 = __webpack_require__(/*! ../../../animations/gunBullet */ "./src/animations/gunBullet.ts");
const GameObject_1 = __webpack_require__(/*! ../../GameObject */ "./src/classes/GameObject.ts");
const Bullet_1 = __webpack_require__(/*! ./Bullet */ "./src/classes/Weapons/Bullets/Bullet.ts");
class GunBullet extends Bullet_1.Bullet {
    constructor(keyCode) {
        super(new GameObject_1.GameObject(globalThis.game.player.x, globalThis.game.player.y, "-", "┏━┓┃┣┫}["), keyCode, gunBullet_1.gunBulletAnimations);
        this.hurt = true;
    }
}
exports.GunBullet = GunBullet;


/***/ }),

/***/ "./src/classes/Weapons/Gun.ts":
/*!************************************!*\
  !*** ./src/classes/Weapons/Gun.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Gun = void 0;
const GunBullet_1 = __webpack_require__(/*! ./Bullets/GunBullet */ "./src/classes/Weapons/Bullets/GunBullet.ts");
class Gun {
    constructor() {
        this.name = "Gun";
        this.bullets = [];
    }
    attack() {
        const bullet = new GunBullet_1.GunBullet(globalThis.game.player.facing);
        bullet.init();
        globalThis.game.currentStage.addGameObject(bullet);
    }
}
exports.Gun = Gun;


/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.KeyCodes = void 0;
var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["ARROW_UP"] = 38] = "ARROW_UP";
    KeyCodes[KeyCodes["ARROW_DOWN"] = 40] = "ARROW_DOWN";
    KeyCodes[KeyCodes["ARROW_LEFT"] = 37] = "ARROW_LEFT";
    KeyCodes[KeyCodes["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
    KeyCodes[KeyCodes["SPACE"] = 32] = "SPACE";
    KeyCodes[KeyCodes["V"] = 86] = "V";
    KeyCodes[KeyCodes["C"] = 67] = "C";
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));


/***/ }),

/***/ "./src/utils/sleep.ts":
/*!****************************!*\
  !*** ./src/utils/sleep.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sleep = void 0;
const sleep = (time) => new Promise((r) => setTimeout(r, time));
exports.sleep = sleep;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./classes/Game */ "./src/classes/Game.ts");
const GameObject_1 = __webpack_require__(/*! ./classes/GameObject */ "./src/classes/GameObject.ts");
const GunGO_1 = __webpack_require__(/*! ./classes/GameObjects/GunGO */ "./src/classes/GameObjects/GunGO.ts");
const BombBagGO_1 = __webpack_require__(/*! ./classes/GameObjects/BombBagGO */ "./src/classes/GameObjects/BombBagGO.ts");
const Listeners_1 = __webpack_require__(/*! ./classes/Listeners */ "./src/classes/Listeners.ts");
const Player_1 = __webpack_require__(/*! ./classes/Player */ "./src/classes/Player.ts");
const Stage_1 = __webpack_require__(/*! ./classes/Stage */ "./src/classes/Stage.ts");
const Enemy_1 = __webpack_require__(/*! ./classes/Enemy */ "./src/classes/Enemy.ts");
const stage = [
    "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                                       ",
    "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┣━━━━━━━━━━━━┓   ┏━━━━━━━━━━━━┫                                                       ",
    "┗┉┉┉┉┉┉┉┉┉┉┉┉┛   ┗┉┉┉┉┉┉┉┉┉┉┉┉┛      ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                  ",
    "                                     ┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                  ",
    "                                     ┃           ┏━━━━━━┓          ┃                  ",
    "┏━━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━┓                 h┃      ┃Ó         ┃                  ",
    "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┚  ┖┉┉┉┉┉┉┉┉┉┉┉┉┫                  ┣━━━━━━┫                             ",
    "┃                             ┃      ┃                             ┃                  ",
    "┃                             ┃      ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫                  ",
    "┃                             ┃      ┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                  ",
    "┃                             ┃                                                       ",
    "┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫                                                       ",
    "┗┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┛                                                       ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                                                                                      ",
    "                       ( ͡° ͜ʖ ͡°)                                                      ",
    "                                                                                      ",
];
const player = new Player_1.Player(new GameObject_1.GameObject(3, 3, "O"));
globalThis.game = new Game_1.Game("game", 40, 20, player, new Stage_1.Stage(stage, { x: 1, y: 1 }));
globalThis.game.currentStage.addGameObject(new GunGO_1.GunGo({ x: 10, y: 6 }));
globalThis.game.currentStage.addGameObject(new BombBagGO_1.BombBagGo({ x: 16, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 40, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 41, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 42, y: 7 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 40, y: 3 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 41, y: 4 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 42, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 43, y: 7 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 41, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 42, y: 5 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 40, y: 6 }));
globalThis.game.currentStage.addGameObject(new Enemy_1.Enemy({ x: 40, y: 4 }));
const listener = new Listeners_1.Listeners(globalThis.game);
listener.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCO0lBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVyxzQkFBYyxHQUF1QztJQUM5RCxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVztJQUNoQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYztDQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZGRiw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBa0I7SUFDL0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDakMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVywyQkFBbUIsR0FBdUM7SUFDbkUsQ0FBQyxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVc7SUFDaEMsQ0FBQyxvQkFBUSxDQUFD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QUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLE1BQU0sUUFBUSxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvYW5pbWF0aW9ucy9ib21iLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2FuaW1hdGlvbnMvZ3VuQnVsbGV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvQVN0YXIvQVN0YXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9BU3Rhci9Ob2RlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvRGlhbG9nQm94LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvRW5lbXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL0JvbWJCYWdHTy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL0d1bkdPLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvTGlzdGVuZXJzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvUGxheWVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0JhZ0JvbWIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0J1bGxldHMvQm9tYi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0J1bGxldHMvR3VuQnVsbGV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9HdW4udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL3V0aWxzL3NsZWVwLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bGxldEZyYW1lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQnVsbGV0RnJhbWVcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCByaWdodEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IC0xLCB4OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLiipdcIiB9LFxuICAgIHsgeTogMCwgeDogOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBkb3duQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogLTEsIHk6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB4OiAwLCB5OiA5LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IHVwQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogLTEsIHk6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLiipdcIiB9LFxuICAgIHsgeDogMCwgeTogLTksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgbGVmdEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IC0xLCB4OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IDAsIHg6IC05LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBib21iQW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfSA9IHtcbiAgICBbS2V5Q29kZXMuQVJST1dfVVBdOiB1cEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfRE9XTl06IGRvd25BbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0xFRlRdOiBsZWZ0QW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19SSUdIVF06IHJpZ2h0QW5pbWF0aW9uLFxufTsiLCJpbXBvcnQgeyBCdWxsZXRGcmFtZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0J1bGxldEZyYW1lXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcblxuY29uc3QgcmlnaHRBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB5OiAwLCB4OiAxLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAyLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAzLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA0LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA1LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA2LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA3LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA4LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IHVwQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogMCwgeTogLTEsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiAtMiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC00LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC03LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBkb3duQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogMCwgeTogMSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDIsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiAzLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNCwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDUsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA2LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNywgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgbGVmdEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IDAsIHg6IC0xLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtMiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC00LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC03LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ3VuQnVsbGV0QW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfSA9IHtcbiAgICBbS2V5Q29kZXMuQVJST1dfVVBdOiB1cEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfRE9XTl06IGRvd25BbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0xFRlRdOiBsZWZ0QW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19SSUdIVF06IHJpZ2h0QW5pbWF0aW9uLFxufTsiLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9Ob2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBBU3RhciB7XG4gIG1hdHJpeDogc3RyaW5nW107XG4gIHNlYXJjaGluZzogYm9vbGVhbjtcbiAgc3RhcnQ6IE5vZGU7XG4gIGVuZDogTm9kZTtcbiAgcHVibGljTGlzdDogTm9kZVtdO1xuICBwcml2YXRlTGlzdDogTm9kZVtdO1xuICBwYXRoOiBHYW1lT2JqZWN0UG9zaXRpb25bXTtcbiAgY29uc3RydWN0b3Ioc3RhcnQ6IE5vZGUsIGVuZDogTm9kZSwgbWF0cml4OiBzdHJpbmdbXSkge1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICB0aGlzLmVuZCA9IGVuZDtcbiAgICB0aGlzLnB1YmxpY0xpc3QgPSBbdGhpcy5zdGFydF07XG4gICAgdGhpcy5wcml2YXRlTGlzdCA9IFtdO1xuICAgIHRoaXMuc2VhcmNoaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnBhdGggPSBbXTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgICBsZXQgY291bnQgPSAxMDAwMDtcbiAgICB3aGlsZSAodGhpcy5zZWFyY2hpbmcgfHwgY291bnQgPCAwKSB7XG4gICAgICBsZXQgYmVzdCA9IHRoaXMuZ2V0TWluaW11bSh0aGlzLnB1YmxpY0xpc3QpIHx8IHRoaXMuc3RhcnQ7XG4gICAgICB0aGlzLmdldENoaWxkcmVuKGJlc3QpO1xuICAgICAgdGhpcy5zd2l0Y2hOb2RlKGJlc3QpO1xuICAgICAgY291bnQtLTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUGF0aCgpO1xuICB9XG5cbiAgZ2V0TWluaW11bShsaXN0OiBOb2RlW10pIHtcbiAgICBpZiAobGlzdCkge1xuICAgICAgbGV0IGJlc3QgPSBsaXN0LnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICByZXR1cm4gcHJldi5mICYmIGN1cnIuZiAmJiBwcmV2LmYgPCBjdXJyLmYgPyBwcmV2IDogY3VycjtcbiAgICAgIH0pO1xuICAgICAgbGV0IGJlc3RMaXN0ID0gbGlzdC5maWx0ZXIoKG5vZGUpID0+IG5vZGUuZiA9PT0gYmVzdC5mKTtcbiAgICAgIGJlc3QgPSBiZXN0TGlzdC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYuaCAmJiBjdXJyLmggJiYgcHJldi5oIDwgY3Vyci5oID8gcHJldiA6IGN1cnI7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKG5vZGU6IE5vZGUpOiBOb2RlW10ge1xuICAgIGxldCBsaXN0OiBOb2RlW10gPSBbXTtcbiAgICBsZXQgb3B0aW9ucyA9IFtcbiAgICAgIHsgeDogbm9kZS54LCB5OiBub2RlLnkgLSAxIH0sIC8vdXBcbiAgICAgIHsgeDogbm9kZS54ICsgMSwgeTogbm9kZS55IH0sIC8vcmlnaHRcbiAgICAgIHsgeDogbm9kZS54LCB5OiBub2RlLnkgKyAxIH0sIC8vZG93blxuICAgICAgeyB4OiBub2RlLnggLSAxLCB5OiBub2RlLnkgfSwgLy9sZWZ0XG4gICAgICAvLyB7IHg6IG5vZGUueCArIDEsIHk6IG5vZGUueSAtIDF9LCAvL3VwIHJpZ2h0XG4gICAgICAvLyB7IHg6IG5vZGUueCArIDEsIHk6IG5vZGUueSArIDF9LCAvL2Rvd24gcmlnaHRcbiAgICAgIC8vIHsgeDogbm9kZS54IC0gMSwgeTogbm9kZS55ICsgMX0sIC8vIGRvd24gbGVmdFxuICAgICAgLy8geyB4OiBub2RlLnggLSAxLCB5OiBub2RlLnkgLSAxfSwgLy91cCBsZWZ0XG4gICAgXTtcbiAgICBvcHRpb25zLmZvckVhY2goKHBvc3Rpb24pID0+IHtcbiAgICAgIGxldCBuZXdOb2RlOiBOb2RlIHwgbnVsbDtcbiAgICAgIGxldCBwcml2YXRlTm9kZSA9IHRoaXMuZmluZEluTGlzdCh0aGlzLnByaXZhdGVMaXN0LCBwb3N0aW9uKTtcbiAgICAgIGlmICghcHJpdmF0ZU5vZGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhJbkxpc3QodGhpcy5wdWJsaWNMaXN0LCBwb3N0aW9uKTtcbiAgICAgICAgbGV0IHB1YmxpY05vZGUgPSB0aGlzLnB1YmxpY0xpc3RbaW5kZXhdO1xuICAgICAgICBpZiAocHVibGljTm9kZSkge1xuICAgICAgICAgIGlmIChub2RlLmcgKyAxMCA8IHB1YmxpY05vZGUuZykge1xuICAgICAgICAgICAgcHVibGljTm9kZS5nID0gbm9kZS5nICsgMTA7XG4gICAgICAgICAgICBwdWJsaWNOb2RlLmYgPSBwdWJsaWNOb2RlLmcgKyBwdWJsaWNOb2RlLmg7XG4gICAgICAgICAgICBwdWJsaWNOb2RlLnBhcmVudCA9IG5vZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucHVibGljTGlzdFtpbmRleF0gPSBwdWJsaWNOb2RlO1xuICAgICAgICAgIGxpc3QucHVzaChwdWJsaWNOb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdOb2RlID0gdGhpcy52YWxpZGF0ZUFuZENyZWF0ZShwb3N0aW9uLCBub2RlKTtcbiAgICAgICAgICBpZiAobmV3Tm9kZSkge1xuICAgICAgICAgICAgbmV3Tm9kZS5nID0gbm9kZS5nICsgMTA7XG4gICAgICAgICAgICBuZXdOb2RlLmggPSB0aGlzLm1hbmhhdGhhbihuZXdOb2RlLCB0aGlzLmVuZCk7XG4gICAgICAgICAgICBuZXdOb2RlLmYgPSBuZXdOb2RlLmcgKyBuZXdOb2RlLmg7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY0xpc3QucHVzaChuZXdOb2RlKTtcbiAgICAgICAgICAgIGxpc3QucHVzaChuZXdOb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdDtcbiAgfVxuXG4gIG1hbmhhdGhhbihzdGFydDogTm9kZSwgZW5kOiBOb2RlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKGVuZC55IC0gc3RhcnQueSArIChlbmQueCArIHN0YXJ0LnkpKSAqIDEwO1xuICB9XG5cbiAgdmFsaWRhdGVBbmRDcmVhdGUocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbiwgbm9kZTogTm9kZSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgY2hhciA9IHRoaXMubWF0cml4W3Bvc2l0aW9uLnldW3Bvc2l0aW9uLnhdO1xuICAgICAgaWYgKGNoYXIgIT09IFwiIFwiIHx8IGNoYXIgPT0gdW5kZWZpbmVkKSB0aHJvdyBcImNoYXIgZXMgXCIgKyBjaGFyO1xuICAgICAgaWYgKHBvc2l0aW9uLnggPT09IHRoaXMuZW5kLnggJiYgcG9zaXRpb24ueSA9PSB0aGlzLmVuZC55KSB7XG4gICAgICAgIHRoaXMuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZW5kID0gbmV3IE5vZGUocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbm9kZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IE5vZGUocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgbm9kZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBhcmVQb3NpdGlvbihub2RlOiBOb2RlLCBwb3N0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICByZXR1cm4gbm9kZS54ID09PSBwb3N0aW9uLnggJiYgbm9kZS55ID09PSBwb3N0aW9uLnk7XG4gIH1cblxuICBmaW5kSW5MaXN0KGxpc3Q6IE5vZGVbXSwgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHJldHVybiBsaXN0LmZpbmQoKG5vZGUpID0+IHRoaXMuY29tcGFyZVBvc2l0aW9uKG5vZGUsIHBvc2l0aW9uKSk7XG4gIH1cblxuICBmaW5kSW5kZXhJbkxpc3QobGlzdDogTm9kZVtdLCBwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGxpc3QuZmluZEluZGV4KChub2RlKSA9PiB0aGlzLmNvbXBhcmVQb3NpdGlvbihub2RlLCBwb3NpdGlvbikpO1xuICB9XG5cbiAgc3dpdGNoTm9kZShwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5maW5kSW5kZXhJbkxpc3QodGhpcy5wdWJsaWNMaXN0LCBwb3NpdGlvbik7XG4gICAgbGV0IG5vZGUgPSB0aGlzLnB1YmxpY0xpc3RbaW5kZXhdO1xuICAgIGlmIChub2RlID09IHVuZGVmaW5lZCB8fCBub2RlID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLnByaXZhdGVMaXN0LnB1c2gobm9kZSk7XG4gICAgdGhpcy5wdWJsaWNMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBjcmVhdGVQYXRoKCkge1xuICAgIGxldCBsaXN0OiBHYW1lT2JqZWN0UG9zaXRpb25bXSA9IFtdO1xuICAgIGxldCBub2RlID0gdGhpcy5lbmQ7XG4gICAgd2hpbGUgKG5vZGUucGFyZW50KSB7XG4gICAgICBsaXN0LnB1c2goeyB4OiBub2RlLngsIHk6IG5vZGUueSB9KTtcbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHBhcmVudDogTm9kZSB8IG51bGw7XG4gICAgZzogbnVtYmVyO1xuICAgIGg6IG51bWJlcjtcbiAgICBmOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcGFyZW50OiBOb2RlIHwgbnVsbCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xuICAgICAgICB0aGlzLmcgPSAwO1xuICAgICAgICB0aGlzLmggPSAwO1xuICAgICAgICB0aGlzLmYgPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRGlhbG9nQm94IHtcbiAgcHVibGljIG1hdHJpeDogc3RyaW5nW107XG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMubWF0cml4ID0gW107XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLndpZHRoID0gZ2xvYmFsVGhpcy5nYW1lLndpZHRoO1xuICAgIHRoaXMuaW5pdCgpXG5cbiAgfVxuXG4gIGdldERpYWxvZyhsYXN0U2NyZWVuOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHh5UG9pbnQgPSB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IGxhc3RTY3JlZW4ubGVuZ3RoLSB0aGlzLm1hdHJpeC5sZW5ndGgsXG4gICAgICB9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsYXN0U2NyZWVuW3h5UG9pbnQueStpXSA9IHRoaXMubWF0cml4W2ldICAgICAgICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYXN0U2NyZWVuO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBkaWFsb2c6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcGFkZGluZyA9IDA7XG4gICAgY29uc3QgcGFkZGluZ1dvcmQgPSBcIiBcIi5yZXBlYXQoKHRoaXMud2lkdGggLSB0aGlzLnRleHQubGVuZ3RoKSAvIDIpO1xuICAgIGRpYWxvZy5wdXNoKGDilZQke1wi4pWQXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWXYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7cGFkZGluZ1dvcmR9JHt0aGlzLnRleHR9JHtwYWRkaW5nV29yZH3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWaJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVnWApO1xuICAgIHRoaXMubWF0cml4ID0gZGlhbG9nO1xuICAgIGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2cgPSB0aGlzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzbGVlcCB9IGZyb20gXCIuLi91dGlscy9zbGVlcFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBBU3RhciB9IGZyb20gXCIuL0FTdGFyL0FTdGFyXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vQVN0YXIvTm9kZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vV2VhcG9ucy9CdWxsZXRzL0J1bGxldFwiO1xuXG5lbnVtIEZvbGxvd01vZGUge1xuICBcIkFTdGFyXCIsXG4gIFwiQ2hlY2tpbmdEaXJlY3RcIixcbiAgXCJEaXJlY3RGb2xsb3dcIixcbn1cblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGZvbGxvd01vZGU6IEZvbGxvd01vZGU7XG4gIHBhdGg6IEdhbWVPYmplY3RQb3NpdGlvbltdO1xuICBpc0FuaW1hdGluZzogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwiS1wiKTtcbiAgICB0aGlzLmZvbGxvd01vZGUgPSBGb2xsb3dNb2RlLkFTdGFyO1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBhdGggPSBbXTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5mb2xsb3dNb2RlID09PSBGb2xsb3dNb2RlLkFTdGFyKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHRoaXMuZ2V0UGF0aCgpO1xuICAgICAgICBpZighdGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9sbG93TW9kZSA9IEZvbGxvd01vZGUuQ2hlY2tpbmdEaXJlY3Q7XG4gICAgICB9XG4gICAgICBsZXQge3gseX0gPSB0aGlzO1xuICAgICAgbGV0IHJheSA9IHRoaXMuZ2V0UmF5Q2FzdGluZyhcbiAgICAgICAgey4uLnsgeCwgeSB9fSxcbiAgICAgICAgeyB4OiBnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIHk6IGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSB9LFxuICAgICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeFxuICAgICAgKTtcbiAgICAgIGlmIChyYXkucmVwbGFjZUFsbChcIiBcIiwgXCJcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuZm9sbG93TW9kZSA9IEZvbGxvd01vZGUuRGlyZWN0Rm9sbG93O1xuICAgICAgICB0aGlzLnBhdGggPSBbXVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5mb2xsb3dNb2RlID0gRm9sbG93TW9kZS5BU3RhcjtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5mb2xsb3dNb2RlID09PSBGb2xsb3dNb2RlLkRpcmVjdEZvbGxvdykge1xuICAgICAgICBsZXQgeyB4LCB5IH0gPSBnbG9iYWxUaGlzLmdhbWUucGxheWVyO1xuICAgICAgICB0aGlzLnggPSB0aGlzLnggPT09IHggPyB0aGlzLnggOiB0aGlzLnggPiB4ID8gdGhpcy54IC0gMSA6IHRoaXMueCArIDE7XG4gICAgICAgIHRoaXMueSA9IHRoaXMueSA9PT0geSA/IHRoaXMueSA6IHRoaXMueSA+IHkgPyB0aGlzLnkgLSAxIDogdGhpcy55ICsgMTtcbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5saWZlLS07XG4gICAgfVxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgQnVsbGV0KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhbmltYXRlKCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIHdoaWxlICh0aGlzLnBhdGgubGVuZ3RoICYmIHRoaXMuZm9sbG93TW9kZSAhPT0gRm9sbG93TW9kZS5EaXJlY3RGb2xsb3cpIHtcbiAgICAgIGxldCBzdGVwID0gdGhpcy5wYXRoLnBvcCgpO1xuICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgdGhpcy54ID0gc3RlcC54O1xuICAgICAgICB0aGlzLnkgPSBzdGVwLnk7XG4gICAgICB9XG4gICAgICBhd2FpdCBzbGVlcCg1MDApO1xuICAgIH1cbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGNvbnN0IGFzdGFyID0gbmV3IEFTdGFyKFxuICAgICAgbmV3IE5vZGUodGhpcy54LCB0aGlzLnksIG51bGwpLFxuICAgICAgbmV3IE5vZGUoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci54LCBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnksIG51bGwpLFxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5tYXRyaXhcbiAgICApO1xuICAgIHJldHVybiBhc3Rhci5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRSYXlDYXN0aW5nKFxuICAgIHN0YXJ0OiBHYW1lT2JqZWN0UG9zaXRpb24sXG4gICAgZW5kOiBHYW1lT2JqZWN0UG9zaXRpb24sXG4gICAgbWF0cml4OiBzdHJpbmdbXVxuICApIHtcbiAgICBsZXQgcmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBhY3R1YWwgPSB7Li4uc3RhcnR9XG4gICAgd2hpbGUgKGFjdHVhbC54ICE9PSBlbmQueCB8fCBhY3R1YWwueSAhPT0gZW5kLnkpIHtcbiAgICAgIGFjdHVhbC54ID1cbiAgICAgICAgYWN0dWFsLnggPT09IGVuZC54XG4gICAgICAgICAgPyBhY3R1YWwueFxuICAgICAgICAgIDogYWN0dWFsLnggPiBlbmQueFxuICAgICAgICAgID8gYWN0dWFsLnggLSAxXG4gICAgICAgICAgOiBhY3R1YWwueCArIDE7XG4gICAgICBhY3R1YWwueSA9XG4gICAgICAgIGFjdHVhbC55ID09PSBlbmQueVxuICAgICAgICAgID8gYWN0dWFsLnlcbiAgICAgICAgICA6IGFjdHVhbC55ID4gZW5kLnlcbiAgICAgICAgICA/IGFjdHVhbC55IC0gMVxuICAgICAgICAgIDogYWN0dWFsLnkgKyAxO1xuICAgICAgcmF5LnB1c2gobWF0cml4W2FjdHVhbC55XVthY3R1YWwueF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmF5LmpvaW4oXCJcIik7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL1N0YWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcmVhZG9ubHkgbWFpbkVsZW1lbnRJZDogc3RyaW5nO1xuICByZWFkb25seSBwcmVFbGVtZW50OiBIVE1MUHJlRWxlbWVudDtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGhhbGZXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBoYWxmSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHBsYXllcjogUGxheWVyO1xuICBwdWJsaWMgY3VycmVudFN0YWdlOiBTdGFnZTtcbiAgcHVibGljIGRpYWxvZzogRGlhbG9nQm94IHwgbnVsbDtcbiAgI2xhc3RTY3JlZW46IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1haW5FbGVtZW50SWQ6IHN0cmluZyxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHBsYXllcjogUGxheWVyLFxuICAgIHN0YWdlOiBTdGFnZVxuICApIHtcbiAgICB0aGlzLm1haW5FbGVtZW50SWQgPSBtYWluRWxlbWVudElkO1xuICAgIHRoaXMucHJlRWxlbWVudCA9IDxIVE1MUHJlRWxlbWVudD4oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5FbGVtZW50SWQpXG4gICAgKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5oYWxmV2lkdGggPSB3aWR0aCAvIDI7XG4gICAgdGhpcy5oYWxmSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMuI2xhc3RTY3JlZW4gPSBbXTtcbiAgICB0aGlzLmRpYWxvZyA9IG51bGw7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSwgNDAgLyAxMDAwKTtcbiAgfVxuXG4gIHJlcGxhY2VBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlciwgcmVwbGFjZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN0ci5zdWJzdHIoMCwgaW5kZXgpICtcbiAgICAgIHJlcGxhY2VtZW50ICtcbiAgICAgIHN0ci5zdWJzdHIoaW5kZXggKyByZXBsYWNlbWVudC5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICB0aGlzLiNsYXN0U2NyZWVuID0gdGhpcy5kaWFsb2cuZ2V0RGlhbG9nKHRoaXMuI2xhc3RTY3JlZW4pO1xuICAgICAgdGhpcy5wcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuI2xhc3RTY3JlZW4uam9pbihcIlxcblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmF3U3RhZ2UoKTtcbiAgfVxuXG4gIGRyYXdTdGFnZSgpIHtcbiAgICBsZXQgYXJyYXkgPSBbLi4udGhpcy5jdXJyZW50U3RhZ2UubWF0cml4XTtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5mb3JFYWNoKChnbykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yZXBsYWNlQXQoYXJyYXlbZ28ueV0sIGdvLngsIGdvLmNoYXIpO1xuICAgICAgYXJyYXlbZ28ueV0gPSByb3c7XG4gICAgfSk7XG4gICAgY29uc3QgeCA9IHRoaXMucmVwbGFjZUF0KFxuICAgICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0sXG4gICAgICB0aGlzLnBsYXllci54LFxuICAgICAgdGhpcy5wbGF5ZXIuY2hhclxuICAgICk7XG4gICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0gPSB4O1xuICAgIC8vIHRyaW0gYXJyYXkgYnkgcGxheWVyIHBvc2l0aW9uXG4gICAgY29uc3QgeVJhbmdlID1cbiAgICAgIHRoaXMucGxheWVyLnkgPCB0aGlzLmhhbGZIZWlnaHRcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSA+IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGFsZkhlaWdodFxuICAgICAgICA/IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSAtIHRoaXMuaGFsZkhlaWdodDtcblxuICAgIGNvbnN0IHhSYW5nZSA9XG4gICAgICB0aGlzLnBsYXllci54IDwgdGhpcy5oYWxmV2lkdGhcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueCA+IGFycmF5WzBdLmxlbmd0aCAtIHRoaXMuaGFsZldpZHRoXG4gICAgICAgID8gYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy53aWR0aFxuICAgICAgICA6IHRoaXMucGxheWVyLnggLSB0aGlzLmhhbGZXaWR0aDtcbiAgICB0aGlzLiNsYXN0U2NyZWVuID0gYXJyYXlcbiAgICAgIC5zbGljZSh5UmFuZ2UsIHlSYW5nZSArIHRoaXMuaGVpZ2h0KVxuICAgICAgLm1hcCgocm93KSA9PiByb3cuc3Vic3RyaW5nKHhSYW5nZSwgeFJhbmdlICsgdGhpcy53aWR0aCkpO1xuICAgIHRoaXMuI2xhc3RTY3JlZW4udW5zaGlmdCh0aGlzLmluZm9CYXIoKSk7XG4gICAgdGhpcy5wcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuI2xhc3RTY3JlZW4uam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGluZm9CYXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWFwb24gPSB0aGlzLnBsYXllci5jdXJyZW50SXRlbT8ubmFtZTtcbiAgICByZXR1cm4gYExpZmU6JHtcIiDimaVcIi5yZXBlYXQodGhpcy5wbGF5ZXIubGlmZSl9IC0gV2VhcG9uOiAke1xuICAgICAgd2VhcG9uIHx8IFwibnVsbFwiXG4gICAgfWA7XG4gIH1cblxuICBjcmVhdGVEaWFsb2codGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlhbG9nOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuICAgIGNvbnN0IHBhZGRpbmdXb3JkID0gXCIgXCIucmVwZWF0KCh0aGlzLndpZHRoIC0gdGV4dC5sZW5ndGgpIC8gMik7XG4gICAgZGlhbG9nLnB1c2goYOKVlCR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZdgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtwYWRkaW5nV29yZH0ke3RleHR9JHtwYWRkaW5nV29yZH3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWaJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVnWApO1xuICAgIHJldHVybiBkaWFsb2c7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5cbmNvbnN0IEdsb2JhbENvbGxpZGVycyA9IFwi4pWU4pWQ4pWQ4pWX4pWa4pWd4pWRXCI7XG5cbmludGVyZmFjZSBHYW1lT2JqZWN0SW50ZXJmYWNlIHtcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNoYXI6IHN0cmluZztcbiAgY29sbGlkZXJMaXN0OiBzdHJpbmc7XG4gIGZhY2luZzogS2V5Q29kZXM7XG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBHYW1lT2JqZWN0SW50ZXJmYWNlIHtcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgcHVibGljIHg6IG51bWJlcjtcbiAgcHVibGljIHk6IG51bWJlcjtcbiAgcHVibGljIGNoYXI6IHN0cmluZztcbiAgcHVibGljIGNvbGxpZGVyTGlzdDogc3RyaW5nO1xuICBwdWJsaWMgZmFjaW5nOiBLZXlDb2RlcztcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcjogc3RyaW5nLCBjb2xsaWRlckxpc3Q6IHN0cmluZyA9IFwiXCIpIHtcbiAgICB0aGlzLmlkID0gKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNoYXIgPSBjaGFyO1xuICAgIHRoaXMuY29sbGlkZXJMaXN0ID0gY29sbGlkZXJMaXN0ICsgR2xvYmFsQ29sbGlkZXJzO1xuICAgIHRoaXMuZmFjaW5nID0gS2V5Q29kZXMuQVJST1dfUklHSFQ7XG4gIH1cblxuICB3aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlckxpc3QuaW5jbHVkZXMoXG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdldENoYXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcbiAgICApO1xuICB9XG5cbiAgd2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pOiBHYW1lT2JqZWN0IHwgbnVsbCB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmluZChcbiAgICAgICAgKGdvKSA9PlxuICAgICAgICAgIGdvLnggPT09IHBvc2l0aW9uLnggJiZcbiAgICAgICAgICBnby55ID09PSBwb3NpdGlvbi55ICYmXG4gICAgICAgICAgZ28uaWQgIT09IHRoaXMuaWQgJiZcbiAgICAgICAgICBnby5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBjb2xsaWRlKGFycm93OiBLZXlDb2Rlcykge1xuICAgIGxldCBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICBsZXQgY29sbGlkZUdhbWVPYmplY3Q6IEdhbWVPYmplY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbjtcbiAgICBzd2l0Y2ggKGFycm93KSB7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX1VQOlxuICAgICAgICBwb3NpdGlvbiA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgLSAxIH07XG4gICAgICAgIGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZXMuQVJST1dfRE9XTjpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55ICsgMSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX0xFRlQ6XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLnggLSAxLCB5OiB0aGlzLnkgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19SSUdIVDpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCArIDEsIHk6IHRoaXMueSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29sbGlkZUdhbWVPYmplY3QpIHtcbiAgICAgIHRoaXMub25Db2xsaWRlKGNvbGxpZGVHYW1lT2JqZWN0KTtcbiAgICAgIGNvbGxpZGVHYW1lT2JqZWN0Lm9uQ29sbGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGlkZVN0YWdlIHx8IGNvbGxpZGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHVwKCkge1xuICAgIHRoaXMuZmFjaW5nID0gS2V5Q29kZXMuQVJST1dfVVA7XG4gICAgaWYgKHRoaXMueSAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX1VQKSkge1xuICAgICAgdGhpcy55IC09IDE7XG4gICAgfVxuICB9XG5cbiAgZG93bigpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0RPV047XG4gICAgaWYgKFxuICAgICAgdGhpcy55ICsgMSA8IGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UubWF0cml4Lmxlbmd0aCAmJlxuICAgICAgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19ET1dOKVxuICAgICkge1xuICAgICAgdGhpcy55ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0xFRlQ7XG4gICAgaWYgKHRoaXMueCAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX0xFRlQpKSB7XG4gICAgICB0aGlzLnggLT0gMTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICAgIGlmIChcbiAgICAgIHRoaXMueCArIDEgPCBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeFswXS5sZW5ndGggJiZcbiAgICAgICF0aGlzLmNvbGxpZGUoS2V5Q29kZXMuQVJST1dfUklHSFQpXG4gICAgKSB7XG4gICAgICB0aGlzLnggKz0gMTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMgPVxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5maWx0ZXIoXG4gICAgICAgIChnbykgPT4gZ28uaWQgIT09IHRoaXMuaWRcbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSBcIi4uL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgeyBCb21iQmFnIH0gZnJvbSBcIi4uL1dlYXBvbnMvQmFnQm9tYlwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBCb21iQmFnR28gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwi4piMXCIpO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5pdGVtcy5wdXNoKG5ldyBCb21iQmFnKCkpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gbmV3IERpYWxvZ0JveChcIkFjYWJhcyBkZSBlbmNvbnRyYXIgdW5hIOKYjCBcIilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSBcIi4uL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vV2VhcG9ucy9HdW5cIjtcblxuZXhwb3J0IGNsYXNzIEd1bkdvIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIuKVvlwiKTtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QuaXRlbXMucHVzaChuZXcgR3VuKCkpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gbmV3IERpYWxvZ0JveChcIkFjYWJhcyBkZSBlbmNvbnRyYXIgdW5hIOKVviBcIilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIExpc3RlbmVycyB7XG4gIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGhpcy5jaGVja0tleShlLCB0aGlzLmdhbWUpO1xuICAgIH07XG4gIH1cblxuICBjaGVja0tleShlOiBLZXlib2FyZEV2ZW50LCBnYW1lOiBHYW1lKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmKGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2cpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICAgIGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2cgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19VUCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci51cCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19ET1dOKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmRvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfTEVGVCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5sZWZ0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX1JJR0hUKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnJpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmF0dGFjaygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5WKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmNoYW5nZUl0ZW0oKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmdhbWUuZHJhdygpO1NcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2VhcG9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvV2VhcG9uXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJvbWJCYWcgfSBmcm9tIFwiLi9XZWFwb25zL0JhZ0JvbWJcIjtcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIGl0ZW1zOiBXZWFwb25JbnRlcmZhY2VbXTtcbiAgcHVibGljIGN1cnJlbnRJdGVtSW5kZXg7XG4gIHB1YmxpYyBsaWZlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0ID0gXCLilI/ilIHilJPilIPilKPilKt9W1wiO1xuICAgIHN1cGVyKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LmNoYXIsIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0KTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgICB0aGlzLmxpZmUgPSA0O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuY3VycmVudEl0ZW1JbmRleF07XG4gIH1cblxuICBjaGFuZ2VJdGVtKCkge1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9XG4gICAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyAxID4gdGhpcy5pdGVtcy5sZW5ndGggLSAxXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIDE7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5jdXJyZW50SXRlbS5hdHRhY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2Uge1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmdbXTtcbiAgcHVibGljIGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PjtcbiAgcHJpdmF0ZSBwbGF5ZXJQb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKG1hdHJpeDogc3RyaW5nW10sIHBsYXllclBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMuYWRkRnJhbWUobWF0cml4KTtcbiAgICB0aGlzLnBsYXllclBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICB9XG5cbiAgYWRkR2FtZU9iamVjdChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2goZ2FtZU9iamVjdCk7XG4gIH1cblxuICBnZXRDaGFyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4W3ldW3hdO1xuICB9XG5cbiAgYWRkRnJhbWUobWF0cml4OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBsZW5ndGggPSBtYXRyaXhbMF0ubGVuZ3RoO1xuICAgIG1hdHJpeCA9IG1hdHJpeC5tYXAoKHgpID0+IFwi4pWRXCIgKyB4LnNsaWNlKDAsIGxlbmd0aCkgKyBcIuKVkVwiKTtcbiAgICBtYXRyaXgudW5zaGlmdChcIuKVlFwiICsgXCLilZBcIi5yZXBlYXQobGVuZ3RoKSArIFwi4pWXXCIpO1xuICAgIG1hdHJpeC5wdXNoKFwi4pWaXCIgKyBcIuKVkFwiLnJlcGVhdChsZW5ndGgpICsgXCLilZ1cIik7XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxufVxuXG4vLyDilZTilZDilZDilZfilZrilZ3ilZFcbiIsImltcG9ydCB7IFdlYXBvbkludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1dlYXBvblwiO1xuaW1wb3J0IHsgQm9tYiB9IGZyb20gXCIuL0J1bGxldHMvQm9tYlwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYkJhZyBpbXBsZW1lbnRzIFdlYXBvbkludGVyZmFjZSB7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBidWxsZXRzOiBCb21iW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJCb21iIEJhZ1wiO1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBCb21iKGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIuZmFjaW5nKTtcbiAgICBidWxsZXQuaW5pdCgpO1xuICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChidWxsZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBib21iQW5pbWF0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9hbmltYXRpb25zL2JvbWJcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi9CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBCdWxsZXQge1xuICAgIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Q29kZTogS2V5Q29kZXMpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBuZXcgR2FtZU9iamVjdChnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgXCJiXCIsIFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIiksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgYm9tYkFuaW1hdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5odXJ0ID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQnVsbGV0RnJhbWUgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9CdWxsZXRGcmFtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuICBwcml2YXRlIGludGVydmFsPzogbnVtYmVyO1xuICByZWFkb25seSBhbmltYXRpb246IEJ1bGxldEZyYW1lW107XG4gIHJlYWRvbmx5IGFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZ2FtZU9iamVjdDogR2FtZU9iamVjdCxcbiAgICBwbGF5ZXJGYWNpbmc6IEtleUNvZGVzLFxuICAgIGFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH1cbiAgKSB7XG4gICAgc3VwZXIoZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnksIGdhbWVPYmplY3QuY2hhciwgZ2FtZU9iamVjdC5jb2xsaWRlckxpc3QpO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHsgLi4uYW5pbWF0aW9ucyB9O1xuICAgIHRoaXMuaHVydCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gWy4uLnRoaXMuZ2V0QW5pbWF0aW9uKHBsYXllckZhY2luZyldO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXM7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMuYW5pbWF0aW9uLnNoaWZ0KCk7XG4gICAgICBpZiAoIWZyYW1lKSB7XG4gICAgICAgIHRoaXMub25Db2xsaWRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0geCArIGZyYW1lLng7XG4gICAgICB0aGlzLnkgPSB5ICsgZnJhbWUueTtcbiAgICAgIGxldCBwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgICAgdGhpcy5jaGFyID0gZnJhbWUuY2hhciB8fCB0aGlzLmNoYXI7XG4gICAgICB0aGlzLmh1cnQgPSBmcmFtZS5odXJ0IHx8IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5odXJ0KSB7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBpZiAoY29sbGlkZVN0YWdlKSB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICBpZiAoY29sbGlkZUdhbWVPYmplY3QpIHtcbiAgICAgICAgICB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0Lm9uQ29sbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihwbGF5ZXJGYWNpbmc6IEtleUNvZGVzKTogQnVsbGV0RnJhbWVbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmFuaW1hdGlvbnNbcGxheWVyRmFjaW5nXV07XG4gIH1cblxuICBvbkNvbGxpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5jaGFyID0gXCLDl1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9LCA1MCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGd1bkJ1bGxldEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vYW5pbWF0aW9ucy9ndW5CdWxsZXRcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi9CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEd1bkJ1bGxldCBleHRlbmRzIEJ1bGxldCB7XG4gICAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXlDb2RlOiBLZXlDb2Rlcykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIG5ldyBHYW1lT2JqZWN0KGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueCwgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci55LCBcIi1cIiwgXCLilI/ilIHilJPilIPilKPilKt9W1wiKSxcbiAgICAgICAgICAgIGtleUNvZGUsXG4gICAgICAgICAgICBndW5CdWxsZXRBbmltYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaHVydCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IFdlYXBvbkludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1dlYXBvblwiO1xuaW1wb3J0IHsgR3VuQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0cy9HdW5CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEd1biBpbXBsZW1lbnRzIFdlYXBvbkludGVyZmFjZSB7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBidWxsZXRzOiBHdW5CdWxsZXRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcIkd1blwiXG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgY29uc3QgYnVsbGV0ID0gbmV3IEd1bkJ1bGxldChnbG9iYWxUaGlzLmdhbWUucGxheWVyLmZhY2luZyk7XG4gICAgYnVsbGV0LmluaXQoKTtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QoYnVsbGV0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gS2V5Q29kZXMge1xuICBBUlJPV19VUCA9IDM4LFxuICBBUlJPV19ET1dOID0gNDAsXG4gIEFSUk9XX0xFRlQgPSAzNyxcbiAgQVJST1dfUklHSFQgPSAzOSxcbiAgU1BBQ0UgPSAzMixcbiAgViA9IDg2LFxuICBDID0gNjcsXG59XG4iLCJleHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZTogbnVtYmVyKSA9PiBuZXcgUHJvbWlzZSgocikgPT4gc2V0VGltZW91dChyLCB0aW1lKSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgR3VuR28gfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RzL0d1bkdPXCI7XG5pbXBvcnQgeyBCb21iQmFnR28gfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RzL0JvbWJCYWdHT1wiO1xuaW1wb3J0IHsgTGlzdGVuZXJzIH0gZnJvbSBcIi4vY2xhc3Nlcy9MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL2NsYXNzZXMvUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL2NsYXNzZXMvU3RhZ2VcIjtcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4vY2xhc3Nlcy9FbmVteVwiO1xuXG5jb25zdCBzdGFnZSA9IFtcbiAgXCLilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilJfilInilInilInilInilInilInilInilInilInilInilInilInilJsgICDilJfilInilInilInilInilInilInilInilInilInilInilInilInilJsgICAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSrICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICBo4pSDICAgICAg4pSDw5MgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilInilInilInilInilInilInilInilInilInilInilInilInilInilJogIOKUluKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgIOKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSj4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSrICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICDilJfilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilJsgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICggzaHCsCDNnMqWIM2hwrApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbl07XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIobmV3IEdhbWVPYmplY3QoMywgMywgXCJPXCIpKTtcbmdsb2JhbFRoaXMuZ2FtZSA9IG5ldyBHYW1lKFxuICBcImdhbWVcIixcbiAgNDAsXG4gIDIwLFxuICBwbGF5ZXIsXG4gIG5ldyBTdGFnZShzdGFnZSwgeyB4OiAxLCB5OiAxIH0pXG4pO1xuXG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEd1bkdvKHsgeDogMTAsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBCb21iQmFnR28oeyB4OiAxNiwgeTogNiB9KSk7XG5cbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNSB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA3IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogMyB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDQgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MywgeTogNyB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDAsIHk6IDQgfSkpO1xuXG5jb25zdCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcnMoZ2xvYmFsVGhpcy5nYW1lKTtcbmxpc3RlbmVyLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==