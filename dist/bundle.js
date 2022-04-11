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
    constructor(start, end, matrix, gameObject) {
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
    getMinimum(list) {
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
        }
        catch (error) {
            console.log(this.gameObject);
            this.searching = false;
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
            if (this.gameObject.willCollideStage(position) || char == undefined)
                throw "char es " + char;
            if (position.x === this.end.x && position.y == this.end.y) {
                this.end = new Node_1.Node(position.x, position.y, node);
                this.searching = false;
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
        this.width = globalThis.game.width - 2;
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
        try {
            const dialog = [];
            const padding = 4;
            const texts = this.textRow(this.text);
            dialog.push(`✖ ╔${"═".repeat(this.width - 4)}╗ ✖`);
            dialog.push(`╔═╝${" ".repeat(this.width - 4)}╚═╗`);
            texts.map((text) => {
                let paddingText = " ".repeat((this.width - text.length) / 2);
                dialog.push(`║${paddingText}${text}${paddingText}${text.length % 2 ? " " : ""}║`);
            });
            dialog.push(`╚═╗${" ".repeat(this.width - 4)}╔═╝`);
            dialog.push(`✖ ╚${"═".repeat(this.width - 4)}╝ ✖`);
            this.matrix = dialog;
            globalThis.game.dialog.push(this);
        }
        catch (error) {
            console.log(error);
        }
    }
    textRow(text) {
        let arrayText = text.split(" ");
        let response = [];
        let tempText = "";
        while (arrayText.length > 0) {
            let tempWord = arrayText.shift();
            if ((tempText + " " + tempWord).length > this.width / 1.5) {
                tempWord && arrayText.unshift(tempWord);
                response.push(tempText);
                tempText = "";
            }
            else {
                tempText += " " + tempWord;
            }
        }
        tempText !== "" && response.push(tempText);
        return response;
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
            if (globalThis.game.isPaused || !this.active)
                return;
            if (this.followMode === FollowMode.DirectFollow) {
                let { x, y } = globalThis.game.player;
                let tempX = this.x === x ? this.x : this.x > x ? this.x - 1 : this.x + 1;
                let tempY = this.y === y ? this.y : this.y > y ? this.y - 1 : this.y + 1;
                let position = { x: tempX, y: tempY };
                if (!(!!this.willCollideGameObject(position) ||
                    this.willCollideStage(position))) {
                    this.lastPosition = position;
                    this.x = tempX;
                    this.y = tempY;
                }
                else {
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
            if (globalThis.game.isPaused || !this.active)
                return;
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
                if (!globalThis.game.isPaused || !this.active) {
                    let step = this.path.pop();
                    if (step) {
                        let collider = !!this.willCollideGameObject(step) || this.willCollideStage(step);
                        if (!collider) {
                            this.x = step.x;
                            this.y = step.y;
                        }
                        else {
                            this.path.push(step);
                        }
                    }
                }
                yield (0, sleep_1.sleep)(500);
            }
            this.isAnimating = false;
        });
    }
    getPath() {
        const astar = new AStar_1.AStar(new Node_1.Node(this.x, this.y, null), new Node_1.Node(globalThis.game.player.x, globalThis.game.player.y, null), globalThis.game.currentStage.matrix, this);
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
    destroy() {
        super.destroy();
        clearInterval(this.aStartInterval);
        clearInterval(this.directInterval);
    }
    setActive(value) {
        this.active = value;
        if (!value) {
            clearInterval(this.aStartInterval);
            clearInterval(this.directInterval);
        }
        else {
            this.startAStar();
            this.startDirectFollow();
            this.followMode = FollowMode.AStar;
        }
    }
}
exports.Enemy = Enemy;


/***/ }),

/***/ "./src/classes/Game.ts":
/*!*****************************!*\
  !*** ./src/classes/Game.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
const DialogBox_1 = __webpack_require__(/*! ./DialogBox */ "./src/classes/DialogBox.ts");
const OptionDialog_1 = __webpack_require__(/*! ./GameObjects/OptionDialog */ "./src/classes/GameObjects/OptionDialog.ts");
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
        this.dialog = [];
        this.isPaused = false;
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
        if (this.dialog.length > 0) {
            this.isPaused = true;
            let dialogFrame = this.dialog[0];
            if (!dialogFrame)
                return;
            if (dialogFrame instanceof OptionDialog_1.OptionDialog) {
                __classPrivateFieldSet(this, _Game_lastScreen, dialogFrame.getOptions(__classPrivateFieldGet(this, _Game_lastScreen, "f")), "f");
                this.preElement.innerHTML = __classPrivateFieldGet(this, _Game_lastScreen, "f").join("\n");
            }
            else if (dialogFrame instanceof DialogBox_1.DialogBox) {
                __classPrivateFieldSet(this, _Game_lastScreen, dialogFrame.getDialog(__classPrivateFieldGet(this, _Game_lastScreen, "f")), "f");
                this.preElement.innerHTML = __classPrivateFieldGet(this, _Game_lastScreen, "f").join("\n");
            }
            return;
        }
        this.isPaused = false;
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
    changeStage(stage) {
        this.currentStage.playerPosition = { x: this.player.x, y: this.player.y };
        this.currentStage.gameObjects.forEach((go) => {
            go.setActive(false);
        });
        this.currentStage = stage;
        this.currentStage.gameObjects.forEach((go) => {
            go.setActive(true);
        });
        this.player.x = stage.playerPosition.x;
        this.player.y = stage.playerPosition.y;
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
        this.active = true;
    }
    willCollideStage(position) {
        return this.colliderList.includes(globalThis.game.currentStage.getChar(position.x, position.y));
    }
    willCollideGameObject(position) {
        return (globalThis.game.currentStage.gameObjects.find((go) => go.x === position.x &&
            go.y === position.y &&
            go.id !== this.id) || null);
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
        let gameObject = null;
        globalThis.game.currentStage.gameObjects =
            globalThis.game.currentStage.gameObjects.filter((go) => {
                if (go.id !== this.id) {
                    gameObject = undefined;
                    return true;
                }
                return false;
            });
        gameObject = null;
    }
    setActive(active) {
        this.active = active;
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
            gameObject.x = this.x;
            gameObject.y = this.y;
            new DialogBox_1.DialogBox("Acabas de encontrar una ☌ ");
        }
    }
}
exports.BombBagGo = BombBagGo;


/***/ }),

/***/ "./src/classes/GameObjects/DestructibleGO.ts":
/*!***************************************************!*\
  !*** ./src/classes/GameObjects/DestructibleGO.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Destructible = void 0;
const GameObject_1 = __webpack_require__(/*! ../GameObject */ "./src/classes/GameObject.ts");
const Bullet_1 = __webpack_require__(/*! ../Weapons/Bullets/Bullet */ "./src/classes/Weapons/Bullets/Bullet.ts");
class Destructible extends GameObject_1.GameObject {
    constructor(position) {
        super(position.x, position.y, "≣");
    }
    onCollide(gameObject) {
        if (gameObject instanceof Bullet_1.Bullet) {
            this.destroy();
        }
    }
}
exports.Destructible = Destructible;


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
            gameObject.x = this.x;
            gameObject.y = this.y;
            gameObject.items.push(new Gun_1.Gun());
            this.destroy();
            new DialogBox_1.DialogBox("Acabas de encontrar una ╾ ");
        }
    }
}
exports.GunGo = GunGo;


/***/ }),

/***/ "./src/classes/GameObjects/OptionDialog.ts":
/*!*************************************************!*\
  !*** ./src/classes/GameObjects/OptionDialog.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionDialog = void 0;
const Option_1 = __webpack_require__(/*! ../Option */ "./src/classes/Option.ts");
class OptionDialog {
    constructor(options) {
        this.matrix = [];
        this.optionsTemp = options;
        this.options = [];
        this.index = 0;
        this.width = globalThis.game.width - 2;
        this.init();
    }
    getOptions(lastScreen) {
        const matrix = this.options[this.index].text;
        const xyPoint = {
            x: 0,
            y: lastScreen.length - matrix.length,
        };
        for (let i = 0; i < matrix.length; i++) {
            lastScreen[xyPoint.y + i] = matrix[i];
        }
        return lastScreen;
    }
    init() {
        try {
            this.optionsTemp.map((option) => {
                const texts = [...this.optionsTemp];
                const dialog = [];
                dialog.push(`✖ ╔${"═".repeat(this.width - 4)}╗ ✖`);
                dialog.push(`╔═╝${" ".repeat(this.width - 4)}╚═╗`);
                texts.map((optionTemp) => {
                    let tempText = "";
                    if (optionTemp.text == option.text) {
                        tempText = "✖ " + optionTemp.text;
                    }
                    else {
                        tempText = "  " + optionTemp.text;
                    }
                    let paddingTextleft = " ".repeat(this.width / 8);
                    let paddingTextright = " ".repeat(this.width - paddingTextleft.length - tempText.length);
                    dialog.push(`║${paddingTextleft}${tempText}${paddingTextright}${tempText.length % 2 ? "" : ""}║`);
                });
                dialog.push(`╚═╗${" ".repeat(this.width - 4)}╔═╝`);
                dialog.push(`✖ ╚${"═".repeat(this.width - 4)}╝ ✖`);
                this.options.push(new Option_1.Option(dialog, option.func));
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    next() {
        this.index += 1;
        if (this.index >= this.options.length) {
            this.index = 0;
        }
    }
    previous() {
        this.index -= 1;
        if (this.index < 0) {
            this.index = this.options.length - 1;
        }
    }
    textRow(text) {
        let arrayText = text.split(" ");
        let response = [];
        let tempText = "";
        while (arrayText.length > 0) {
            let tempWord = arrayText.shift();
            if ((tempText + " " + tempWord).length > this.width / 1.5) {
                tempWord && arrayText.unshift(tempWord);
                response.push(tempText);
                tempText = "";
            }
            else {
                tempText += " " + tempWord;
            }
        }
        tempText !== "" && response.push(tempText);
        return response;
    }
}
exports.OptionDialog = OptionDialog;


/***/ }),

/***/ "./src/classes/GameObjects/TalkableGO.ts":
/*!***********************************************!*\
  !*** ./src/classes/GameObjects/TalkableGO.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Talkable = void 0;
const GameObject_1 = __webpack_require__(/*! ../GameObject */ "./src/classes/GameObject.ts");
const Player_1 = __webpack_require__(/*! ../Player */ "./src/classes/Player.ts");
class Talkable extends GameObject_1.GameObject {
    constructor(position, char, func) {
        super(position.x, position.y, char || "?");
        this.onTalk = func;
    }
    onCollide(gameObject) {
        if (gameObject instanceof Player_1.Player) {
            gameObject.x = this.x;
            gameObject.y = this.y;
            setTimeout(() => {
                this.onTalk();
            }, 50);
        }
    }
}
exports.Talkable = Talkable;


/***/ }),

/***/ "./src/classes/Listeners.ts":
/*!**********************************!*\
  !*** ./src/classes/Listeners.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Listeners = void 0;
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.ts");
const DialogBox_1 = __webpack_require__(/*! ./DialogBox */ "./src/classes/DialogBox.ts");
const OptionDialog_1 = __webpack_require__(/*! ./GameObjects/OptionDialog */ "./src/classes/GameObjects/OptionDialog.ts");
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
        if (globalThis.game.dialog.length) {
            if (globalThis.game.dialog[0] instanceof DialogBox_1.DialogBox) {
                if (e.keyCode === constants_1.KeyCodes.SPACE) {
                    globalThis.game.dialog.shift();
                }
            }
            else if (globalThis.game.dialog[0] instanceof OptionDialog_1.OptionDialog) {
                const option = globalThis.game.dialog[0].options[globalThis.game.dialog[0].index];
                if (e.keyCode === constants_1.KeyCodes.SPACE) {
                    option.func();
                    globalThis.game.dialog.shift();
                }
                if (e.keyCode === constants_1.KeyCodes.ARROW_UP) {
                    globalThis.game.dialog[0].previous();
                }
                if (e.keyCode === constants_1.KeyCodes.ARROW_DOWN) {
                    globalThis.game.dialog[0].next();
                }
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

/***/ "./src/classes/Option.ts":
/*!*******************************!*\
  !*** ./src/classes/Option.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Option = void 0;
class Option {
    constructor(text, func) {
        this.text = text;
        this.func = func;
    }
}
exports.Option = Option;


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
        gameObject.colliderList = "┏━┓┃┣┫}[/";
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
            if (globalThis.game.isPaused)
                return;
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
    willCollideGameObject(position) {
        return (globalThis.game.currentStage.gameObjects.find((go) => go.x === position.x &&
            go.y === position.y &&
            go.id !== this.id &&
            go.constructor.name !== this.constructor.name) || null);
    }
    destroy() {
        super.destroy();
        clearInterval(this.interval);
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
const DestructibleGO_1 = __webpack_require__(/*! ./classes/GameObjects/DestructibleGO */ "./src/classes/GameObjects/DestructibleGO.ts");
const DialogBox_1 = __webpack_require__(/*! ./classes/DialogBox */ "./src/classes/DialogBox.ts");
const TalkableGO_1 = __webpack_require__(/*! ./classes/GameObjects/TalkableGO */ "./src/classes/GameObjects/TalkableGO.ts");
const OptionDialog_1 = __webpack_require__(/*! ./classes/GameObjects/OptionDialog */ "./src/classes/GameObjects/OptionDialog.ts");
const Option_1 = __webpack_require__(/*! ./classes/Option */ "./src/classes/Option.ts");
const stage = [
    "┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓                                                       ",
    "┣┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┫                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┃                             ┃                                                       ",
    "┣━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━┫                                                       ",
    "┗┉┉┉┉┉┉┉┉┉┉┉┉┛  ┗┉┉┉━┉┉┉┉┉┉┉┉┉┛      ┏////////////┓                                   ",
    "                                     ┣////////////┫                                   ",
    "                                     ┃////////////┃                                   ",
    "┏━━━━━━━━━━━━┓  ┏━━━━━━━━━━━━━┓      ┃////////////┃                                   ",
    "┣┉┉┉┉┉┉┉┉┉┉┉┉┚  ┖┉┉┉┉┉━┉┉┉┉┉┉┉┫      ┃////////////┃                                   ",
    "┃                             ┃      ┃////////////┃                                   ",
    "┃                             ┃      ┣━━━━┓  ┏━━━━┫                                   ",
    "┃                             ┃      ┗┉┉┉┉┛  ┗┉┉┉┉┛                                   ",
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
const stage2 = [
    "                        ",
    "                        ",
    "                        ",
    "                        ",
    "                        ",
    "                        ",
    "                        ",
    "                        ",
];
const stageObj1 = new Stage_1.Stage(stage, { x: 1, y: 1 });
const stageObj2 = new Stage_1.Stage(stage2, { x: 12, y: 8 });
const asdf2 = () => {
    const options = new OptionDialog_1.OptionDialog([
        new Option_1.Option("Salir de la casa", () => {
            globalThis.game.changeStage(stageObj1);
        }),
        new Option_1.Option("Cancelar", () => {
        })
    ]);
    globalThis.game.dialog.push(options);
};
stageObj2.addGameObject(new TalkableGO_1.Talkable({ x: 12, y: 9 }, "▄", asdf2));
stageObj2.addGameObject(new TalkableGO_1.Talkable({ x: 13, y: 9 }, "▄", asdf2));
stageObj2.addGameObject(new TalkableGO_1.Talkable({ x: 9, y: 3 }, "M", () => {
    new DialogBox_1.DialogBox("Es muy peligroso salir sin nada, ten esta bomba para que no te hagan daño");
    stageObj2.addGameObject(new BombBagGO_1.BombBagGo({ x: 10, y: 3 }));
}));
const player = new Player_1.Player(new GameObject_1.GameObject(3, 3, "O"));
globalThis.game = new Game_1.Game("game", 60, 20, player, stageObj1);
globalThis.game.currentStage.addGameObject(new GunGO_1.GunGo({ x: 10, y: 6 }));
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
globalThis.game.currentStage.addGameObject(new DestructibleGO_1.Destructible({ x: 15, y: 7 }));
globalThis.game.currentStage.addGameObject(new DestructibleGO_1.Destructible({ x: 16, y: 7 }));
const asdf = () => {
    const options = new OptionDialog_1.OptionDialog([
        new Option_1.Option("Entrar a la casa", () => {
            globalThis.game.changeStage(stageObj2);
        }),
        new Option_1.Option("Cancelar", () => {
        })
    ]);
    console.log(options);
    globalThis.game.dialog.push(options);
};
globalThis.game.currentStage.addGameObject(new TalkableGO_1.Talkable({ x: 44, y: 14 }, " ", asdf));
globalThis.game.currentStage.addGameObject(new TalkableGO_1.Talkable({ x: 45, y: 14 }, " ", asdf));
setTimeout(() => {
    new DialogBox_1.DialogBox("this is a Dialog Box");
}, 1000);
const listener = new Listeners_1.Listeners(globalThis.game);
listener.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCO0lBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVyxzQkFBYyxHQUF1QztJQUM5RCxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVztJQUNoQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYztDQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZGRiw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBa0I7SUFDL0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDakMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVywyQkFBbUIsR0FBdUM7SUFDbkUsQ0FBQyxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVc7SUFDaEMsQ0FBQyxvQkFBUSxDQUFD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QUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksNkJBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSw2QkFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTlFLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLDJCQUFZLENBQUM7UUFDL0IsSUFBSSxlQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUNGLElBQUksZUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDNUIsQ0FBQyxDQUFDO0tBQUMsQ0FBQyxDQUFDO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FDeEMsSUFBSSxxQkFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUMxQyxDQUFDO0FBQ0YsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUN4QyxJQUFJLHFCQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQzFDLENBQUM7QUFDRixVQUFVLENBQUMsR0FBRyxFQUFFO0lBQ2QsSUFBSSxxQkFBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ1QsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9hbmltYXRpb25zL2JvbWIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvYW5pbWF0aW9ucy9ndW5CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9BU3Rhci9BU3Rhci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0FTdGFyL05vZGUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9EaWFsb2dCb3gudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9FbmVteS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdHMvQm9tYkJhZ0dPLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdHMvRGVzdHJ1Y3RpYmxlR08udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lT2JqZWN0cy9HdW5HTy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL09wdGlvbkRpYWxvZy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL1RhbGthYmxlR08udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9MaXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9PcHRpb24udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9TdGFnZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQmFnQm9tYi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9Cb21iLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9CdWxsZXRzL0J1bGxldC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9HdW5CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0d1bi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvdXRpbHMvc2xlZXAudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVsbGV0RnJhbWUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9CdWxsZXRGcmFtZVwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJpZ2h0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogLTEsIHg6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB5OiAwLCB4OiA5LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGRvd25BbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAtMSwgeTogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4oqXXCIgfSxcbiAgICB7IHg6IDAsIHk6IDksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgdXBBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAtMSwgeTogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB4OiAwLCB5OiAtOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBsZWZ0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogLTEsIHg6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogMCwgeDogLTksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGJvbWJBbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9ID0ge1xuICAgIFtLZXlDb2Rlcy5BUlJPV19VUF06IHVwQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19ET1dOXTogZG93bkFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfTEVGVF06IGxlZnRBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX1JJR0hUXTogcmlnaHRBbmltYXRpb24sXG59OyIsImltcG9ydCB7IEJ1bGxldEZyYW1lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQnVsbGV0RnJhbWVcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCByaWdodEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IDAsIHg6IDEsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDIsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDUsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgdXBBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAwLCB5OiAtMSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IC0yLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtMywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC01LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC04LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGRvd25BbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAwLCB5OiAxLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogMiwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDMsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA0LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDYsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA3LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBsZWZ0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogMCwgeDogLTEsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC0yLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtMywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC01LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC04LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBndW5CdWxsZXRBbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9ID0ge1xuICAgIFtLZXlDb2Rlcy5BUlJPV19VUF06IHVwQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19ET1dOXTogZG93bkFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfTEVGVF06IGxlZnRBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX1JJR0hUXTogcmlnaHRBbmltYXRpb24sXG59OyIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tICcuLi9HYW1lT2JqZWN0JztcblxuZXhwb3J0IGNsYXNzIEFTdGFyIHtcbiAgbWF0cml4OiBzdHJpbmdbXTtcbiAgc2VhcmNoaW5nOiBib29sZWFuO1xuICBzdGFydDogTm9kZTtcbiAgZW5kOiBOb2RlO1xuICBwdWJsaWNMaXN0OiBOb2RlW107XG4gIHByaXZhdGVMaXN0OiBOb2RlW107XG4gIHBhdGg6IEdhbWVPYmplY3RQb3NpdGlvbltdO1xuICBnYW1lT2JqZWN0OiBHYW1lT2JqZWN0O1xuICBjb25zdHJ1Y3RvcihzdGFydDogTm9kZSwgZW5kOiBOb2RlLCBtYXRyaXg6IHN0cmluZ1tdLCBnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xuICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIHRoaXMucHVibGljTGlzdCA9IFt0aGlzLnN0YXJ0XTtcbiAgICB0aGlzLnByaXZhdGVMaXN0ID0gW107XG4gICAgdGhpcy5zZWFyY2hpbmcgPSB0cnVlO1xuICAgIHRoaXMuZ2FtZU9iamVjdCA9IGdhbWVPYmplY3Q7XG4gICAgdGhpcy5wYXRoID0gW107XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIGxldCBjb3VudCA9IDEwMDAwO1xuICAgIHdoaWxlICh0aGlzLnNlYXJjaGluZykge1xuICAgICAgbGV0IGJlc3QgPSB0aGlzLmdldE1pbmltdW0odGhpcy5wdWJsaWNMaXN0KSB8fCB0aGlzLnN0YXJ0O1xuICAgICAgdGhpcy5nZXRDaGlsZHJlbihiZXN0KTtcbiAgICAgIHRoaXMuc3dpdGNoTm9kZShiZXN0KTtcbiAgICAgIGlmIChjb3VudCA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZSBkZWphXCIpO1xuICAgICAgICB0aGlzLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBjb3VudC0tO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQYXRoKCk7XG4gIH1cblxuICBnZXRNaW5pbXVtKGxpc3Q6IE5vZGVbXSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICBsZXQgYmVzdCA9IGxpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuZiAmJiBjdXJyLmYgJiYgcHJldi5mIDwgY3Vyci5mID8gcHJldiA6IGN1cnI7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgYmVzdExpc3QgPSBsaXN0LmZpbHRlcigobm9kZSkgPT4gbm9kZS5mID09PSBiZXN0LmYpO1xuICAgICAgICBiZXN0ID0gYmVzdExpc3QucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXYuaCAmJiBjdXJyLmggJiYgcHJldi5oIDwgY3Vyci5oID8gcHJldiA6IGN1cnI7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmVzdDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lT2JqZWN0KVxuICAgICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRDaGlsZHJlbihub2RlOiBOb2RlKTogTm9kZVtdIHtcbiAgICBsZXQgbGlzdDogTm9kZVtdID0gW107XG4gICAgbGV0IG9wdGlvbnMgPSBbXG4gICAgICB7IHg6IG5vZGUueCwgeTogbm9kZS55IC0gMSB9LCAvL3VwXG4gICAgICB7IHg6IG5vZGUueCArIDEsIHk6IG5vZGUueSB9LCAvL3JpZ2h0XG4gICAgICB7IHg6IG5vZGUueCwgeTogbm9kZS55ICsgMSB9LCAvL2Rvd25cbiAgICAgIHsgeDogbm9kZS54IC0gMSwgeTogbm9kZS55IH0sIC8vbGVmdFxuICAgICAgLy8geyB4OiBub2RlLnggKyAxLCB5OiBub2RlLnkgLSAxfSwgLy91cCByaWdodFxuICAgICAgLy8geyB4OiBub2RlLnggKyAxLCB5OiBub2RlLnkgKyAxfSwgLy9kb3duIHJpZ2h0XG4gICAgICAvLyB7IHg6IG5vZGUueCAtIDEsIHk6IG5vZGUueSArIDF9LCAvLyBkb3duIGxlZnRcbiAgICAgIC8vIHsgeDogbm9kZS54IC0gMSwgeTogbm9kZS55IC0gMX0sIC8vdXAgbGVmdFxuICAgIF07XG4gICAgb3B0aW9ucy5mb3JFYWNoKChwb3N0aW9uKSA9PiB7XG4gICAgICBsZXQgbmV3Tm9kZTogTm9kZSB8IG51bGw7XG4gICAgICBsZXQgcHJpdmF0ZU5vZGUgPSB0aGlzLmZpbmRJbkxpc3QodGhpcy5wcml2YXRlTGlzdCwgcG9zdGlvbik7XG4gICAgICBpZiAoIXByaXZhdGVOb2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZmluZEluZGV4SW5MaXN0KHRoaXMucHVibGljTGlzdCwgcG9zdGlvbik7XG4gICAgICAgIGxldCBwdWJsaWNOb2RlID0gdGhpcy5wdWJsaWNMaXN0W2luZGV4XTtcbiAgICAgICAgaWYgKHB1YmxpY05vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5nICsgMTAgPCBwdWJsaWNOb2RlLmcpIHtcbiAgICAgICAgICAgIHB1YmxpY05vZGUuZyA9IG5vZGUuZyArIDEwO1xuICAgICAgICAgICAgcHVibGljTm9kZS5mID0gcHVibGljTm9kZS5nICsgcHVibGljTm9kZS5oO1xuICAgICAgICAgICAgcHVibGljTm9kZS5wYXJlbnQgPSBub2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnB1YmxpY0xpc3RbaW5kZXhdID0gcHVibGljTm9kZTtcbiAgICAgICAgICBsaXN0LnB1c2gocHVibGljTm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Tm9kZSA9IHRoaXMudmFsaWRhdGVBbmRDcmVhdGUocG9zdGlvbiwgbm9kZSk7XG4gICAgICAgICAgaWYgKG5ld05vZGUpIHtcbiAgICAgICAgICAgIG5ld05vZGUuZyA9IG5vZGUuZyArIDEwO1xuICAgICAgICAgICAgbmV3Tm9kZS5oID0gdGhpcy5tYW5oYXRoYW4obmV3Tm9kZSwgdGhpcy5lbmQpO1xuICAgICAgICAgICAgbmV3Tm9kZS5mID0gbmV3Tm9kZS5nICsgbmV3Tm9kZS5oO1xuICAgICAgICAgICAgdGhpcy5wdWJsaWNMaXN0LnB1c2gobmV3Tm9kZSk7XG4gICAgICAgICAgICBsaXN0LnB1c2gobmV3Tm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBtYW5oYXRoYW4oc3RhcnQ6IE5vZGUsIGVuZDogTm9kZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIChlbmQueSAtIHN0YXJ0LnkgKyAoZW5kLnggKyBzdGFydC55KSkgKiAxMDtcbiAgfVxuXG4gIHZhbGlkYXRlQW5kQ3JlYXRlKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24sIG5vZGU6IE5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGNoYXIgPSB0aGlzLm1hdHJpeFtwb3NpdGlvbi55XVtwb3NpdGlvbi54XTtcbiAgICAgIGlmICh0aGlzLmdhbWVPYmplY3Qud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbikgfHwgY2hhciA9PSB1bmRlZmluZWQpIHRocm93IFwiY2hhciBlcyBcIiArIGNoYXI7XG4gICAgICBpZiAocG9zaXRpb24ueCA9PT0gdGhpcy5lbmQueCAmJiBwb3NpdGlvbi55ID09IHRoaXMuZW5kLnkpIHtcbiAgICAgICAgdGhpcy5lbmQgPSBuZXcgTm9kZShwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBub2RlKTtcbiAgICAgICAgdGhpcy5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgTm9kZShwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBub2RlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgY29tcGFyZVBvc2l0aW9uKG5vZGU6IE5vZGUsIHBvc3Rpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHJldHVybiBub2RlLnggPT09IHBvc3Rpb24ueCAmJiBub2RlLnkgPT09IHBvc3Rpb24ueTtcbiAgfVxuXG4gIGZpbmRJbkxpc3QobGlzdDogTm9kZVtdLCBwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGxpc3QuZmluZCgobm9kZSkgPT4gdGhpcy5jb21wYXJlUG9zaXRpb24obm9kZSwgcG9zaXRpb24pKTtcbiAgfVxuXG4gIGZpbmRJbmRleEluTGlzdChsaXN0OiBOb2RlW10sIHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICByZXR1cm4gbGlzdC5maW5kSW5kZXgoKG5vZGUpID0+IHRoaXMuY29tcGFyZVBvc2l0aW9uKG5vZGUsIHBvc2l0aW9uKSk7XG4gIH1cblxuICBzd2l0Y2hOb2RlKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLmZpbmRJbmRleEluTGlzdCh0aGlzLnB1YmxpY0xpc3QsIHBvc2l0aW9uKTtcbiAgICBsZXQgbm9kZSA9IHRoaXMucHVibGljTGlzdFtpbmRleF07XG4gICAgaWYgKG5vZGUgPT0gdW5kZWZpbmVkIHx8IG5vZGUgPT0gbnVsbCkgcmV0dXJuO1xuICAgIHRoaXMucHJpdmF0ZUxpc3QucHVzaChub2RlKTtcbiAgICB0aGlzLnB1YmxpY0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIGNyZWF0ZVBhdGgoKSB7XG4gICAgbGV0IGxpc3Q6IEdhbWVPYmplY3RQb3NpdGlvbltdID0gW107XG4gICAgbGV0IG5vZGUgPSB0aGlzLmVuZDtcbiAgICB3aGlsZSAobm9kZS5wYXJlbnQpIHtcbiAgICAgIGxpc3QucHVzaCh7IHg6IG5vZGUueCwgeTogbm9kZS55IH0pO1xuICAgICAgbm9kZSA9IG5vZGUucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gbGlzdDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgcGFyZW50OiBOb2RlIHwgbnVsbDtcbiAgICBnOiBudW1iZXI7XG4gICAgaDogbnVtYmVyO1xuICAgIGY6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBwYXJlbnQ6IE5vZGUgfCBudWxsKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50IHx8IG51bGw7XG4gICAgICAgIHRoaXMuZyA9IDA7XG4gICAgICAgIHRoaXMuaCA9IDA7XG4gICAgICAgIHRoaXMuZiA9IDA7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBEaWFsb2dCb3gge1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmdbXTtcbiAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXRyaXggPSBbXTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMud2lkdGggPSBnbG9iYWxUaGlzLmdhbWUud2lkdGggLSAyO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgZ2V0RGlhbG9nKGxhc3RTY3JlZW46IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeHlQb2ludCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiBsYXN0U2NyZWVuLmxlbmd0aCAtIHRoaXMubWF0cml4Lmxlbmd0aCxcbiAgICB9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxhc3RTY3JlZW5beHlQb2ludC55ICsgaV0gPSB0aGlzLm1hdHJpeFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3RTY3JlZW47XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkaWFsb2c6IHN0cmluZ1tdID0gW107XG4gICAgICBjb25zdCBwYWRkaW5nID0gNDtcbiAgICAgIC8vIGNvbnN0IHBhZGRpbmdXb3JkID0gXCIgXCIucmVwZWF0KCh0aGlzLndpZHRoIC0gdGhpcy50ZXh0Lmxlbmd0aCkgLyAyKTtcbiAgICAgIGNvbnN0IHRleHRzID0gdGhpcy50ZXh0Um93KHRoaXMudGV4dCk7XG4gICAgICBkaWFsb2cucHVzaChg4pyWIOKVlCR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIDQpfeKVlyDinJZgKTtcbiAgICAgIGRpYWxvZy5wdXNoKGDilZTilZDilZ0ke1wiIFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gNCl94pWa4pWQ4pWXYCk7XG4gICAgICB0ZXh0cy5tYXAoKHRleHQpID0+IHtcbiAgICAgICAgbGV0IHBhZGRpbmdUZXh0ID0gXCIgXCIucmVwZWF0KCh0aGlzLndpZHRoIC0gdGV4dC5sZW5ndGgpIC8gMik7XG4gICAgICAgIGRpYWxvZy5wdXNoKFxuICAgICAgICAgIGDilZEke3BhZGRpbmdUZXh0fSR7dGV4dH0ke3BhZGRpbmdUZXh0fSR7dGV4dC5sZW5ndGggJSAyID8gXCIgXCIgOiBcIlwifeKVkWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBkaWFsb2cucHVzaChg4pWRJHtwYWRkaW5nV29yZH0ke3RoaXMudGV4dH0ke3BhZGRpbmdXb3JkfeKVkWApO1xuICAgICAgZGlhbG9nLnB1c2goYOKVmuKVkOKVlyR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSA0KX3ilZTilZDilZ1gKTtcbiAgICAgIGRpYWxvZy5wdXNoKGDinJYg4pWaJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gNCl94pWdIOKclmApO1xuICAgICAgdGhpcy5tYXRyaXggPSBkaWFsb2c7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nLnB1c2godGhpcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICB0ZXh0Um93KHRleHQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBsZXQgYXJyYXlUZXh0ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgbGV0IHJlc3BvbnNlID0gW107XG4gICAgbGV0IHRlbXBUZXh0ID0gXCJcIjtcbiAgICB3aGlsZSAoYXJyYXlUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB0ZW1wV29yZCA9IGFycmF5VGV4dC5zaGlmdCgpO1xuICAgICAgaWYgKCh0ZW1wVGV4dCArIFwiIFwiICsgdGVtcFdvcmQpLmxlbmd0aCA+IHRoaXMud2lkdGggLyAxLjUpIHtcbiAgICAgICAgdGVtcFdvcmQgJiYgYXJyYXlUZXh0LnVuc2hpZnQodGVtcFdvcmQpO1xuICAgICAgICByZXNwb25zZS5wdXNoKHRlbXBUZXh0KTtcbiAgICAgICAgdGVtcFRleHQgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcFRleHQgKz0gXCIgXCIgKyB0ZW1wV29yZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGVtcFRleHQgIT09IFwiXCIgJiYgcmVzcG9uc2UucHVzaCh0ZW1wVGV4dCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBzbGVlcCB9IGZyb20gXCIuLi91dGlscy9zbGVlcFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBBU3RhciB9IGZyb20gXCIuL0FTdGFyL0FTdGFyXCI7XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vQVN0YXIvTm9kZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vV2VhcG9ucy9CdWxsZXRzL0J1bGxldFwiO1xuXG5lbnVtIEZvbGxvd01vZGUge1xuICBcIkFTdGFyXCIsXG4gIFwiQ2hlY2tpbmdEaXJlY3RcIixcbiAgXCJEaXJlY3RGb2xsb3dcIixcbn1cblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGZvbGxvd01vZGU6IEZvbGxvd01vZGU7XG4gIHBhdGg6IEdhbWVPYmplY3RQb3NpdGlvbltdO1xuICBpc0FuaW1hdGluZzogYm9vbGVhbjtcbiAgbGFzdFBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb247XG4gIHN0b3BwZWRDb3VudGVyOiBudW1iZXI7XG4gIGFTdGFydEludGVydmFsOiBudW1iZXI7XG4gIGRpcmVjdEludGVydmFsOiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIktcIiwgXCLilI/ilIHilJPilIPilKPilKt9Wy9cIik7XG4gICAgdGhpcy5mb2xsb3dNb2RlID0gRm9sbG93TW9kZS5BU3RhcjtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYXRoID0gW107XG4gICAgdGhpcy5sYXN0UG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLnN0b3BwZWRDb3VudGVyID0gMDtcbiAgICB0aGlzLmFTdGFydEludGVydmFsID0gMDtcbiAgICB0aGlzLmRpcmVjdEludGVydmFsID0gMDtcbiAgICB0aGlzLnN0YXJ0QVN0YXIoKTtcbiAgICB0aGlzLnN0YXJ0RGlyZWN0Rm9sbG93KCk7XG4gIH1cblxuICBzdGFydERpcmVjdEZvbGxvdygpIHtcbiAgICB0aGlzLmRpcmVjdEludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChnbG9iYWxUaGlzLmdhbWUuaXNQYXVzZWQgfHwgIXRoaXMuYWN0aXZlKSByZXR1cm47XG4gICAgICBpZiAodGhpcy5mb2xsb3dNb2RlID09PSBGb2xsb3dNb2RlLkRpcmVjdEZvbGxvdykge1xuICAgICAgICBsZXQgeyB4LCB5IH0gPSBnbG9iYWxUaGlzLmdhbWUucGxheWVyO1xuICAgICAgICBsZXQgdGVtcFggPVxuICAgICAgICAgIHRoaXMueCA9PT0geCA/IHRoaXMueCA6IHRoaXMueCA+IHggPyB0aGlzLnggLSAxIDogdGhpcy54ICsgMTtcbiAgICAgICAgbGV0IHRlbXBZID1cbiAgICAgICAgICB0aGlzLnkgPT09IHkgPyB0aGlzLnkgOiB0aGlzLnkgPiB5ID8gdGhpcy55IC0gMSA6IHRoaXMueSArIDE7XG4gICAgICAgIGxldCBwb3NpdGlvbiA9IHsgeDogdGVtcFgsIHk6IHRlbXBZIH07XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgISF0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbikgfHxcbiAgICAgICAgICAgIHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbilcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubGFzdFBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICAgICAgdGhpcy54ID0gdGVtcFg7XG4gICAgICAgICAgdGhpcy55ID0gdGVtcFk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMubGFzdFBvc2l0aW9uLnggPT09IHRlbXBYICYmIHRoaXMubGFzdFBvc2l0aW9uLnkgPT09IHRlbXBZKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BwZWRDb3VudGVyKys7XG4gICAgICAgICAgICBpZiAodGhpcy5zdG9wcGVkQ291bnRlciA+IDMpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb2xsb3dNb2RlID0gRm9sbG93TW9kZS5BU3RhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA1MDApO1xuICB9XG4gIHN0YXJ0QVN0YXIoKSB7XG4gICAgdGhpcy5hU3RhcnRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoZ2xvYmFsVGhpcy5nYW1lLmlzUGF1c2VkIHx8ICF0aGlzLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMuZm9sbG93TW9kZSA9PT0gRm9sbG93TW9kZS5BU3Rhcikge1xuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2xsb3dNb2RlID0gRm9sbG93TW9kZS5DaGVja2luZ0RpcmVjdDtcbiAgICAgIH1cbiAgICAgIGxldCB7IHgsIHkgfSA9IHRoaXM7XG4gICAgICBsZXQgcmF5ID0gdGhpcy5nZXRSYXlDYXN0aW5nKFxuICAgICAgICB7IC4uLnsgeCwgeSB9IH0sXG4gICAgICAgIHsgeDogZ2xvYmFsVGhpcy5nYW1lLnBsYXllci54LCB5OiBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnkgfSxcbiAgICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5tYXRyaXhcbiAgICAgICk7XG4gICAgICBpZiAocmF5LnJlcGxhY2VBbGwoXCIgXCIsIFwiXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmZvbGxvd01vZGUgPSBGb2xsb3dNb2RlLkRpcmVjdEZvbGxvdztcbiAgICAgICAgdGhpcy5wYXRoID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZvbGxvd01vZGUgPSBGb2xsb3dNb2RlLkFTdGFyO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5saWZlLS07XG4gICAgfVxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgQnVsbGV0KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhbmltYXRlKCkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICAgIHdoaWxlICh0aGlzLnBhdGgubGVuZ3RoICYmIHRoaXMuZm9sbG93TW9kZSAhPT0gRm9sbG93TW9kZS5EaXJlY3RGb2xsb3cpIHtcbiAgICAgIGlmICghZ2xvYmFsVGhpcy5nYW1lLmlzUGF1c2VkIHx8ICF0aGlzLmFjdGl2ZSkge1xuICAgICAgICBsZXQgc3RlcCA9IHRoaXMucGF0aC5wb3AoKTtcbiAgICAgICAgaWYgKHN0ZXApIHtcbiAgICAgICAgICBsZXQgY29sbGlkZXIgPVxuICAgICAgICAgICAgISF0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChzdGVwKSB8fCB0aGlzLndpbGxDb2xsaWRlU3RhZ2Uoc3RlcCk7XG4gICAgICAgICAgaWYgKCFjb2xsaWRlcikge1xuICAgICAgICAgICAgdGhpcy54ID0gc3RlcC54O1xuICAgICAgICAgICAgdGhpcy55ID0gc3RlcC55O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhdGgucHVzaChzdGVwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGF3YWl0IHNsZWVwKDUwMCk7XG4gICAgfVxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGdldFBhdGgoKSB7XG4gICAgY29uc3QgYXN0YXIgPSBuZXcgQVN0YXIoXG4gICAgICBuZXcgTm9kZSh0aGlzLngsIHRoaXMueSwgbnVsbCksXG4gICAgICBuZXcgTm9kZShnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgbnVsbCksXG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeCxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHJldHVybiBhc3Rhci5nZXRQYXRoKCk7XG4gIH1cblxuICBnZXRSYXlDYXN0aW5nKFxuICAgIHN0YXJ0OiBHYW1lT2JqZWN0UG9zaXRpb24sXG4gICAgZW5kOiBHYW1lT2JqZWN0UG9zaXRpb24sXG4gICAgbWF0cml4OiBzdHJpbmdbXVxuICApIHtcbiAgICBsZXQgcmF5OiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBhY3R1YWwgPSB7IC4uLnN0YXJ0IH07XG4gICAgd2hpbGUgKGFjdHVhbC54ICE9PSBlbmQueCB8fCBhY3R1YWwueSAhPT0gZW5kLnkpIHtcbiAgICAgIGFjdHVhbC54ID1cbiAgICAgICAgYWN0dWFsLnggPT09IGVuZC54XG4gICAgICAgICAgPyBhY3R1YWwueFxuICAgICAgICAgIDogYWN0dWFsLnggPiBlbmQueFxuICAgICAgICAgID8gYWN0dWFsLnggLSAxXG4gICAgICAgICAgOiBhY3R1YWwueCArIDE7XG4gICAgICBhY3R1YWwueSA9XG4gICAgICAgIGFjdHVhbC55ID09PSBlbmQueVxuICAgICAgICAgID8gYWN0dWFsLnlcbiAgICAgICAgICA6IGFjdHVhbC55ID4gZW5kLnlcbiAgICAgICAgICA/IGFjdHVhbC55IC0gMVxuICAgICAgICAgIDogYWN0dWFsLnkgKyAxO1xuICAgICAgcmF5LnB1c2gobWF0cml4W2FjdHVhbC55XVthY3R1YWwueF0pO1xuICAgIH1cbiAgICByZXR1cm4gcmF5LmpvaW4oXCJcIik7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuYVN0YXJ0SW50ZXJ2YWwpO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5kaXJlY3RJbnRlcnZhbCk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hU3RhcnRJbnRlcnZhbCk7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuZGlyZWN0SW50ZXJ2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0QVN0YXIoKTtcbiAgICAgIHRoaXMuc3RhcnREaXJlY3RGb2xsb3coKTtcbiAgICAgIHRoaXMuZm9sbG93TW9kZSA9IEZvbGxvd01vZGUuQVN0YXI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tIFwiLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IE9wdGlvbkRpYWxvZyB9IGZyb20gXCIuL0dhbWVPYmplY3RzL09wdGlvbkRpYWxvZ1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL1N0YWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcmVhZG9ubHkgbWFpbkVsZW1lbnRJZDogc3RyaW5nO1xuICByZWFkb25seSBwcmVFbGVtZW50OiBIVE1MUHJlRWxlbWVudDtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGhhbGZXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBoYWxmSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHBsYXllcjogUGxheWVyO1xuICBwdWJsaWMgY3VycmVudFN0YWdlOiBTdGFnZTtcbiAgcHVibGljIGRpYWxvZzogQXJyYXk8RGlhbG9nQm94IHwgT3B0aW9uRGlhbG9nPjtcbiAgI2xhc3RTY3JlZW46IHN0cmluZ1tdO1xuICBpc1BhdXNlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYWluRWxlbWVudElkOiBzdHJpbmcsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBwbGF5ZXI6IFBsYXllcixcbiAgICBzdGFnZTogU3RhZ2VcbiAgKSB7XG4gICAgdGhpcy5tYWluRWxlbWVudElkID0gbWFpbkVsZW1lbnRJZDtcbiAgICB0aGlzLnByZUVsZW1lbnQgPSA8SFRNTFByZUVsZW1lbnQ+KFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYWluRWxlbWVudElkKVxuICAgICk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuaGFsZldpZHRoID0gd2lkdGggLyAyO1xuICAgIHRoaXMuaGFsZkhlaWdodCA9IGhlaWdodCAvIDI7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UgPSBzdGFnZTtcbiAgICB0aGlzLiNsYXN0U2NyZWVuID0gW107XG4gICAgdGhpcy5kaWFsb2cgPSBbXTtcbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSwgNDAgLyAxMDAwKTtcbiAgfVxuXG4gIHJlcGxhY2VBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlciwgcmVwbGFjZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN0ci5zdWJzdHIoMCwgaW5kZXgpICtcbiAgICAgIHJlcGxhY2VtZW50ICtcbiAgICAgIHN0ci5zdWJzdHIoaW5kZXggKyByZXBsYWNlbWVudC5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSB0cnVlO1xuICAgICAgbGV0IGRpYWxvZ0ZyYW1lID0gdGhpcy5kaWFsb2dbMF07XG4gICAgICBpZiAoIWRpYWxvZ0ZyYW1lKSByZXR1cm47XG4gICAgICBpZihkaWFsb2dGcmFtZSBpbnN0YW5jZW9mIE9wdGlvbkRpYWxvZykge1xuICAgICAgICB0aGlzLiNsYXN0U2NyZWVuID0gZGlhbG9nRnJhbWUuZ2V0T3B0aW9ucyh0aGlzLiNsYXN0U2NyZWVuKVxuICAgICAgICB0aGlzLnByZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy4jbGFzdFNjcmVlbi5qb2luKFwiXFxuXCIpOyBcbiAgICAgIH0gZWxzZSBpZihkaWFsb2dGcmFtZSBpbnN0YW5jZW9mIERpYWxvZ0JveCkge1xuICAgICAgICB0aGlzLiNsYXN0U2NyZWVuID0gZGlhbG9nRnJhbWUuZ2V0RGlhbG9nKHRoaXMuI2xhc3RTY3JlZW4pO1xuICAgICAgICB0aGlzLnByZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy4jbGFzdFNjcmVlbi5qb2luKFwiXFxuXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5kcmF3U3RhZ2UoKTtcbiAgfVxuXG4gIGRyYXdTdGFnZSgpIHtcbiAgICBsZXQgYXJyYXkgPSBbLi4udGhpcy5jdXJyZW50U3RhZ2UubWF0cml4XTtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5mb3JFYWNoKChnbykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yZXBsYWNlQXQoYXJyYXlbZ28ueV0sIGdvLngsIGdvLmNoYXIpO1xuICAgICAgYXJyYXlbZ28ueV0gPSByb3c7XG4gICAgfSk7XG4gICAgY29uc3QgeCA9IHRoaXMucmVwbGFjZUF0KFxuICAgICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0sXG4gICAgICB0aGlzLnBsYXllci54LFxuICAgICAgdGhpcy5wbGF5ZXIuY2hhclxuICAgICk7XG4gICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0gPSB4O1xuICAgIC8vIHRyaW0gYXJyYXkgYnkgcGxheWVyIHBvc2l0aW9uXG4gICAgY29uc3QgeVJhbmdlID1cbiAgICAgIHRoaXMucGxheWVyLnkgPCB0aGlzLmhhbGZIZWlnaHRcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSA+IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGFsZkhlaWdodFxuICAgICAgICA/IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSAtIHRoaXMuaGFsZkhlaWdodDtcblxuICAgIGNvbnN0IHhSYW5nZSA9XG4gICAgICB0aGlzLnBsYXllci54IDwgdGhpcy5oYWxmV2lkdGhcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueCA+IGFycmF5WzBdLmxlbmd0aCAtIHRoaXMuaGFsZldpZHRoXG4gICAgICAgID8gYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy53aWR0aFxuICAgICAgICA6IHRoaXMucGxheWVyLnggLSB0aGlzLmhhbGZXaWR0aDtcbiAgICB0aGlzLiNsYXN0U2NyZWVuID0gYXJyYXlcbiAgICAgIC5zbGljZSh5UmFuZ2UsIHlSYW5nZSArIHRoaXMuaGVpZ2h0KVxuICAgICAgLm1hcCgocm93KSA9PiByb3cuc3Vic3RyaW5nKHhSYW5nZSwgeFJhbmdlICsgdGhpcy53aWR0aCkpO1xuICAgIHRoaXMuI2xhc3RTY3JlZW4udW5zaGlmdCh0aGlzLmluZm9CYXIoKSk7XG4gICAgdGhpcy5wcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuI2xhc3RTY3JlZW4uam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGluZm9CYXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWFwb24gPSB0aGlzLnBsYXllci5jdXJyZW50SXRlbT8ubmFtZTtcbiAgICByZXR1cm4gYExpZmU6JHtcIiDimaVcIi5yZXBlYXQodGhpcy5wbGF5ZXIubGlmZSl9IC0gV2VhcG9uOiAke1xuICAgICAgd2VhcG9uIHx8IFwibnVsbFwiXG4gICAgfWA7XG4gIH0gXG5cbiAgY2hhbmdlU3RhZ2Uoc3RhZ2U6IFN0YWdlKSB7XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UucGxheWVyUG9zaXRpb24gPSB7eDogdGhpcy5wbGF5ZXIueCwgeTogdGhpcy5wbGF5ZXIueX07XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZm9yRWFjaCgoZ28pID0+IHtcbiAgICAgIGdvLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UgPSBzdGFnZTtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5mb3JFYWNoKChnbykgPT4ge1xuICAgICAgZ28uc2V0QWN0aXZlKHRydWUpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLnggPSBzdGFnZS5wbGF5ZXJQb3NpdGlvbi54O1xuICAgIHRoaXMucGxheWVyLnkgPSBzdGFnZS5wbGF5ZXJQb3NpdGlvbi55O1xuICB9XG5cbiAgXG59IiwiaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcblxuY29uc3QgR2xvYmFsQ29sbGlkZXJzID0gXCLilZTilZDilZDilZfilZrilZ3ilZFcIjtcblxuaW50ZXJmYWNlIEdhbWVPYmplY3RJbnRlcmZhY2Uge1xuICByZWFkb25seSBpZDogc3RyaW5nO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY2hhcjogc3RyaW5nO1xuICBjb2xsaWRlckxpc3Q6IHN0cmluZztcbiAgYWN0aXZlOiBib29sZWFuO1xuICBmYWNpbmc6IEtleUNvZGVzO1xuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgR2FtZU9iamVjdEludGVyZmFjZSB7XG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHB1YmxpYyB4OiBudW1iZXI7XG4gIHB1YmxpYyB5OiBudW1iZXI7XG4gIHB1YmxpYyBjaGFyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xsaWRlckxpc3Q6IHN0cmluZztcbiAgcHVibGljIGZhY2luZzogS2V5Q29kZXM7XG4gIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXI6IHN0cmluZywgY29sbGlkZXJMaXN0OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgdGhpcy5pZCA9IChNYXRoLnJhbmRvbSgpICsgMSkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgICB0aGlzLmNvbGxpZGVyTGlzdCA9IGNvbGxpZGVyTGlzdCArIEdsb2JhbENvbGxpZGVycztcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHdpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbGxpZGVyTGlzdC5pbmNsdWRlcyhcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2V0Q2hhcihwb3NpdGlvbi54LCBwb3NpdGlvbi55KVxuICAgICk7XG4gIH1cblxuICB3aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbik6IEdhbWVPYmplY3QgfCBudWxsIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5maW5kKFxuICAgICAgICAoZ28pID0+XG4gICAgICAgICAgZ28ueCA9PT0gcG9zaXRpb24ueCAmJlxuICAgICAgICAgIGdvLnkgPT09IHBvc2l0aW9uLnkgJiZcbiAgICAgICAgICBnby5pZCAhPT0gdGhpcy5pZCBcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBjb2xsaWRlKGFycm93OiBLZXlDb2Rlcykge1xuICAgIGxldCBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICBsZXQgY29sbGlkZUdhbWVPYmplY3Q6IEdhbWVPYmplY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbjtcbiAgICBzd2l0Y2ggKGFycm93KSB7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX1VQOlxuICAgICAgICBwb3NpdGlvbiA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgLSAxIH07XG4gICAgICAgIGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZXMuQVJST1dfRE9XTjpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55ICsgMSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX0xFRlQ6XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLnggLSAxLCB5OiB0aGlzLnkgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19SSUdIVDpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCArIDEsIHk6IHRoaXMueSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29sbGlkZUdhbWVPYmplY3QpIHtcbiAgICAgIHRoaXMub25Db2xsaWRlKGNvbGxpZGVHYW1lT2JqZWN0KTtcbiAgICAgIGNvbGxpZGVHYW1lT2JqZWN0Lm9uQ29sbGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGlkZVN0YWdlIHx8IGNvbGxpZGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHVwKCkge1xuICAgIHRoaXMuZmFjaW5nID0gS2V5Q29kZXMuQVJST1dfVVA7XG4gICAgaWYgKHRoaXMueSAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX1VQKSkge1xuICAgICAgdGhpcy55IC09IDE7XG4gICAgfVxuICB9XG5cbiAgZG93bigpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0RPV047XG4gICAgaWYgKFxuICAgICAgdGhpcy55ICsgMSA8IGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UubWF0cml4Lmxlbmd0aCAmJlxuICAgICAgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19ET1dOKVxuICAgICkge1xuICAgICAgdGhpcy55ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0xFRlQ7XG4gICAgaWYgKHRoaXMueCAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX0xFRlQpKSB7XG4gICAgICB0aGlzLnggLT0gMTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICAgIGlmIChcbiAgICAgIHRoaXMueCArIDEgPCBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeFswXS5sZW5ndGggJiZcbiAgICAgICF0aGlzLmNvbGxpZGUoS2V5Q29kZXMuQVJST1dfUklHSFQpXG4gICAgKSB7XG4gICAgICB0aGlzLnggKz0gMTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGxldCBnYW1lT2JqZWN0ID0gbnVsbDtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdhbWVPYmplY3RzID1cbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmlsdGVyKFxuICAgICAgICAoZ28pID0+IHtcbiAgICAgICAgICBpZihnby5pZCAhPT0gdGhpcy5pZCkge1xuICAgICAgICAgICAgZ2FtZU9iamVjdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBnYW1lT2JqZWN0ID0gbnVsbDtcbiAgfVxuXG4gIHNldEFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tIFwiLi4vRGlhbG9nQm94XCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9QbGF5ZXJcIjtcbmltcG9ydCB7IEJvbWJCYWcgfSBmcm9tIFwiLi4vV2VhcG9ucy9CYWdCb21iXCI7XG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vV2VhcG9ucy9HdW5cIjtcblxuZXhwb3J0IGNsYXNzIEJvbWJCYWdHbyBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgc3VwZXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgXCLimIxcIik7XG4gIH1cblxuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICBnYW1lT2JqZWN0Lml0ZW1zLnB1c2gobmV3IEJvbWJCYWcoKSk7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMueDtcbiAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMueTtcbiAgICAgIG5ldyBEaWFsb2dCb3goXCJBY2FiYXMgZGUgZW5jb250cmFyIHVuYSDimIwgXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tIFwiLi4vRGlhbG9nQm94XCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9QbGF5ZXJcIjtcbmltcG9ydCB7IEJvbWJCYWcgfSBmcm9tIFwiLi4vV2VhcG9ucy9CYWdCb21iXCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi4vV2VhcG9ucy9CdWxsZXRzL0J1bGxldFwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBEZXN0cnVjdGlibGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwi4omjXCIpO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEJ1bGxldCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBHdW5HbyBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgc3VwZXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgXCLilb5cIik7XG4gIH1cblxuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICBnYW1lT2JqZWN0LnggPSB0aGlzLng7XG4gICAgICBnYW1lT2JqZWN0LnkgPSB0aGlzLnk7XG4gICAgICBnYW1lT2JqZWN0Lml0ZW1zLnB1c2gobmV3IEd1bigpKTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgbmV3IERpYWxvZ0JveChcIkFjYWJhcyBkZSBlbmNvbnRyYXIgdW5hIOKVviBcIilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuLi9PcHRpb25cIjtcblxuZXhwb3J0IGNsYXNzIE9wdGlvbkRpYWxvZyB7XG4gIHB1YmxpYyBtYXRyaXg6IHN0cmluZ1tdO1xuICBwdWJsaWMgb3B0aW9uc1RlbXA6IE9wdGlvbltdO1xuICBwdWJsaWMgb3B0aW9uczogT3B0aW9uW107XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPcHRpb25bXSkge1xuICAgIHRoaXMubWF0cml4ID0gW107XG4gICAgdGhpcy5vcHRpb25zVGVtcCA9IG9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gICAgdGhpcy5pbmRleCA9IDA7XG4gICAgdGhpcy53aWR0aCA9IGdsb2JhbFRoaXMuZ2FtZS53aWR0aCAtIDI7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBnZXRPcHRpb25zKGxhc3RTY3JlZW46IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgbWF0cml4ID0gdGhpcy5vcHRpb25zW3RoaXMuaW5kZXhdLnRleHQ7XG4gICAgY29uc3QgeHlQb2ludCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiBsYXN0U2NyZWVuLmxlbmd0aCAtIG1hdHJpeC5sZW5ndGgsXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgbGFzdFNjcmVlblt4eVBvaW50LnkgKyBpXSA9IG1hdHJpeFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIGxhc3RTY3JlZW47XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLm9wdGlvbnNUZW1wLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHRzID0gWy4uLnRoaXMub3B0aW9uc1RlbXBdO1xuICAgICAgICBjb25zdCBkaWFsb2c6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGRpYWxvZy5wdXNoKGDinJYg4pWUJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gNCl94pWXIOKclmApO1xuICAgICAgICBkaWFsb2cucHVzaChg4pWU4pWQ4pWdJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIDQpfeKVmuKVkOKVl2ApO1xuICAgICAgICB0ZXh0cy5tYXAoKG9wdGlvblRlbXApID0+IHtcbiAgICAgICAgICBsZXQgdGVtcFRleHQgPSBcIlwiO1xuICAgICAgICAgIGlmIChvcHRpb25UZW1wLnRleHQgPT0gb3B0aW9uLnRleHQpIHtcbiAgICAgICAgICAgIHRlbXBUZXh0ID0gXCLinJYgXCIgKyBvcHRpb25UZW1wLnRleHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBUZXh0ID0gXCIgIFwiICsgb3B0aW9uVGVtcC50ZXh0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBsZXQgcGFkZGluZ1RleHRsZWZ0ID0gXCIgXCIucmVwZWF0KHRoaXMud2lkdGggLyA4KTtcbiAgICAgICAgICBsZXQgcGFkZGluZ1RleHRyaWdodCA9IFwiIFwiLnJlcGVhdChcbiAgICAgICAgICAgIHRoaXMud2lkdGggLSBwYWRkaW5nVGV4dGxlZnQubGVuZ3RoIC0gdGVtcFRleHQubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkaWFsb2cucHVzaChcbiAgICAgICAgICAgIGDilZEke3BhZGRpbmdUZXh0bGVmdH0ke3RlbXBUZXh0fSR7cGFkZGluZ1RleHRyaWdodH0ke1xuICAgICAgICAgICAgICB0ZW1wVGV4dC5sZW5ndGggJSAyID8gXCJcIiA6IFwiXCJcbiAgICAgICAgICAgIH3ilZFgXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlhbG9nLnB1c2goYOKVmuKVkOKVlyR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSA0KX3ilZTilZDilZ1gKTtcbiAgICAgICAgZGlhbG9nLnB1c2goYOKcliDilZoke1wi4pWQXCIucmVwZWF0KHRoaXMud2lkdGggLSA0KX3ilZ0g4pyWYCk7XG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG5ldyBPcHRpb24oZGlhbG9nLCBvcHRpb24uZnVuYykpO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWR7XG4gICAgdGhpcy5pbmRleCArPSAxO1xuICAgIGlmICh0aGlzLmluZGV4ID49IHRoaXMub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5kZXggLT0gMTtcbiAgICBpZiAodGhpcy5pbmRleCA8IDApIHtcbiAgICAgIHRoaXMuaW5kZXggPSB0aGlzLm9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICB9XG4gIH1cblxuICB0ZXh0Um93KHRleHQ6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBsZXQgYXJyYXlUZXh0ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgbGV0IHJlc3BvbnNlID0gW107XG4gICAgbGV0IHRlbXBUZXh0ID0gXCJcIjtcbiAgICB3aGlsZSAoYXJyYXlUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB0ZW1wV29yZCA9IGFycmF5VGV4dC5zaGlmdCgpO1xuICAgICAgaWYgKCh0ZW1wVGV4dCArIFwiIFwiICsgdGVtcFdvcmQpLmxlbmd0aCA+IHRoaXMud2lkdGggLyAxLjUpIHtcbiAgICAgICAgdGVtcFdvcmQgJiYgYXJyYXlUZXh0LnVuc2hpZnQodGVtcFdvcmQpO1xuICAgICAgICByZXNwb25zZS5wdXNoKHRlbXBUZXh0KTtcbiAgICAgICAgdGVtcFRleHQgPSBcIlwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVtcFRleHQgKz0gXCIgXCIgKyB0ZW1wV29yZDtcbiAgICAgIH1cbiAgICB9XG4gICAgdGVtcFRleHQgIT09IFwiXCIgJiYgcmVzcG9uc2UucHVzaCh0ZW1wVGV4dCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgVGFsa2FibGUgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgb25UYWxrOiBGdW5jdGlvbjtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbiwgY2hhcjogc3RyaW5nLCBmdW5jOiBGdW5jdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIGNoYXIgfHwgXCI/XCIpO1xuICAgIHRoaXMub25UYWxrID0gZnVuYztcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMueDtcbiAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMueTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLm9uVGFsaygpO1xuICAgICAgICAvLyB0aGlzLnRleHQubWFwKChzdHIpID0+IG5ldyBEaWFsb2dCb3goc3RyKSk7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCB7IE9wdGlvbkRpYWxvZyB9IGZyb20gXCIuL0dhbWVPYmplY3RzL09wdGlvbkRpYWxvZ1wiO1xuXG5leHBvcnQgY2xhc3MgTGlzdGVuZXJzIHtcbiAgcHVibGljIGdhbWU6IEdhbWU7XG5cbiAgY29uc3RydWN0b3IoZ2FtZTogR2FtZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrS2V5KGUsIHRoaXMuZ2FtZSk7XG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrS2V5KGU6IEtleWJvYXJkRXZlbnQsIGdhbWU6IEdhbWUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYoZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZy5sZW5ndGgpIHtcbiAgICAgIGlmKGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2dbMF0gaW5zdGFuY2VvZiBEaWFsb2dCb3gpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZihnbG9iYWxUaGlzLmdhbWUuZGlhbG9nWzBdIGluc3RhbmNlb2YgT3B0aW9uRGlhbG9nKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2dbMF0ub3B0aW9uc1tnbG9iYWxUaGlzLmdhbWUuZGlhbG9nWzBdLmluZGV4XTsgXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICAgICAgb3B0aW9uLmZ1bmMoKTtcbiAgICAgICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nLnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19VUCkge1xuICAgICAgICAgIGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2dbMF0ucHJldmlvdXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX0RPV04pIHtcbiAgICAgICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nWzBdLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19VUCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci51cCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19ET1dOKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmRvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfTEVGVCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5sZWZ0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX1JJR0hUKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnJpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmF0dGFjaygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5WKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmNoYW5nZUl0ZW0oKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmdhbWUuZHJhdygpO1NcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE9wdGlvbiB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBmdW5jOiBGdW5jdGlvbjtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcgfCBzdHJpbmdbXSwgZnVuYzogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5mdW5jID0gZnVuYztcbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQm9tYkJhZyB9IGZyb20gXCIuL1dlYXBvbnMvQmFnQm9tYlwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4vV2VhcG9ucy9HdW5cIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgaXRlbXM6IFdlYXBvbkludGVyZmFjZVtdO1xuICBwdWJsaWMgY3VycmVudEl0ZW1JbmRleDtcbiAgcHVibGljIGxpZmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgZ2FtZU9iamVjdC5jb2xsaWRlckxpc3QgPSBcIuKUj+KUgeKUk+KUg+KUo+KUq31bL1wiO1xuICAgIHN1cGVyKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LmNoYXIsIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0KTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgICB0aGlzLmxpZmUgPSA0O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuY3VycmVudEl0ZW1JbmRleF07XG4gIH1cblxuICBjaGFuZ2VJdGVtKCkge1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9XG4gICAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyAxID4gdGhpcy5pdGVtcy5sZW5ndGggLSAxXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIDE7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5jdXJyZW50SXRlbS5hdHRhY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2Uge1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmdbXTtcbiAgcHVibGljIGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PjtcbiAgcHVibGljIHBsYXllclBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IobWF0cml4OiBzdHJpbmdbXSwgcGxheWVyUG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHRoaXMubWF0cml4ID0gdGhpcy5hZGRGcmFtZShtYXRyaXgpO1xuICAgIHRoaXMucGxheWVyUG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XG4gIH1cblxuICBhZGRHYW1lT2JqZWN0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpIHtcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGdldENoYXIoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXhbeV1beF07XG4gIH1cblxuICBhZGRGcmFtZShtYXRyaXg6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG1hdHJpeFswXS5sZW5ndGg7XG4gICAgbWF0cml4ID0gbWF0cml4Lm1hcCgoeCkgPT4gXCLilZFcIiArIHguc2xpY2UoMCwgbGVuZ3RoKSArIFwi4pWRXCIpO1xuICAgIG1hdHJpeC51bnNoaWZ0KFwi4pWUXCIgKyBcIuKVkFwiLnJlcGVhdChsZW5ndGgpICsgXCLilZdcIik7XG4gICAgbWF0cml4LnB1c2goXCLilZpcIiArIFwi4pWQXCIucmVwZWF0KGxlbmd0aCkgKyBcIuKVnVwiKTtcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59XG5cbi8vIOKVlOKVkOKVkOKVl+KVmuKVneKVkVxuIiwiaW1wb3J0IHsgV2VhcG9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvV2VhcG9uXCI7XG5pbXBvcnQgeyBCb21iIH0gZnJvbSBcIi4vQnVsbGV0cy9Cb21iXCI7XG5cbmV4cG9ydCBjbGFzcyBCb21iQmFnIGltcGxlbWVudHMgV2VhcG9uSW50ZXJmYWNlIHtcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIGJ1bGxldHM6IEJvbWJbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcIkJvbWIgQmFnXCI7XG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgY29uc3QgYnVsbGV0ID0gbmV3IEJvbWIoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5mYWNpbmcpO1xuICAgIGJ1bGxldC5pbml0KCk7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KGJ1bGxldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJvbWJBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbnMvYm9tYlwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL0J1bGxldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIEJ1bGxldCB7XG4gICAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXlDb2RlOiBLZXlDb2Rlcykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIG5ldyBHYW1lT2JqZWN0KGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueCwgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci55LCBcImJcIiwgXCLilI/ilIHilJPilIPilKPilKt9W1wiKSxcbiAgICAgICAgICAgIGtleUNvZGUsXG4gICAgICAgICAgICBib21iQW5pbWF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCdWxsZXRGcmFtZSB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0J1bGxldEZyYW1lXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG4gIHByaXZhdGUgaW50ZXJ2YWw/OiBudW1iZXI7XG4gIHJlYWRvbmx5IGFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXTtcbiAgcmVhZG9ubHkgYW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBnYW1lT2JqZWN0OiBHYW1lT2JqZWN0LFxuICAgIHBsYXllckZhY2luZzogS2V5Q29kZXMsXG4gICAgYW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfVxuICApIHtcbiAgICBzdXBlcihnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5jaGFyLCBnYW1lT2JqZWN0LmNvbGxpZGVyTGlzdCk7XG4gICAgdGhpcy5hbmltYXRpb25zID0geyAuLi5hbmltYXRpb25zIH07XG4gICAgdGhpcy5odXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5hbmltYXRpb24gPSBbLi4udGhpcy5nZXRBbmltYXRpb24ocGxheWVyRmFjaW5nKV07XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcztcbiAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmKGdsb2JhbFRoaXMuZ2FtZS5pc1BhdXNlZCkgcmV0dXJuO1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmFuaW1hdGlvbi5zaGlmdCgpO1xuICAgICAgaWYgKCFmcmFtZSkge1xuICAgICAgICB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IHggKyBmcmFtZS54O1xuICAgICAgdGhpcy55ID0geSArIGZyYW1lLnk7XG4gICAgICBsZXQgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbiA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICAgIHRoaXMuY2hhciA9IGZyYW1lLmNoYXIgfHwgdGhpcy5jaGFyO1xuICAgICAgdGhpcy5odXJ0ID0gZnJhbWUuaHVydCB8fCBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuaHVydCkge1xuICAgICAgICBjb25zdCBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb25zdCBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGNvbGxpZGVTdGFnZSkgdGhpcy5vbkNvbGxpZGUoKTtcbiAgICAgICAgaWYgKGNvbGxpZGVHYW1lT2JqZWN0KSB7XG4gICAgICAgICAgdGhpcy5vbkNvbGxpZGUoKTtcbiAgICAgICAgICBjb2xsaWRlR2FtZU9iamVjdC5vbkNvbGxpZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH1cblxuICBnZXRBbmltYXRpb24ocGxheWVyRmFjaW5nOiBLZXlDb2Rlcyk6IEJ1bGxldEZyYW1lW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5hbmltYXRpb25zW3BsYXllckZhY2luZ11dO1xuICB9XG5cbiAgb25Db2xsaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcblxuICAgIHRoaXMuY2hhciA9IFwiw5dcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfSwgNTApO1xuICB9XG5cbiAgd2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pOiBHYW1lT2JqZWN0IHwgbnVsbCB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmluZChcbiAgICAgICAgKGdvKSA9PlxuICAgICAgICAgIGdvLnggPT09IHBvc2l0aW9uLnggJiZcbiAgICAgICAgICBnby55ID09PSBwb3NpdGlvbi55ICYmXG4gICAgICAgICAgZ28uaWQgIT09IHRoaXMuaWQgJiZcbiAgICAgICAgICBnby5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBndW5CdWxsZXRBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbnMvZ3VuQnVsbGV0XCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW5CdWxsZXQgZXh0ZW5kcyBCdWxsZXQge1xuICAgIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Q29kZTogS2V5Q29kZXMpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBuZXcgR2FtZU9iamVjdChnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgXCItXCIsIFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIiksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgZ3VuQnVsbGV0QW5pbWF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEd1bkJ1bGxldCB9IGZyb20gXCIuL0J1bGxldHMvR3VuQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW4gaW1wbGVtZW50cyBXZWFwb25JbnRlcmZhY2Uge1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgYnVsbGV0czogR3VuQnVsbGV0W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJHdW5cIlxuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBHdW5CdWxsZXQoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5mYWNpbmcpO1xuICAgIGJ1bGxldC5pbml0KCk7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KGJ1bGxldCk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEtleUNvZGVzIHtcbiAgQVJST1dfVVAgPSAzOCxcbiAgQVJST1dfRE9XTiA9IDQwLFxuICBBUlJPV19MRUZUID0gMzcsXG4gIEFSUk9XX1JJR0hUID0gMzksXG4gIFNQQUNFID0gMzIsXG4gIFYgPSA4NixcbiAgQyA9IDY3LFxufVxuIiwiZXhwb3J0IGNvbnN0IHNsZWVwID0gKHRpbWU6IG51bWJlcikgPT4gbmV3IFByb21pc2UoKHIpID0+IHNldFRpbWVvdXQociwgdGltZSkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEd1bkdvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9HdW5HT1wiO1xuaW1wb3J0IHsgQm9tYkJhZ0dvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9Cb21iQmFnR09cIjtcbmltcG9ydCB7IExpc3RlbmVycyB9IGZyb20gXCIuL2NsYXNzZXMvTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9jbGFzc2VzL1BsYXllclwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9jbGFzc2VzL1N0YWdlXCI7XG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuL2NsYXNzZXMvRW5lbXlcIjtcbmltcG9ydCB7IERlc3RydWN0aWJsZSB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZU9iamVjdHMvRGVzdHJ1Y3RpYmxlR09cIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuL2NsYXNzZXMvRGlhbG9nQm94XCI7XG5pbXBvcnQgeyBUYWxrYWJsZSB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZU9iamVjdHMvVGFsa2FibGVHT1wiO1xuaW1wb3J0IHsgT3B0aW9uRGlhbG9nIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9PcHRpb25EaWFsb2dcIjtcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gXCIuL2NsYXNzZXMvT3B0aW9uXCI7XG5cbmNvbnN0IHN0YWdlID0gW1xuICBcIuKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICDilJfilInilInilInilIHilInilInilInilInilInilInilInilInilInilJsgICAgICDilI8vLy8vLy8vLy8vLy/ilJMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilKMvLy8vLy8vLy8vLy/ilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMvLy8vLy8vLy8vLy/ilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAg4pSDLy8vLy8vLy8vLy8v4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilInilInilInilInilInilInilInilInilInilInilInilInilJogIOKUluKUieKUieKUieKUieKUieKUgeKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgIOKUgy8vLy8vLy8vLy8vL+KUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICDilIMvLy8vLy8vLy8vLy/ilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSj4pSB4pSB4pSB4pSB4pSTICDilI/ilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSX4pSJ4pSJ4pSJ4pSJ4pSbICDilJfilInilInilInilInilJsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilJfilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilJsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgKCDNocKwIM2cypYgzaHCsCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuXTtcblxuY29uc3Qgc3RhZ2UyID0gW1xuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuXTtcblxuY29uc3Qgc3RhZ2VPYmoxID0gbmV3IFN0YWdlKHN0YWdlLCB7eDoxLCB5OjF9KTtcbmNvbnN0IHN0YWdlT2JqMiA9IG5ldyBTdGFnZShzdGFnZTIsIHt4OjEyLCB5Ojh9KTtcblxuY29uc3QgYXNkZjIgPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgT3B0aW9uRGlhbG9nKFtcbiAgICBuZXcgT3B0aW9uKFwiU2FsaXIgZGUgbGEgY2FzYVwiLCAoKSA9PiB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY2hhbmdlU3RhZ2Uoc3RhZ2VPYmoxKTtcbiAgICAgIFxuICAgIH0pLFxuICAgIG5ldyBPcHRpb24oXCJDYW5jZWxhclwiLCAoKSA9PiB7XG4gICAgfSldKTtcbiAgZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZy5wdXNoKG9wdGlvbnMpO1xufVxuXG5zdGFnZU9iajIuYWRkR2FtZU9iamVjdChuZXcgVGFsa2FibGUoeyB4OiAxMiwgeTogOSB9LCBcIuKWhFwiLCBhc2RmMikpO1xuc3RhZ2VPYmoyLmFkZEdhbWVPYmplY3QobmV3IFRhbGthYmxlKHsgeDogMTMsIHk6IDkgfSwgXCLiloRcIiwgYXNkZjIpKTtcbnN0YWdlT2JqMi5hZGRHYW1lT2JqZWN0KG5ldyBUYWxrYWJsZSh7IHg6IDksIHk6IDMgfSwgXCJNXCIsICgpID0+IHtcbiAgbmV3IERpYWxvZ0JveChcIkVzIG11eSBwZWxpZ3Jvc28gc2FsaXIgc2luIG5hZGEsIHRlbiBlc3RhIGJvbWJhIHBhcmEgcXVlIG5vIHRlIGhhZ2FuIGRhw7FvXCIpO1xuICBzdGFnZU9iajIuYWRkR2FtZU9iamVjdChuZXcgQm9tYkJhZ0dvKHsgeDogMTAsIHk6IDMgfSkpXG59KSk7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIobmV3IEdhbWVPYmplY3QoMywgMywgXCJPXCIpKTtcbmdsb2JhbFRoaXMuZ2FtZSA9IG5ldyBHYW1lKFxuICBcImdhbWVcIixcbiAgNjAsXG4gIDIwLFxuICBwbGF5ZXIsXG4gIHN0YWdlT2JqMVxuKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgR3VuR28oeyB4OiAxMCwgeTogNiB9KSk7XG5cbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNSB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA3IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogMyB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDQgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MywgeTogNyB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDEsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQyLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDAsIHk6IDQgfSkpO1xuXG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IERlc3RydWN0aWJsZSh7IHg6IDE1LCB5OiA3IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRGVzdHJ1Y3RpYmxlKHsgeDogMTYsIHk6IDcgfSkpO1xuXG5jb25zdCBhc2RmID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25zID0gbmV3IE9wdGlvbkRpYWxvZyhbXG4gICAgbmV3IE9wdGlvbihcIkVudHJhciBhIGxhIGNhc2FcIiwgKCkgPT4ge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmNoYW5nZVN0YWdlKHN0YWdlT2JqMik7XG4gICAgfSksXG4gICAgbmV3IE9wdGlvbihcIkNhbmNlbGFyXCIsICgpID0+IHtcbiAgICB9KV0pO1xuICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZy5wdXNoKG9wdGlvbnMpO1xufVxuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KFxuICBuZXcgVGFsa2FibGUoeyB4OiA0NCwgeTogMTQgfSwgXCIgXCIsIGFzZGYpXG4pO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KFxuICBuZXcgVGFsa2FibGUoeyB4OiA0NSwgeTogMTQgfSwgXCIgXCIsIGFzZGYpXG4pO1xuc2V0VGltZW91dCgoKSA9PiB7XG4gIG5ldyBEaWFsb2dCb3goXCJ0aGlzIGlzIGEgRGlhbG9nIEJveFwiKTtcbn0sIDEwMDApO1xuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXJzKGdsb2JhbFRoaXMuZ2FtZSk7XG5saXN0ZW5lci5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=