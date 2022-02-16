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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Enemy = void 0;
const GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/classes/GameObject.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/classes/Player.ts");
const Bullet_1 = __webpack_require__(/*! ./Weapons/Bullets/Bullet */ "./src/classes/Weapons/Bullets/Bullet.ts");
class Enemy extends GameObject_1.GameObject {
    constructor(position) {
        super(position.x, position.y, "K");
    }
    onCollide(gameObject) {
        if (gameObject instanceof Player_1.Player) {
            gameObject.life--;
        }
        if (gameObject instanceof Bullet_1.Bullet) {
            this.destroy();
        }
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
            console.log(this.dialog.getDialog(__classPrivateFieldGet(this, _Game_lastScreen, "f")));
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
        const paddingWord = " ".repeat(((this.width) - text.length) / 2);
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
            console.log("bullet destroyed by itself");
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
    "                                                                                      ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCO0lBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVyxzQkFBYyxHQUF1QztJQUM5RCxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVztJQUNoQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYztDQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZGRiw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBa0I7SUFDL0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDakMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVywyQkFBbUIsR0FBdUM7SUFDbkUsQ0FBQyxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVc7SUFDaEMsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7SUFDcEMsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7SUFDcEMsQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWM7Q0FDekMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNwREYsTUFBYSxTQUFTO0lBS3BCLFlBQVksSUFBWTtRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFFYixDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQW9CO1FBQzVCLE1BQU0sT0FBTyxHQUFHO1lBQ1osQ0FBQyxFQUFFLENBQUM7WUFDSixDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07U0FDekMsQ0FBQztRQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztDQUNGO0FBcENELDhCQW9DQzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsNEZBQTBDO0FBQzFDLGdGQUFrQztBQUNsQyxnSEFBa0Q7QUFFbEQsTUFBYSxLQUFNLFNBQVEsdUJBQVU7SUFDbkMsWUFBWSxRQUE0QjtRQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsVUFBc0I7UUFDOUIsSUFBSSxVQUFVLFlBQVksZUFBTSxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksVUFBVSxZQUFZLGVBQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0NBQ0Y7QUFiRCxzQkFhQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxNQUFhLElBQUk7SUFhZixZQUNFLGFBQXFCLEVBQ3JCLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLEtBQVk7UUFQZCxtQ0FBc0I7UUFTcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBbUIsQ0FDaEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzVDLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLDJCQUFJLG9CQUFlLEVBQUUsT0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsV0FBbUI7UUFDdkQsT0FBTyxDQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNwQixXQUFXO1lBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUN2QyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLDJCQUFJLHdCQUFZLENBQUMsQ0FBQztZQUNwRCwyQkFBSSxvQkFBZSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQywyQkFBSSx3QkFBWSxDQUFDLE9BQUM7WUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsMkJBQUksd0JBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE1BQU0sTUFBTSxHQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQ2hELENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTO2dCQUNsRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztnQkFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsMkJBQUksb0JBQWUsS0FBSzthQUNyQixLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFDO1FBQzVELDJCQUFJLHdCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLDJCQUFJLHdCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxPQUFPOztRQUNMLE1BQU0sTUFBTSxHQUFHLFVBQUksQ0FBQyxNQUFNLENBQUMsV0FBVywwQ0FBRSxJQUFJLENBQUM7UUFDN0MsT0FBTyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FDMUMsTUFBTSxJQUFJLE1BQ1osRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztRQUM1QixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxXQUFXLEdBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6RCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUExR0Qsb0JBMEdDOzs7Ozs7Ozs7Ozs7Ozs7QUM5R0QsOEZBQThDO0FBRzlDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQVlsQyxNQUFhLFVBQVU7SUFRckIsWUFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQVksRUFBRSxlQUF1QixFQUFFO1FBQ3ZFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVEsQ0FBQyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQTRCO1FBQzNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxRQUE0QjtRQUNoRCxPQUFPLENBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDM0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUNMLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQztZQUNuQixFQUFFLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUNoRCxJQUFJLElBQUksQ0FDVixDQUFDO0lBQ0osQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFlO1FBQ3JCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLGlCQUFpQixHQUFzQixJQUFJLENBQUM7UUFDaEQsSUFBSSxRQUE0QixDQUFDO1FBQ2pDLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxvQkFBUSxDQUFDLFFBQVE7Z0JBQ3BCLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLGlCQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxVQUFVO2dCQUN0QixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1IsS0FBSyxvQkFBUSxDQUFDLFdBQVc7Z0JBQ3ZCLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07WUFDUjtnQkFDRSxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE1BQU07U0FDVDtRQUVELElBQUksaUJBQWlCLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2xDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sWUFBWSxJQUFJLGlCQUFpQixDQUFDO0lBQzNDLENBQUM7SUFFRCxTQUFTLENBQUMsVUFBc0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFO1FBQ0EsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBUSxDQUFDLFFBQVEsQ0FBQztRQUNoQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU07WUFDdkQsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQ2xDO1lBQ0EsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBUSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFRLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQ0UsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07WUFDMUQsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQ25DO1lBQ0EsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVztZQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUM3QyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUMxQixDQUFDO0lBQ04sQ0FBQztDQUNGO0FBdEhELGdDQXNIQzs7Ozs7Ozs7Ozs7Ozs7QUNwSUQsMEZBQXlDO0FBQ3pDLDZGQUEyQztBQUMzQyxpRkFBbUM7QUFDbkMsb0dBQTZDO0FBRzdDLE1BQWEsU0FBVSxTQUFRLHVCQUFVO0lBQ3ZDLFlBQVksUUFBNEI7UUFDdEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQXNCO1FBQzlCLElBQUksVUFBVSxZQUFZLGVBQU0sRUFBRTtZQUNoQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQVMsQ0FBQyw0QkFBNEIsQ0FBQztTQUNyRTtJQUNILENBQUM7Q0FDRjtBQVpELDhCQVlDOzs7Ozs7Ozs7Ozs7OztBQ2xCRCwwRkFBeUM7QUFDekMsNkZBQTJDO0FBQzNDLGlGQUFtQztBQUNuQyx3RkFBcUM7QUFFckMsTUFBYSxLQUFNLFNBQVEsdUJBQVU7SUFDbkMsWUFBWSxRQUE0QjtRQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsVUFBc0I7UUFDOUIsSUFBSSxVQUFVLFlBQVksZUFBTSxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksU0FBRyxFQUFFLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsNEJBQTRCLENBQUM7U0FDckU7SUFDSCxDQUFDO0NBQ0Y7QUFaRCxzQkFZQzs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsOEZBQThDO0FBRzlDLE1BQWEsU0FBUztJQUdwQixZQUFZLElBQVU7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQUk7UUFDRixRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBZ0IsRUFBRSxJQUFVO1FBQ25DLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0QixJQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLEtBQUssRUFBRTtnQkFDaEMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQy9CO1lBQ0QsT0FBTTtTQUNQO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFVBQVUsRUFBRTtZQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFVBQVUsRUFBRTtZQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFdBQVcsRUFBRTtZQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLEtBQUssRUFBRTtZQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQzthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQztJQUdILENBQUM7Q0FDRjtBQXJDRCw4QkFxQ0M7Ozs7Ozs7Ozs7Ozs7O0FDdENELDRGQUEwQztBQUkxQyxNQUFhLE1BQU8sU0FBUSx1QkFBVTtJQUtwQyxZQUFZLFVBQXNCO1FBQ2hDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQjtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUEzQkQsd0JBMkJDOzs7Ozs7Ozs7Ozs7OztBQzlCRCxNQUFhLEtBQUs7SUFLaEIsWUFBWSxNQUFnQixFQUFFLGNBQWtDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBZ0I7UUFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUExQkQsc0JBMEJDOzs7Ozs7Ozs7Ozs7OztBQzVCRCxrR0FBc0M7QUFFdEMsTUFBYSxPQUFPO0lBSWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBZEQsMEJBY0M7Ozs7Ozs7Ozs7Ozs7O0FDakJELCtGQUEwRDtBQUUxRCxnR0FBOEM7QUFDOUMsZ0dBQWtDO0FBRWxDLE1BQWEsSUFBSyxTQUFRLGVBQU07SUFHNUIsWUFBWSxPQUFpQjtRQUN6QixLQUFLLENBQ0QsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUNuRixPQUFPLEVBQ1AscUJBQWMsQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQVhELG9CQVdDOzs7Ozs7Ozs7Ozs7OztBQ2JELGdHQUE4QztBQUU5QyxNQUFhLE1BQU8sU0FBUSx1QkFBVTtJQU1wQyxZQUNFLFVBQXNCLEVBQ3RCLFlBQXNCLEVBQ3RCLFVBQThDO1FBRTlDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUscUJBQVEsVUFBVSxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxRQUFRLEdBQXVCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1lBRWhDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDYixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFlBQVk7b0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLGlCQUFpQixFQUFFO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxZQUFZLENBQUMsWUFBc0I7UUFDakMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Q0FDRjtBQTFERCx3QkEwREM7Ozs7Ozs7Ozs7Ozs7O0FDL0RELDhHQUFvRTtBQUVwRSxnR0FBOEM7QUFDOUMsZ0dBQWtDO0FBRWxDLE1BQWEsU0FBVSxTQUFRLGVBQU07SUFHakMsWUFBWSxPQUFpQjtRQUN6QixLQUFLLENBQ0QsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUNuRixPQUFPLEVBQ1AsK0JBQW1CLENBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFYRCw4QkFXQzs7Ozs7Ozs7Ozs7Ozs7QUNmRCxpSEFBZ0Q7QUFFaEQsTUFBYSxHQUFHO0lBSWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUs7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQWRELGtCQWNDOzs7Ozs7Ozs7Ozs7OztBQ2pCRCxJQUFZLFFBUVg7QUFSRCxXQUFZLFFBQVE7SUFDbEIsZ0RBQWE7SUFDYixvREFBZTtJQUNmLG9EQUFlO0lBQ2Ysc0RBQWdCO0lBQ2hCLDBDQUFVO0lBQ1Ysa0NBQU07SUFDTixrQ0FBTTtBQUNSLENBQUMsRUFSVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQVFuQjs7Ozs7OztVQ1JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ3RCQSxrRkFBc0M7QUFDdEMsb0dBQWtEO0FBQ2xELDZHQUFvRDtBQUNwRCx5SEFBNEQ7QUFDNUQsaUdBQWdEO0FBQ2hELHdGQUEwQztBQUMxQyxxRkFBd0M7QUFDeEMscUZBQXdDO0FBRXhDLE1BQU0sS0FBSyxHQUFHO0lBQ1osd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0NBQ3pGLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JELFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQ3hCLE1BQU0sRUFDTixFQUFFLEVBQ0YsRUFBRSxFQUNGLE1BQU0sRUFDTixJQUFJLGFBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUNqQyxDQUFDO0FBRUYsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLHFCQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFM0UsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RSxNQUFNLFFBQVEsR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2FuaW1hdGlvbnMvYm9tYi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9hbmltYXRpb25zL2d1bkJ1bGxldC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0RpYWxvZ0JveC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0VuZW15LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lT2JqZWN0cy9Cb21iQmFnR08udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lT2JqZWN0cy9HdW5HTy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0xpc3RlbmVycy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1BsYXllci50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1N0YWdlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9CYWdCb21iLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9CdWxsZXRzL0JvbWIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0J1bGxldHMvQnVsbGV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9CdWxsZXRzL0d1bkJ1bGxldC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvR3VuLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdWxsZXRGcmFtZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0J1bGxldEZyYW1lXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcblxuY29uc3QgcmlnaHRBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB5OiAtMSwgeDogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4oqXXCIgfSxcbiAgICB7IHk6IDAsIHg6IDksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgZG93bkFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHg6IC0xLCB5OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLiipdcIiB9LFxuICAgIHsgeDogMCwgeTogOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCB1cEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHg6IC0xLCB5OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4oqXXCIgfSxcbiAgICB7IHg6IDAsIHk6IC05LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGxlZnRBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB5OiAtMSwgeDogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAwLCB4OiAtOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgYm9tYkFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH0gPSB7XG4gICAgW0tleUNvZGVzLkFSUk9XX1VQXTogdXBBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0RPV05dOiBkb3duQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19MRUZUXTogbGVmdEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfUklHSFRdOiByaWdodEFuaW1hdGlvbixcbn07IiwiaW1wb3J0IHsgQnVsbGV0RnJhbWUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9CdWxsZXRGcmFtZVwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJpZ2h0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogMCwgeDogMSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogMiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogMywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogNCwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogNSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogNiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogNywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCB1cEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHg6IDAsIHk6IC0xLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogLTIsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC0zLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNCwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTUsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC02LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgZG93bkFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHg6IDAsIHk6IDEsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiAyLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogMywgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDQsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA1LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNiwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDcsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA4LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGxlZnRBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB5OiAwLCB4OiAtMSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTIsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC0zLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNCwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTUsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC02LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGd1bkJ1bGxldEFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH0gPSB7XG4gICAgW0tleUNvZGVzLkFSUk9XX1VQXTogdXBBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0RPV05dOiBkb3duQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19MRUZUXTogbGVmdEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfUklHSFRdOiByaWdodEFuaW1hdGlvbixcbn07IiwiZXhwb3J0IGNsYXNzIERpYWxvZ0JveCB7XG4gIHB1YmxpYyBtYXRyaXg6IHN0cmluZ1tdO1xuICBwdWJsaWMgdGV4dDogc3RyaW5nO1xuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1hdHJpeCA9IFtdO1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy53aWR0aCA9IGdsb2JhbFRoaXMuZ2FtZS53aWR0aDtcbiAgICB0aGlzLmluaXQoKVxuXG4gIH1cblxuICBnZXREaWFsb2cobGFzdFNjcmVlbjogc3RyaW5nW10pIHtcbiAgICBjb25zdCB4eVBvaW50ID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiBsYXN0U2NyZWVuLmxlbmd0aC0gdGhpcy5tYXRyaXgubGVuZ3RoLFxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXRyaXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGFzdFNjcmVlblt4eVBvaW50LnkraV0gPSB0aGlzLm1hdHJpeFtpXSAgICAgICAgXG4gICAgICB9XG4gICAgICByZXR1cm4gbGFzdFNjcmVlbjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgZGlhbG9nOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuICAgIGNvbnN0IHBhZGRpbmdXb3JkID0gXCIgXCIucmVwZWF0KCh0aGlzLndpZHRoIC0gdGhpcy50ZXh0Lmxlbmd0aCkgLyAyKTtcbiAgICBkaWFsb2cucHVzaChg4pWUJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVl2ApO1xuICAgIGRpYWxvZy5wdXNoKGDilZEke1wiIFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVkWApO1xuICAgIGRpYWxvZy5wdXNoKGDilZEke3BhZGRpbmdXb3JkfSR7dGhpcy50ZXh0fSR7cGFkZGluZ1dvcmR94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVmiR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZ1gKTtcbiAgICB0aGlzLm1hdHJpeCA9IGRpYWxvZztcbiAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi9XZWFwb25zL0J1bGxldHMvQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBFbmVteSBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgc3VwZXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgXCJLXCIpO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5saWZlLS07XG4gICAgfVxuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgQnVsbGV0KSB7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL1N0YWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcmVhZG9ubHkgbWFpbkVsZW1lbnRJZDogc3RyaW5nO1xuICByZWFkb25seSBwcmVFbGVtZW50OiBIVE1MUHJlRWxlbWVudDtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGhhbGZXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBoYWxmSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHBsYXllcjogUGxheWVyO1xuICBwdWJsaWMgY3VycmVudFN0YWdlOiBTdGFnZTtcbiAgcHVibGljIGRpYWxvZzogRGlhbG9nQm94IHwgbnVsbDtcbiAgI2xhc3RTY3JlZW46IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1haW5FbGVtZW50SWQ6IHN0cmluZyxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHBsYXllcjogUGxheWVyLFxuICAgIHN0YWdlOiBTdGFnZVxuICApIHtcbiAgICB0aGlzLm1haW5FbGVtZW50SWQgPSBtYWluRWxlbWVudElkO1xuICAgIHRoaXMucHJlRWxlbWVudCA9IDxIVE1MUHJlRWxlbWVudD4oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5FbGVtZW50SWQpXG4gICAgKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5oYWxmV2lkdGggPSB3aWR0aCAvIDI7XG4gICAgdGhpcy5oYWxmSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMuI2xhc3RTY3JlZW4gPSBbXTtcbiAgICB0aGlzLmRpYWxvZyA9IG51bGw7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfSwgNDAgLyAxMDAwKTtcbiAgfVxuXG4gIHJlcGxhY2VBdChzdHI6IHN0cmluZywgaW5kZXg6IG51bWJlciwgcmVwbGFjZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN0ci5zdWJzdHIoMCwgaW5kZXgpICtcbiAgICAgIHJlcGxhY2VtZW50ICtcbiAgICAgIHN0ci5zdWJzdHIoaW5kZXggKyByZXBsYWNlbWVudC5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRpYWxvZy5nZXREaWFsb2codGhpcy4jbGFzdFNjcmVlbikpXG4gICAgICB0aGlzLiNsYXN0U2NyZWVuID0gdGhpcy5kaWFsb2cuZ2V0RGlhbG9nKHRoaXMuI2xhc3RTY3JlZW4pO1xuICAgICAgdGhpcy5wcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuI2xhc3RTY3JlZW4uam9pbihcIlxcblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmF3U3RhZ2UoKTtcbiAgfVxuXG4gIGRyYXdTdGFnZSgpIHtcbiAgICBsZXQgYXJyYXkgPSBbLi4udGhpcy5jdXJyZW50U3RhZ2UubWF0cml4XTtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5mb3JFYWNoKChnbykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yZXBsYWNlQXQoYXJyYXlbZ28ueV0sIGdvLngsIGdvLmNoYXIpO1xuICAgICAgYXJyYXlbZ28ueV0gPSByb3c7XG4gICAgfSk7XG4gICAgY29uc3QgeCA9IHRoaXMucmVwbGFjZUF0KFxuICAgICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0sXG4gICAgICB0aGlzLnBsYXllci54LFxuICAgICAgdGhpcy5wbGF5ZXIuY2hhclxuICAgICk7XG4gICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0gPSB4O1xuICAgIC8vIHRyaW0gYXJyYXkgYnkgcGxheWVyIHBvc2l0aW9uXG4gICAgY29uc3QgeVJhbmdlID1cbiAgICAgIHRoaXMucGxheWVyLnkgPCB0aGlzLmhhbGZIZWlnaHRcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSA+IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGFsZkhlaWdodFxuICAgICAgICA/IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSAtIHRoaXMuaGFsZkhlaWdodDtcblxuICAgIGNvbnN0IHhSYW5nZSA9XG4gICAgICB0aGlzLnBsYXllci54IDwgdGhpcy5oYWxmV2lkdGhcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueCA+IGFycmF5WzBdLmxlbmd0aCAtIHRoaXMuaGFsZldpZHRoXG4gICAgICAgID8gYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy53aWR0aFxuICAgICAgICA6IHRoaXMucGxheWVyLnggLSB0aGlzLmhhbGZXaWR0aDtcbiAgICB0aGlzLiNsYXN0U2NyZWVuID0gYXJyYXlcbiAgICAgIC5zbGljZSh5UmFuZ2UsIHlSYW5nZSArIHRoaXMuaGVpZ2h0KVxuICAgICAgLm1hcCgocm93KSA9PiByb3cuc3Vic3RyaW5nKHhSYW5nZSwgeFJhbmdlICsgdGhpcy53aWR0aCkpO1xuICAgIHRoaXMuI2xhc3RTY3JlZW4udW5zaGlmdCh0aGlzLmluZm9CYXIoKSk7XG4gICAgdGhpcy5wcmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuI2xhc3RTY3JlZW4uam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGluZm9CYXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWFwb24gPSB0aGlzLnBsYXllci5jdXJyZW50SXRlbT8ubmFtZTtcbiAgICByZXR1cm4gYExpZmU6JHtcIiDimaVcIi5yZXBlYXQodGhpcy5wbGF5ZXIubGlmZSl9IC0gV2VhcG9uOiAke1xuICAgICAgd2VhcG9uIHx8IFwibnVsbFwiXG4gICAgfWA7XG4gIH1cblxuICBjcmVhdGVEaWFsb2codGV4dDogc3RyaW5nKSB7XG4gICAgY29uc3QgZGlhbG9nOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IHBhZGRpbmcgPSAwO1xuICAgIGNvbnN0IHBhZGRpbmdXb3JkID0gIFwiIFwiLnJlcGVhdCgoKHRoaXMud2lkdGgpIC0gdGV4dC5sZW5ndGggKS8gMik7XG4gICAgZGlhbG9nLnB1c2goYOKVlCR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZdgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtwYWRkaW5nV29yZH0ke3RleHR9JHtwYWRkaW5nV29yZH3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWaJHtcIuKVkFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVnWApO1xuICAgIHJldHVybiBkaWFsb2c7XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5cbmNvbnN0IEdsb2JhbENvbGxpZGVycyA9IFwi4pWU4pWQ4pWQ4pWX4pWa4pWd4pWRXCI7XG5cbmludGVyZmFjZSBHYW1lT2JqZWN0SW50ZXJmYWNlIHtcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGNoYXI6IHN0cmluZztcbiAgY29sbGlkZXJMaXN0OiBzdHJpbmc7XG4gIGZhY2luZzogS2V5Q29kZXM7XG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBHYW1lT2JqZWN0SW50ZXJmYWNlIHtcbiAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgcHVibGljIHg6IG51bWJlcjtcbiAgcHVibGljIHk6IG51bWJlcjtcbiAgcHVibGljIGNoYXI6IHN0cmluZztcbiAgcHVibGljIGNvbGxpZGVyTGlzdDogc3RyaW5nO1xuICBwdWJsaWMgZmFjaW5nOiBLZXlDb2RlcztcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgY2hhcjogc3RyaW5nLCBjb2xsaWRlckxpc3Q6IHN0cmluZyA9IFwiXCIpIHtcbiAgICB0aGlzLmlkID0gKE1hdGgucmFuZG9tKCkgKyAxKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmNoYXIgPSBjaGFyO1xuICAgIHRoaXMuY29sbGlkZXJMaXN0ID0gY29sbGlkZXJMaXN0ICsgR2xvYmFsQ29sbGlkZXJzO1xuICAgIHRoaXMuZmFjaW5nID0gS2V5Q29kZXMuQVJST1dfUklHSFQ7XG4gIH1cblxuICB3aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2xsaWRlckxpc3QuaW5jbHVkZXMoXG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdldENoYXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSlcbiAgICApO1xuICB9XG5cbiAgd2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pOiBHYW1lT2JqZWN0IHwgbnVsbCB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmluZChcbiAgICAgICAgKGdvKSA9PlxuICAgICAgICAgIGdvLnggPT09IHBvc2l0aW9uLnggJiZcbiAgICAgICAgICBnby55ID09PSBwb3NpdGlvbi55ICYmXG4gICAgICAgICAgZ28uaWQgIT09IHRoaXMuaWQgJiZcbiAgICAgICAgICBnby5jb25zdHJ1Y3Rvci5uYW1lICE9PSB0aGlzLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICkgfHwgbnVsbFxuICAgICk7XG4gIH1cblxuICBjb2xsaWRlKGFycm93OiBLZXlDb2Rlcykge1xuICAgIGxldCBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICBsZXQgY29sbGlkZUdhbWVPYmplY3Q6IEdhbWVPYmplY3QgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbjtcbiAgICBzd2l0Y2ggKGFycm93KSB7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX1VQOlxuICAgICAgICBwb3NpdGlvbiA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgLSAxIH07XG4gICAgICAgIGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZXMuQVJST1dfRE9XTjpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55ICsgMSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX0xFRlQ6XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLnggLSAxLCB5OiB0aGlzLnkgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19SSUdIVDpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCArIDEsIHk6IHRoaXMueSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb2xsaWRlU3RhZ2UgPSBmYWxzZTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSBudWxsO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoY29sbGlkZUdhbWVPYmplY3QpIHtcbiAgICAgIHRoaXMub25Db2xsaWRlKGNvbGxpZGVHYW1lT2JqZWN0KTtcbiAgICAgIGNvbGxpZGVHYW1lT2JqZWN0Lm9uQ29sbGlkZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sbGlkZVN0YWdlIHx8IGNvbGxpZGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHVwKCkge1xuICAgIHRoaXMuZmFjaW5nID0gS2V5Q29kZXMuQVJST1dfVVA7XG4gICAgaWYgKHRoaXMueSAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX1VQKSkge1xuICAgICAgdGhpcy55IC09IDE7XG4gICAgfVxuICB9XG5cbiAgZG93bigpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0RPV047XG4gICAgaWYgKFxuICAgICAgdGhpcy55ICsgMSA8IGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UubWF0cml4Lmxlbmd0aCAmJlxuICAgICAgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19ET1dOKVxuICAgICkge1xuICAgICAgdGhpcy55ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgbGVmdCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX0xFRlQ7XG4gICAgaWYgKHRoaXMueCAtIDEgPj0gMCAmJiAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX0xFRlQpKSB7XG4gICAgICB0aGlzLnggLT0gMTtcbiAgICB9XG4gIH1cblxuICByaWdodCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICAgIGlmIChcbiAgICAgIHRoaXMueCArIDEgPCBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeFswXS5sZW5ndGggJiZcbiAgICAgICF0aGlzLmNvbGxpZGUoS2V5Q29kZXMuQVJST1dfUklHSFQpXG4gICAgKSB7XG4gICAgICB0aGlzLnggKz0gMTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMgPVxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5maWx0ZXIoXG4gICAgICAgIChnbykgPT4gZ28uaWQgIT09IHRoaXMuaWRcbiAgICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSBcIi4uL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgeyBCb21iQmFnIH0gZnJvbSBcIi4uL1dlYXBvbnMvQmFnQm9tYlwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBCb21iQmFnR28gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwi4piMXCIpO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5pdGVtcy5wdXNoKG5ldyBCb21iQmFnKCkpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gbmV3IERpYWxvZ0JveChcIkFjYWJhcyBkZSBlbmNvbnRyYXIgdW5hIOKYjCBcIilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgRGlhbG9nQm94IH0gZnJvbSBcIi4uL0RpYWxvZ0JveFwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vUGxheWVyXCI7XG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi4vV2VhcG9ucy9HdW5cIjtcblxuZXhwb3J0IGNsYXNzIEd1bkdvIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIuKVvlwiKTtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QuaXRlbXMucHVzaChuZXcgR3VuKCkpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gbmV3IERpYWxvZ0JveChcIkFjYWJhcyBkZSBlbmNvbnRyYXIgdW5hIOKVviBcIilcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIExpc3RlbmVycyB7XG4gIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGhpcy5jaGVja0tleShlLCB0aGlzLmdhbWUpO1xuICAgIH07XG4gIH1cblxuICBjaGVja0tleShlOiBLZXlib2FyZEV2ZW50LCBnYW1lOiBHYW1lKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmKGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2cpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICAgIGdsb2JhbFRoaXMuZ2FtZS5kaWFsb2cgPSBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfTtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19VUCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci51cCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19ET1dOKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmRvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfTEVGVCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5sZWZ0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX1JJR0hUKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnJpZ2h0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmF0dGFjaygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5WKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmNoYW5nZUl0ZW0oKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmdhbWUuZHJhdygpO1NcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2VhcG9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvV2VhcG9uXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vR2FtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJvbWJCYWcgfSBmcm9tIFwiLi9XZWFwb25zL0JhZ0JvbWJcIjtcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIGl0ZW1zOiBXZWFwb25JbnRlcmZhY2VbXTtcbiAgcHVibGljIGN1cnJlbnRJdGVtSW5kZXg7XG4gIHB1YmxpYyBsaWZlOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0ID0gXCLilI/ilIHilJPilIPilKPilKt9W1wiO1xuICAgIHN1cGVyKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LmNoYXIsIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0KTtcbiAgICB0aGlzLml0ZW1zID0gW107XG4gICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgICB0aGlzLmxpZmUgPSA0O1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuY3VycmVudEl0ZW1JbmRleF07XG4gIH1cblxuICBjaGFuZ2VJdGVtKCkge1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9XG4gICAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyAxID4gdGhpcy5pdGVtcy5sZW5ndGggLSAxXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIDE7XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgdGhpcy5jdXJyZW50SXRlbS5hdHRhY2soKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgU3RhZ2Uge1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmdbXTtcbiAgcHVibGljIGdhbWVPYmplY3RzOiBBcnJheTxHYW1lT2JqZWN0PjtcbiAgcHJpdmF0ZSBwbGF5ZXJQb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKG1hdHJpeDogc3RyaW5nW10sIHBsYXllclBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMuYWRkRnJhbWUobWF0cml4KTtcbiAgICB0aGlzLnBsYXllclBvc2l0aW9uID0gcGxheWVyUG9zaXRpb247XG4gICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xuICB9XG5cbiAgYWRkR2FtZU9iamVjdChnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2goZ2FtZU9iamVjdCk7XG4gIH1cblxuICBnZXRDaGFyKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4W3ldW3hdO1xuICB9XG5cbiAgYWRkRnJhbWUobWF0cml4OiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBsZW5ndGggPSBtYXRyaXhbMF0ubGVuZ3RoO1xuICAgIG1hdHJpeCA9IG1hdHJpeC5tYXAoKHgpID0+IFwi4pWRXCIgKyB4LnNsaWNlKDAsIGxlbmd0aCkgKyBcIuKVkVwiKTtcbiAgICBtYXRyaXgudW5zaGlmdChcIuKVlFwiICsgXCLilZBcIi5yZXBlYXQobGVuZ3RoKSArIFwi4pWXXCIpO1xuICAgIG1hdHJpeC5wdXNoKFwi4pWaXCIgKyBcIuKVkFwiLnJlcGVhdChsZW5ndGgpICsgXCLilZ1cIik7XG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxufVxuXG4vLyDilZTilZDilZDilZfilZrilZ3ilZFcbiIsImltcG9ydCB7IFdlYXBvbkludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1dlYXBvblwiO1xuaW1wb3J0IHsgQm9tYiB9IGZyb20gXCIuL0J1bGxldHMvQm9tYlwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYkJhZyBpbXBsZW1lbnRzIFdlYXBvbkludGVyZmFjZSB7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBidWxsZXRzOiBCb21iW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJCb21iIEJhZ1wiO1xuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBCb21iKGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIuZmFjaW5nKTtcbiAgICBidWxsZXQuaW5pdCgpO1xuICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChidWxsZXQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBib21iQW5pbWF0aW9ucyB9IGZyb20gXCIuLi8uLi8uLi9hbmltYXRpb25zL2JvbWJcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi9CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEJvbWIgZXh0ZW5kcyBCdWxsZXQge1xuICAgIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Q29kZTogS2V5Q29kZXMpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBuZXcgR2FtZU9iamVjdChnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgXCJiXCIsIFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIiksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgYm9tYkFuaW1hdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5odXJ0ID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQnVsbGV0RnJhbWUgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9CdWxsZXRGcmFtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuICBwcml2YXRlIGludGVydmFsPzogbnVtYmVyO1xuICByZWFkb25seSBhbmltYXRpb246IEJ1bGxldEZyYW1lW107XG4gIHJlYWRvbmx5IGFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZ2FtZU9iamVjdDogR2FtZU9iamVjdCxcbiAgICBwbGF5ZXJGYWNpbmc6IEtleUNvZGVzLFxuICAgIGFuaW1hdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBCdWxsZXRGcmFtZVtdIH1cbiAgKSB7XG4gICAgc3VwZXIoZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnksIGdhbWVPYmplY3QuY2hhciwgZ2FtZU9iamVjdC5jb2xsaWRlckxpc3QpO1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IHsgLi4uYW5pbWF0aW9ucyB9O1xuICAgIHRoaXMuaHVydCA9IGZhbHNlO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gWy4uLnRoaXMuZ2V0QW5pbWF0aW9uKHBsYXllckZhY2luZyldO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXM7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZSA9IHRoaXMuYW5pbWF0aW9uLnNoaWZ0KCk7XG4gICAgICBpZiAoIWZyYW1lKSB7XG4gICAgICAgIHRoaXMub25Db2xsaWRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy54ID0geCArIGZyYW1lLng7XG4gICAgICB0aGlzLnkgPSB5ICsgZnJhbWUueTtcbiAgICAgIGxldCBwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xuICAgICAgdGhpcy5jaGFyID0gZnJhbWUuY2hhciB8fCB0aGlzLmNoYXI7XG4gICAgICB0aGlzLmh1cnQgPSBmcmFtZS5odXJ0IHx8IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5odXJ0KSB7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbnN0IGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBpZiAoY29sbGlkZVN0YWdlKSB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICBpZiAoY29sbGlkZUdhbWVPYmplY3QpIHtcbiAgICAgICAgICB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0Lm9uQ29sbGlkZSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfVxuXG4gIGdldEFuaW1hdGlvbihwbGF5ZXJGYWNpbmc6IEtleUNvZGVzKTogQnVsbGV0RnJhbWVbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmFuaW1hdGlvbnNbcGxheWVyRmFjaW5nXV07XG4gIH1cblxuICBvbkNvbGxpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5pbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuXG4gICAgdGhpcy5jaGFyID0gXCLDl1wiO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImJ1bGxldCBkZXN0cm95ZWQgYnkgaXRzZWxmXCIpO1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfSwgNTApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBndW5CdWxsZXRBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbnMvZ3VuQnVsbGV0XCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW5CdWxsZXQgZXh0ZW5kcyBCdWxsZXQge1xuICAgIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Q29kZTogS2V5Q29kZXMpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBuZXcgR2FtZU9iamVjdChnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgXCItXCIsIFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIiksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgZ3VuQnVsbGV0QW5pbWF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEd1bkJ1bGxldCB9IGZyb20gXCIuL0J1bGxldHMvR3VuQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW4gaW1wbGVtZW50cyBXZWFwb25JbnRlcmZhY2Uge1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgYnVsbGV0czogR3VuQnVsbGV0W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJHdW5cIlxuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBHdW5CdWxsZXQoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5mYWNpbmcpO1xuICAgIGJ1bGxldC5pbml0KCk7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KGJ1bGxldCk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEtleUNvZGVzIHtcbiAgQVJST1dfVVAgPSAzOCxcbiAgQVJST1dfRE9XTiA9IDQwLFxuICBBUlJPV19MRUZUID0gMzcsXG4gIEFSUk9XX1JJR0hUID0gMzksXG4gIFNQQUNFID0gMzIsXG4gIFYgPSA4NixcbiAgQyA9IDY3LFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEd1bkdvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9HdW5HT1wiO1xuaW1wb3J0IHsgQm9tYkJhZ0dvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9Cb21iQmFnR09cIjtcbmltcG9ydCB7IExpc3RlbmVycyB9IGZyb20gXCIuL2NsYXNzZXMvTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9jbGFzc2VzL1BsYXllclwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9jbGFzc2VzL1N0YWdlXCI7XG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuL2NsYXNzZXMvRW5lbXlcIjtcblxuY29uc3Qgc3RhZ2UgPSBbXG4gIFwi4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUo+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAg4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUo+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUkyAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAgICAgICAgICAgICAgICAgaOKUgyAgICAgIOKUg8OTICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSaICDilJbilInilInilInilInilInilInilInilInilInilInilInilInilKsgICAgICAgICAgICAgICAgICDilKPilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgIOKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUl+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUmyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuXTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihuZXcgR2FtZU9iamVjdCgzLCAzLCBcIk9cIikpO1xuZ2xvYmFsVGhpcy5nYW1lID0gbmV3IEdhbWUoXG4gIFwiZ2FtZVwiLFxuICA0MCxcbiAgMjAsXG4gIHBsYXllcixcbiAgbmV3IFN0YWdlKHN0YWdlLCB7IHg6IDEsIHk6IDEgfSlcbik7XG5cbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgR3VuR28oeyB4OiAxMCwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEJvbWJCYWdHbyh7IHg6IDE2LCB5OiA2IH0pKTtcblxuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDcgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiAzIH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNCB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDUgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQzLCB5OiA3IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDUgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiA2IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNCB9KSk7XG5cbmNvbnN0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVycyhnbG9iYWxUaGlzLmdhbWUpO1xubGlzdGVuZXIuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9