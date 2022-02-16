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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCO0lBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVyxzQkFBYyxHQUF1QztJQUM5RCxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVztJQUNoQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYztDQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZGRiw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBa0I7SUFDL0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDakMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVywyQkFBbUIsR0FBdUM7SUFDbkUsQ0FBQyxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVc7SUFDaEMsQ0FBQyxvQkFBUSxDQUFD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QUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRCxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUN4QixNQUFNLEVBQ04sRUFBRSxFQUNGLEVBQUUsRUFDRixNQUFNLEVBQ04sSUFBSSxhQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FDakMsQ0FBQztBQUVGLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRTNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFdkUsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9hbmltYXRpb25zL2JvbWIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvYW5pbWF0aW9ucy9ndW5CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9EaWFsb2dCb3gudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9FbmVteS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdHMvQm9tYkJhZ0dPLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdHMvR3VuR08udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9MaXN0ZW5lcnMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9QbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9TdGFnZS50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQmFnQm9tYi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9Cb21iLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9CdWxsZXRzL0J1bGxldC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9HdW5CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0d1bi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnVsbGV0RnJhbWUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9CdWxsZXRGcmFtZVwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJpZ2h0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogLTEsIHg6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB5OiAwLCB4OiA5LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGRvd25BbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAtMSwgeTogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4oqXXCIgfSxcbiAgICB7IHg6IDAsIHk6IDksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgdXBBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAtMSwgeTogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogLTYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogLTgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB4OiAwLCB5OiAtOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBsZWZ0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogLTEsIHg6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogMCwgeDogLTksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGJvbWJBbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9ID0ge1xuICAgIFtLZXlDb2Rlcy5BUlJPV19VUF06IHVwQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19ET1dOXTogZG93bkFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfTEVGVF06IGxlZnRBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX1JJR0hUXTogcmlnaHRBbmltYXRpb24sXG59OyIsImltcG9ydCB7IEJ1bGxldEZyYW1lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQnVsbGV0RnJhbWVcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCByaWdodEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IDAsIHg6IDEsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDIsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDUsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IDgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgdXBBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAwLCB5OiAtMSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IC0yLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtMywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC01LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC04LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IGRvd25BbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB4OiAwLCB5OiAxLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogMiwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDMsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA0LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDYsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA3LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBsZWZ0QW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeTogMCwgeDogLTEsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC0yLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtMywgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTQsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC01LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTcsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC04LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBndW5CdWxsZXRBbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9ID0ge1xuICAgIFtLZXlDb2Rlcy5BUlJPV19VUF06IHVwQW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19ET1dOXTogZG93bkFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfTEVGVF06IGxlZnRBbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX1JJR0hUXTogcmlnaHRBbmltYXRpb24sXG59OyIsImV4cG9ydCBjbGFzcyBEaWFsb2dCb3gge1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmdbXTtcbiAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5tYXRyaXggPSBbXTtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMud2lkdGggPSBnbG9iYWxUaGlzLmdhbWUud2lkdGg7XG4gICAgdGhpcy5pbml0KClcblxuICB9XG5cbiAgZ2V0RGlhbG9nKGxhc3RTY3JlZW46IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeHlQb2ludCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogbGFzdFNjcmVlbi5sZW5ndGgtIHRoaXMubWF0cml4Lmxlbmd0aCxcbiAgICAgIH07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxhc3RTY3JlZW5beHlQb2ludC55K2ldID0gdGhpcy5tYXRyaXhbaV0gICAgICAgIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGxhc3RTY3JlZW47XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGRpYWxvZzogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBwYWRkaW5nID0gMDtcbiAgICBjb25zdCBwYWRkaW5nV29yZCA9IFwiIFwiLnJlcGVhdCgodGhpcy53aWR0aCAtIHRoaXMudGV4dC5sZW5ndGgpIC8gMik7XG4gICAgZGlhbG9nLnB1c2goYOKVlCR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZdgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtcIiBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZFgKTtcbiAgICBkaWFsb2cucHVzaChg4pWRJHtwYWRkaW5nV29yZH0ke3RoaXMudGV4dH0ke3BhZGRpbmdXb3JkfeKVkWApO1xuICAgIGRpYWxvZy5wdXNoKGDilZEke1wiIFwiLnJlcGVhdCh0aGlzLndpZHRoIC0gcGFkZGluZyAqIDIpfeKVkWApO1xuICAgIGRpYWxvZy5wdXNoKGDilZoke1wi4pWQXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWdYCk7XG4gICAgdGhpcy5tYXRyaXggPSBkaWFsb2c7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZyA9IHRoaXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vV2VhcG9ucy9CdWxsZXRzL0J1bGxldFwiO1xuXG5leHBvcnQgY2xhc3MgRW5lbXkgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwiS1wiKTtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QubGlmZS0tO1xuICAgIH1cbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIEJ1bGxldCkge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBEaWFsb2dCb3ggfSBmcm9tIFwiLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9TdGFnZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIHJlYWRvbmx5IG1haW5FbGVtZW50SWQ6IHN0cmluZztcbiAgcmVhZG9ubHkgcHJlRWxlbWVudDogSFRNTFByZUVsZW1lbnQ7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xuICByZWFkb25seSBoYWxmV2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGFsZkhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBwbGF5ZXI6IFBsYXllcjtcbiAgcHVibGljIGN1cnJlbnRTdGFnZTogU3RhZ2U7XG4gIHB1YmxpYyBkaWFsb2c6IERpYWxvZ0JveCB8IG51bGw7XG4gICNsYXN0U2NyZWVuOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBtYWluRWxlbWVudElkOiBzdHJpbmcsXG4gICAgd2lkdGg6IG51bWJlcixcbiAgICBoZWlnaHQ6IG51bWJlcixcbiAgICBwbGF5ZXI6IFBsYXllcixcbiAgICBzdGFnZTogU3RhZ2VcbiAgKSB7XG4gICAgdGhpcy5tYWluRWxlbWVudElkID0gbWFpbkVsZW1lbnRJZDtcbiAgICB0aGlzLnByZUVsZW1lbnQgPSA8SFRNTFByZUVsZW1lbnQ+KFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYWluRWxlbWVudElkKVxuICAgICk7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMuaGFsZldpZHRoID0gd2lkdGggLyAyO1xuICAgIHRoaXMuaGFsZkhlaWdodCA9IGhlaWdodCAvIDI7XG4gICAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UgPSBzdGFnZTtcbiAgICB0aGlzLiNsYXN0U2NyZWVuID0gW107XG4gICAgdGhpcy5kaWFsb2cgPSBudWxsO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH0sIDQwIC8gMTAwMCk7XG4gIH1cblxuICByZXBsYWNlQXQoc3RyOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHJlcGxhY2VtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICBzdHIuc3Vic3RyKDAsIGluZGV4KSArXG4gICAgICByZXBsYWNlbWVudCArXG4gICAgICBzdHIuc3Vic3RyKGluZGV4ICsgcmVwbGFjZW1lbnQubGVuZ3RoKVxuICAgICk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIGlmICh0aGlzLmRpYWxvZykge1xuICAgICAgdGhpcy4jbGFzdFNjcmVlbiA9IHRoaXMuZGlhbG9nLmdldERpYWxvZyh0aGlzLiNsYXN0U2NyZWVuKTtcbiAgICAgIHRoaXMucHJlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLiNsYXN0U2NyZWVuLmpvaW4oXCJcXG5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhd1N0YWdlKCk7XG4gIH1cblxuICBkcmF3U3RhZ2UoKSB7XG4gICAgbGV0IGFycmF5ID0gWy4uLnRoaXMuY3VycmVudFN0YWdlLm1hdHJpeF07XG4gICAgdGhpcy5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZm9yRWFjaCgoZ28pID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHRoaXMucmVwbGFjZUF0KGFycmF5W2dvLnldLCBnby54LCBnby5jaGFyKTtcbiAgICAgIGFycmF5W2dvLnldID0gcm93O1xuICAgIH0pO1xuICAgIGNvbnN0IHggPSB0aGlzLnJlcGxhY2VBdChcbiAgICAgIGFycmF5W3RoaXMucGxheWVyLnldLFxuICAgICAgdGhpcy5wbGF5ZXIueCxcbiAgICAgIHRoaXMucGxheWVyLmNoYXJcbiAgICApO1xuICAgIGFycmF5W3RoaXMucGxheWVyLnldID0geDtcbiAgICAvLyB0cmltIGFycmF5IGJ5IHBsYXllciBwb3NpdGlvblxuICAgIGNvbnN0IHlSYW5nZSA9XG4gICAgICB0aGlzLnBsYXllci55IDwgdGhpcy5oYWxmSGVpZ2h0XG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMucGxheWVyLnkgPiBhcnJheS5sZW5ndGggLSB0aGlzLmhhbGZIZWlnaHRcbiAgICAgICAgPyBhcnJheS5sZW5ndGggLSB0aGlzLmhlaWdodFxuICAgICAgICA6IHRoaXMucGxheWVyLnkgLSB0aGlzLmhhbGZIZWlnaHQ7XG5cbiAgICBjb25zdCB4UmFuZ2UgPVxuICAgICAgdGhpcy5wbGF5ZXIueCA8IHRoaXMuaGFsZldpZHRoXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMucGxheWVyLnggPiBhcnJheVswXS5sZW5ndGggLSB0aGlzLmhhbGZXaWR0aFxuICAgICAgICA/IGFycmF5WzBdLmxlbmd0aCAtIHRoaXMud2lkdGhcbiAgICAgICAgOiB0aGlzLnBsYXllci54IC0gdGhpcy5oYWxmV2lkdGg7XG4gICAgdGhpcy4jbGFzdFNjcmVlbiA9IGFycmF5XG4gICAgICAuc2xpY2UoeVJhbmdlLCB5UmFuZ2UgKyB0aGlzLmhlaWdodClcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93LnN1YnN0cmluZyh4UmFuZ2UsIHhSYW5nZSArIHRoaXMud2lkdGgpKTtcbiAgICB0aGlzLiNsYXN0U2NyZWVuLnVuc2hpZnQodGhpcy5pbmZvQmFyKCkpO1xuICAgIHRoaXMucHJlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLiNsYXN0U2NyZWVuLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICBpbmZvQmFyKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgd2VhcG9uID0gdGhpcy5wbGF5ZXIuY3VycmVudEl0ZW0/Lm5hbWU7XG4gICAgcmV0dXJuIGBMaWZlOiR7XCIg4pmlXCIucmVwZWF0KHRoaXMucGxheWVyLmxpZmUpfSAtIFdlYXBvbjogJHtcbiAgICAgIHdlYXBvbiB8fCBcIm51bGxcIlxuICAgIH1gO1xuICB9XG5cbiAgY3JlYXRlRGlhbG9nKHRleHQ6IHN0cmluZykge1xuICAgIGNvbnN0IGRpYWxvZzogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBwYWRkaW5nID0gMDtcbiAgICBjb25zdCBwYWRkaW5nV29yZCA9IFwiIFwiLnJlcGVhdCgodGhpcy53aWR0aCAtIHRleHQubGVuZ3RoKSAvIDIpO1xuICAgIGRpYWxvZy5wdXNoKGDilZQke1wi4pWQXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWXYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7cGFkZGluZ1dvcmR9JHt0ZXh0fSR7cGFkZGluZ1dvcmR94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVkSR7XCIgXCIucmVwZWF0KHRoaXMud2lkdGggLSBwYWRkaW5nICogMil94pWRYCk7XG4gICAgZGlhbG9nLnB1c2goYOKVmiR7XCLilZBcIi5yZXBlYXQodGhpcy53aWR0aCAtIHBhZGRpbmcgKiAyKX3ilZ1gKTtcbiAgICByZXR1cm4gZGlhbG9nO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuXG5jb25zdCBHbG9iYWxDb2xsaWRlcnMgPSBcIuKVlOKVkOKVkOKVl+KVmuKVneKVkVwiO1xuXG5pbnRlcmZhY2UgR2FtZU9iamVjdEludGVyZmFjZSB7XG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjaGFyOiBzdHJpbmc7XG4gIGNvbGxpZGVyTGlzdDogc3RyaW5nO1xuICBmYWNpbmc6IEtleUNvZGVzO1xuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgR2FtZU9iamVjdEludGVyZmFjZSB7XG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHB1YmxpYyB4OiBudW1iZXI7XG4gIHB1YmxpYyB5OiBudW1iZXI7XG4gIHB1YmxpYyBjaGFyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xsaWRlckxpc3Q6IHN0cmluZztcbiAgcHVibGljIGZhY2luZzogS2V5Q29kZXM7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXI6IHN0cmluZywgY29sbGlkZXJMaXN0OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgdGhpcy5pZCA9IChNYXRoLnJhbmRvbSgpICsgMSkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgICB0aGlzLmNvbGxpZGVyTGlzdCA9IGNvbGxpZGVyTGlzdCArIEdsb2JhbENvbGxpZGVycztcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICB9XG5cbiAgd2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXJMaXN0LmluY2x1ZGVzKFxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5nZXRDaGFyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXG4gICAgKTtcbiAgfVxuXG4gIHdpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKTogR2FtZU9iamVjdCB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdhbWVPYmplY3RzLmZpbmQoXG4gICAgICAgIChnbykgPT5cbiAgICAgICAgICBnby54ID09PSBwb3NpdGlvbi54ICYmXG4gICAgICAgICAgZ28ueSA9PT0gcG9zaXRpb24ueSAmJlxuICAgICAgICAgIGdvLmlkICE9PSB0aGlzLmlkICYmXG4gICAgICAgICAgZ28uY29uc3RydWN0b3IubmFtZSAhPT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICApIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgY29sbGlkZShhcnJvdzogS2V5Q29kZXMpIHtcbiAgICBsZXQgY29sbGlkZVN0YWdlID0gZmFsc2U7XG4gICAgbGV0IGNvbGxpZGVHYW1lT2JqZWN0OiBHYW1lT2JqZWN0IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb247XG4gICAgc3dpdGNoIChhcnJvdykge1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19VUDpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55IC0gMSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX0RPV046XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSArIDEgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19MRUZUOlxuICAgICAgICBwb3NpdGlvbiA9IHsgeDogdGhpcy54IC0gMSwgeTogdGhpcy55IH07XG4gICAgICAgIGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZXMuQVJST1dfUklHSFQ6XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLnggKyAxLCB5OiB0aGlzLnkgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29sbGlkZVN0YWdlID0gZmFsc2U7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxpZGVHYW1lT2JqZWN0KSB7XG4gICAgICB0aGlzLm9uQ29sbGlkZShjb2xsaWRlR2FtZU9iamVjdCk7XG4gICAgICBjb2xsaWRlR2FtZU9iamVjdC5vbkNvbGxpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpZGVTdGFnZSB8fCBjb2xsaWRlR2FtZU9iamVjdDtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICB1cCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1VQO1xuICAgIGlmICh0aGlzLnkgLSAxID49IDAgJiYgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19VUCkpIHtcbiAgICAgIHRoaXMueSAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19ET1dOO1xuICAgIGlmIChcbiAgICAgIHRoaXMueSArIDEgPCBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeC5sZW5ndGggJiZcbiAgICAgICF0aGlzLmNvbGxpZGUoS2V5Q29kZXMuQVJST1dfRE9XTilcbiAgICApIHtcbiAgICAgIHRoaXMueSArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19MRUZUO1xuICAgIGlmICh0aGlzLnggLSAxID49IDAgJiYgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19MRUZUKSkge1xuICAgICAgdGhpcy54IC09IDE7XG4gICAgfVxuICB9XG5cbiAgcmlnaHQoKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19SSUdIVDtcbiAgICBpZiAoXG4gICAgICB0aGlzLnggKyAxIDwgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5tYXRyaXhbMF0ubGVuZ3RoICYmXG4gICAgICAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX1JJR0hUKVxuICAgICkge1xuICAgICAgdGhpcy54ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdhbWVPYmplY3RzID1cbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmlsdGVyKFxuICAgICAgICAoZ28pID0+IGdvLmlkICE9PSB0aGlzLmlkXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xuaW1wb3J0IHsgQm9tYkJhZyB9IGZyb20gXCIuLi9XZWFwb25zL0JhZ0JvbWJcIjtcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi9XZWFwb25zL0d1blwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYkJhZ0dvIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIuKYjFwiKTtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QuaXRlbXMucHVzaChuZXcgQm9tYkJhZygpKTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZyA9IG5ldyBEaWFsb2dCb3goXCJBY2FiYXMgZGUgZW5jb250cmFyIHVuYSDimIwgXCIpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IERpYWxvZ0JveCB9IGZyb20gXCIuLi9EaWFsb2dCb3hcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4uL1dlYXBvbnMvR3VuXCI7XG5cbmV4cG9ydCBjbGFzcyBHdW5HbyBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgc3VwZXIocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgXCLilb5cIik7XG4gIH1cblxuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICBnYW1lT2JqZWN0Lml0ZW1zLnB1c2gobmV3IEd1bigpKTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmRpYWxvZyA9IG5ldyBEaWFsb2dCb3goXCJBY2FiYXMgZGUgZW5jb250cmFyIHVuYSDilb4gXCIpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXN0ZW5lcnMge1xuICBwdWJsaWMgZ2FtZTogR2FtZTtcblxuICBjb25zdHJ1Y3RvcihnYW1lOiBHYW1lKSB7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tLZXkoZSwgdGhpcy5nYW1lKTtcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tLZXkoZTogS2V5Ym9hcmRFdmVudCwgZ2FtZTogR2FtZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZihnbG9iYWxUaGlzLmdhbWUuZGlhbG9nKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSkge1xuICAgICAgICBnbG9iYWxUaGlzLmdhbWUuZGlhbG9nID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH07XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfVVApIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIudXAoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfRE9XTikge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5kb3duKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX0xFRlQpIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIubGVmdCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19SSUdIVCkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5yaWdodCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5TUEFDRSkge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5hdHRhY2soKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuVikge1xuICAgICAgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5jaGFuZ2VJdGVtKCk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5nYW1lLmRyYXcoKTtTXG4gIH1cbn1cbiIsImltcG9ydCB7IFdlYXBvbkludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL1dlYXBvblwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCb21iQmFnIH0gZnJvbSBcIi4vV2VhcG9ucy9CYWdCb21iXCI7XG5pbXBvcnQgeyBHdW4gfSBmcm9tIFwiLi9XZWFwb25zL0d1blwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIHB1YmxpYyBpdGVtczogV2VhcG9uSW50ZXJmYWNlW107XG4gIHB1YmxpYyBjdXJyZW50SXRlbUluZGV4O1xuICBwdWJsaWMgbGlmZTogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpIHtcbiAgICBnYW1lT2JqZWN0LmNvbGxpZGVyTGlzdCA9IFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIjtcbiAgICBzdXBlcihnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5jaGFyLCBnYW1lT2JqZWN0LmNvbGxpZGVyTGlzdCk7XG4gICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IDA7XG4gICAgdGhpcy5saWZlID0gNDtcbiAgfVxuXG4gIGdldCBjdXJyZW50SXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtSW5kZXhdO1xuICB9XG5cbiAgY2hhbmdlSXRlbSgpIHtcbiAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPVxuICAgICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ICsgMSA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMVxuICAgICAgICA/IDBcbiAgICAgICAgOiB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyAxO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIHRoaXMuY3VycmVudEl0ZW0uYXR0YWNrKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFN0YWdlIHtcbiAgcHVibGljIG1hdHJpeDogc3RyaW5nW107XG4gIHB1YmxpYyBnYW1lT2JqZWN0czogQXJyYXk8R2FtZU9iamVjdD47XG4gIHByaXZhdGUgcGxheWVyUG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3RvcihtYXRyaXg6IHN0cmluZ1tdLCBwbGF5ZXJQb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKSB7XG4gICAgdGhpcy5tYXRyaXggPSB0aGlzLmFkZEZyYW1lKG1hdHJpeCk7XG4gICAgdGhpcy5wbGF5ZXJQb3NpdGlvbiA9IHBsYXllclBvc2l0aW9uO1xuICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcbiAgfVxuXG4gIGFkZEdhbWVPYmplY3QoZ2FtZU9iamVjdDogR2FtZU9iamVjdCkge1xuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5wdXNoKGdhbWVPYmplY3QpO1xuICB9XG5cbiAgZ2V0Q2hhcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeFt5XVt4XTtcbiAgfVxuXG4gIGFkZEZyYW1lKG1hdHJpeDogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgbGVuZ3RoID0gbWF0cml4WzBdLmxlbmd0aDtcbiAgICBtYXRyaXggPSBtYXRyaXgubWFwKCh4KSA9PiBcIuKVkVwiICsgeC5zbGljZSgwLCBsZW5ndGgpICsgXCLilZFcIik7XG4gICAgbWF0cml4LnVuc2hpZnQoXCLilZRcIiArIFwi4pWQXCIucmVwZWF0KGxlbmd0aCkgKyBcIuKVl1wiKTtcbiAgICBtYXRyaXgucHVzaChcIuKVmlwiICsgXCLilZBcIi5yZXBlYXQobGVuZ3RoKSArIFwi4pWdXCIpO1xuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbn1cblxuLy8g4pWU4pWQ4pWQ4pWX4pWa4pWd4pWRXG4iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEJvbWIgfSBmcm9tIFwiLi9CdWxsZXRzL0JvbWJcIjtcblxuZXhwb3J0IGNsYXNzIEJvbWJCYWcgaW1wbGVtZW50cyBXZWFwb25JbnRlcmZhY2Uge1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgYnVsbGV0czogQm9tYltdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubmFtZSA9IFwiQm9tYiBCYWdcIjtcbiAgICB0aGlzLmJ1bGxldHMgPSBbXTtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICBjb25zdCBidWxsZXQgPSBuZXcgQm9tYihnbG9iYWxUaGlzLmdhbWUucGxheWVyLmZhY2luZyk7XG4gICAgYnVsbGV0LmluaXQoKTtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QoYnVsbGV0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgYm9tYkFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vYW5pbWF0aW9ucy9ib21iXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBCb21iIGV4dGVuZHMgQnVsbGV0IHtcbiAgICBwdWJsaWMgaHVydDogQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGtleUNvZGU6IEtleUNvZGVzKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgbmV3IEdhbWVPYmplY3QoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci54LCBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnksIFwiYlwiLCBcIuKUj+KUgeKUk+KUg+KUo+KUq31bXCIpLFxuICAgICAgICAgICAga2V5Q29kZSxcbiAgICAgICAgICAgIGJvbWJBbmltYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaHVydCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEJ1bGxldEZyYW1lIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXMvQnVsbGV0RnJhbWVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgaHVydDogQm9vbGVhbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbD86IG51bWJlcjtcbiAgcmVhZG9ubHkgYW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdO1xuICByZWFkb25seSBhbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGdhbWVPYmplY3Q6IEdhbWVPYmplY3QsXG4gICAgcGxheWVyRmFjaW5nOiBLZXlDb2RlcyxcbiAgICBhbmltYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogQnVsbGV0RnJhbWVbXSB9XG4gICkge1xuICAgIHN1cGVyKGdhbWVPYmplY3QueCwgZ2FtZU9iamVjdC55LCBnYW1lT2JqZWN0LmNoYXIsIGdhbWVPYmplY3QuY29sbGlkZXJMaXN0KTtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSB7IC4uLmFuaW1hdGlvbnMgfTtcbiAgICB0aGlzLmh1cnQgPSBmYWxzZTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IFsuLi50aGlzLmdldEFuaW1hdGlvbihwbGF5ZXJGYWNpbmcpXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmFuaW1hdGlvbi5zaGlmdCgpO1xuICAgICAgaWYgKCFmcmFtZSkge1xuICAgICAgICB0aGlzLm9uQ29sbGlkZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMueCA9IHggKyBmcmFtZS54O1xuICAgICAgdGhpcy55ID0geSArIGZyYW1lLnk7XG4gICAgICBsZXQgcG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbiA9IHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgICAgIHRoaXMuY2hhciA9IGZyYW1lLmNoYXIgfHwgdGhpcy5jaGFyO1xuICAgICAgdGhpcy5odXJ0ID0gZnJhbWUuaHVydCB8fCBmYWxzZTtcblxuICAgICAgaWYgKHRoaXMuaHVydCkge1xuICAgICAgICBjb25zdCBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb25zdCBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgaWYgKGNvbGxpZGVTdGFnZSkgdGhpcy5vbkNvbGxpZGUoKTtcbiAgICAgICAgaWYgKGNvbGxpZGVHYW1lT2JqZWN0KSB7XG4gICAgICAgICAgdGhpcy5vbkNvbGxpZGUoKTtcbiAgICAgICAgICBjb2xsaWRlR2FtZU9iamVjdC5vbkNvbGxpZGUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH1cblxuICBnZXRBbmltYXRpb24ocGxheWVyRmFjaW5nOiBLZXlDb2Rlcyk6IEJ1bGxldEZyYW1lW10ge1xuICAgIHJldHVybiBbLi4udGhpcy5hbmltYXRpb25zW3BsYXllckZhY2luZ11dO1xuICB9XG5cbiAgb25Db2xsaWRlKCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcblxuICAgIHRoaXMuY2hhciA9IFwiw5dcIjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgfSwgNTApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBndW5CdWxsZXRBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbnMvZ3VuQnVsbGV0XCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW5CdWxsZXQgZXh0ZW5kcyBCdWxsZXQge1xuICAgIHB1YmxpYyBodXJ0OiBCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3Ioa2V5Q29kZTogS2V5Q29kZXMpIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBuZXcgR2FtZU9iamVjdChnbG9iYWxUaGlzLmdhbWUucGxheWVyLngsIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueSwgXCItXCIsIFwi4pSP4pSB4pST4pSD4pSj4pSrfVtcIiksXG4gICAgICAgICAgICBrZXlDb2RlLFxuICAgICAgICAgICAgZ3VuQnVsbGV0QW5pbWF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEd1bkJ1bGxldCB9IGZyb20gXCIuL0J1bGxldHMvR3VuQnVsbGV0XCI7XG5cbmV4cG9ydCBjbGFzcyBHdW4gaW1wbGVtZW50cyBXZWFwb25JbnRlcmZhY2Uge1xuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICBwdWJsaWMgYnVsbGV0czogR3VuQnVsbGV0W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gXCJHdW5cIlxuICAgIHRoaXMuYnVsbGV0cyA9IFtdO1xuICB9XG5cbiAgYXR0YWNrKCkge1xuICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBHdW5CdWxsZXQoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5mYWNpbmcpO1xuICAgIGJ1bGxldC5pbml0KCk7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KGJ1bGxldCk7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIEtleUNvZGVzIHtcbiAgQVJST1dfVVAgPSAzOCxcbiAgQVJST1dfRE9XTiA9IDQwLFxuICBBUlJPV19MRUZUID0gMzcsXG4gIEFSUk9XX1JJR0hUID0gMzksXG4gIFNQQUNFID0gMzIsXG4gIFYgPSA4NixcbiAgQyA9IDY3LFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVcIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEd1bkdvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9HdW5HT1wiO1xuaW1wb3J0IHsgQm9tYkJhZ0dvIH0gZnJvbSBcIi4vY2xhc3Nlcy9HYW1lT2JqZWN0cy9Cb21iQmFnR09cIjtcbmltcG9ydCB7IExpc3RlbmVycyB9IGZyb20gXCIuL2NsYXNzZXMvTGlzdGVuZXJzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9jbGFzc2VzL1BsYXllclwiO1xuaW1wb3J0IHsgU3RhZ2UgfSBmcm9tIFwiLi9jbGFzc2VzL1N0YWdlXCI7XG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuL2NsYXNzZXMvRW5lbXlcIjtcblxuY29uc3Qgc3RhZ2UgPSBbXG4gIFwi4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUo+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAg4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUo+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUkyAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAgICAgICAgICAgICAgICAgaOKUgyAgICAgIOKUg8OTICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSaICDilJbilInilInilInilInilInilInilInilInilInilInilInilInilKsgICAgICAgICAgICAgICAgICDilKPilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgIOKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUl+KUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUmyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuXTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcihuZXcgR2FtZU9iamVjdCgzLCAzLCBcIk9cIikpO1xuZ2xvYmFsVGhpcy5nYW1lID0gbmV3IEdhbWUoXG4gIFwiZ2FtZVwiLFxuICA0MCxcbiAgMjAsXG4gIHBsYXllcixcbiAgbmV3IFN0YWdlKHN0YWdlLCB7IHg6IDEsIHk6IDEgfSlcbik7XG5cbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgR3VuR28oeyB4OiAxMCwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEJvbWJCYWdHbyh7IHg6IDE2LCB5OiA2IH0pKTtcblxuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiA1IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDcgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiAzIH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNCB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDUgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQzLCB5OiA3IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MSwgeTogNiB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDIsIHk6IDUgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiA2IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MCwgeTogNCB9KSk7XG5cbmNvbnN0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVycyhnbG9iYWxUaGlzLmdhbWUpO1xubGlzdGVuZXIuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9