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
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Game = void 0;
class Game {
    constructor(mainElementId, width, height, player, stage) {
        this.mainElementId = mainElementId;
        this.preElement = (document.getElementById(this.mainElementId));
        this.width = width;
        this.height = height;
        this.halfWidth = width / 2;
        this.halfHeight = height / 2;
        this.player = player;
        this.currentStage = stage;
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
        array = array
            .slice(yRange, yRange + this.height)
            .map((row) => row.substring(xRange, xRange + this.width));
        array.unshift(this.infoBar());
        this.preElement.innerHTML = array.join("\n");
    }
    infoBar() {
        var _a;
        const weapon = (_a = this.player.currentItem) === null || _a === void 0 ? void 0 : _a.name;
        return `Life:${" ♥".repeat(this.player.life)} - Weapon: ${weapon || "null"}`;
    }
}
exports.Game = Game;


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
        if (!globalThis.game.player)
            return;
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
})(KeyCodes = exports.KeyCodes || (exports.KeyCodes = {}));
;


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCO0lBQ2pDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3ZDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtDQUN4QyxDQUFDO0FBRUYsTUFBTSxXQUFXLEdBQWtCO0lBQy9CLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN4QyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3hDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVyxzQkFBYyxHQUF1QztJQUM5RCxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBVztJQUNoQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsYUFBYTtJQUNwQyxDQUFDLG9CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsY0FBYztDQUN6QyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZGRiw4RkFBOEM7QUFFOUMsTUFBTSxjQUFjLEdBQWtCO0lBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDMUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBa0I7SUFDL0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDdEMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7Q0FDekMsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFrQjtJQUNqQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3hDLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBa0I7SUFDakMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtJQUMzQixFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDM0IsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzNCLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0NBQ3pDLENBQUM7QUFFVywyQkFBbUIsR0FBdUM7SUFDbkUsQ0FBQyxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQVc7SUFDaEMsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7SUFDcEMsQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLGFBQWE7SUFDcEMsQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLGNBQWM7Q0FDekMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNuREYsNEZBQTBDO0FBQzFDLGdGQUFrQztBQUNsQyxnSEFBa0Q7QUFFbEQsTUFBYSxLQUFNLFNBQVEsdUJBQVU7SUFDbkMsWUFBWSxRQUE0QjtRQUN0QyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxTQUFTLENBQUMsVUFBc0I7UUFDOUIsSUFBSSxVQUFVLFlBQVksZUFBTSxFQUFFO1lBQ2hDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksVUFBVSxZQUFZLGVBQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDaEI7SUFDSCxDQUFDO0NBQ0Y7QUFiRCxzQkFhQzs7Ozs7Ozs7Ozs7Ozs7QUNmRCxNQUFhLElBQUk7SUFZZixZQUNFLGFBQXFCLEVBQ3JCLEtBQWEsRUFDYixNQUFjLEVBQ2QsTUFBYyxFQUNkLEtBQVk7UUFFWixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFtQixDQUNoQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDNUMsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLFdBQW1CO1FBQ3ZELE9BQU8sQ0FDTCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDcEIsV0FBVztZQUNYLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDM0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLE1BQU0sTUFBTSxHQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVO1lBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVU7Z0JBQ2hELENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO2dCQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxNQUFNLE1BQU0sR0FDVixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTO2dCQUNsRCxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztnQkFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsS0FBSyxHQUFHLEtBQUs7YUFDVixLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25DLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVELEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsT0FBTzs7UUFDTCxNQUFNLE1BQU0sR0FBRyxVQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsMENBQUUsSUFBSSxDQUFDO1FBQzdDLE9BQU8sUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsTUFBTSxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQy9FLENBQUM7Q0FDRjtBQWhGRCxvQkFnRkM7Ozs7Ozs7Ozs7Ozs7O0FDbkZELDhGQUE4QztBQUc5QyxNQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFZbEMsTUFBYSxVQUFVO0lBUXJCLFlBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFZLEVBQUUsZUFBdUIsRUFBRTtRQUN2RSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLGVBQWUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFRLENBQUMsV0FBVyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUE0QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUMvQixVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDO0lBRUQscUJBQXFCLENBQUMsUUFBNEI7UUFDaEQsT0FBTyxDQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQzNDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FDTCxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDbkIsRUFBRSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDaEQsSUFBSSxJQUFJLENBQ1YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBZTtRQUNyQixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxpQkFBaUIsR0FBc0IsSUFBSSxDQUFDO1FBQ2hELElBQUksUUFBNEIsQ0FBQztRQUNqQyxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssb0JBQVEsQ0FBQyxRQUFRO2dCQUNwQixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1IsS0FBSyxvQkFBUSxDQUFDLFVBQVU7Z0JBQ3RCLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELE1BQU07WUFDUixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDdEIsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9DLGlCQUFpQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekQsTUFBTTtZQUNSLEtBQUssb0JBQVEsQ0FBQyxXQUFXO2dCQUN2QixRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNO1lBQ1I7Z0JBQ0UsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDckIsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1NBQ1Q7UUFFRCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLFlBQVksSUFBSSxpQkFBaUIsQ0FBQztJQUMzQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQXNCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRTtRQUNBLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVEsQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBUSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUNFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNO1lBQ3ZELENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxFQUNsQztZQUNBLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQVEsQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBUSxDQUFDLFdBQVcsQ0FBQztRQUNuQyxJQUNFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzFELENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUNuQztZQUNBLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7WUFDdEMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FDN0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FDMUIsQ0FBQztJQUNOLENBQUM7Q0FDRjtBQXRIRCxnQ0FzSEM7Ozs7Ozs7Ozs7Ozs7O0FDcElELDZGQUEyQztBQUMzQyxpRkFBbUM7QUFDbkMsb0dBQTZDO0FBRzdDLE1BQWEsU0FBVSxTQUFRLHVCQUFVO0lBQ3ZDLFlBQVksUUFBNEI7UUFDdEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFVBQXNCO1FBQzlCLElBQUksVUFBVSxZQUFZLGVBQU0sRUFBRTtZQUNoQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Q0FDRjtBQVhELDhCQVdDOzs7Ozs7Ozs7Ozs7OztBQ2hCRCw2RkFBMkM7QUFDM0MsaUZBQW1DO0FBQ25DLHdGQUFxQztBQUVyQyxNQUFhLEtBQU0sU0FBUSx1QkFBVTtJQUNuQyxZQUFZLFFBQTRCO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELFNBQVMsQ0FBQyxVQUFzQjtRQUM5QixJQUFJLFVBQVUsWUFBWSxlQUFNLEVBQUU7WUFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7Q0FDRjtBQVhELHNCQVdDOzs7Ozs7Ozs7Ozs7OztBQ2hCRCw4RkFBOEM7QUFHOUMsTUFBYSxTQUFTO0lBR3BCLFlBQVksSUFBVTtRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSTtRQUNGLFFBQVEsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFnQixFQUFFLElBQVU7UUFDbkMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3BDLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFFBQVEsRUFBRTtZQUNuQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUM3QjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFVBQVUsRUFBRTtZQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFVBQVUsRUFBRTtZQUM1QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUMvQjthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLFdBQVcsRUFBRTtZQUM3QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQzthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLEtBQUssRUFBRTtZQUN2QyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQzthQUFNLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxvQkFBUSxDQUFDLENBQUMsRUFBRTtZQUNuQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQztJQUdILENBQUM7Q0FDRjtBQWhDRCw4QkFnQ0M7Ozs7Ozs7Ozs7Ozs7O0FDakNELDRGQUEwQztBQUkxQyxNQUFhLE1BQU8sU0FBUSx1QkFBVTtJQUtwQyxZQUFZLFVBQXNCO1FBQ2hDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGdCQUFnQjtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQy9DLENBQUMsQ0FBQyxDQUFDO2dCQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUEzQkQsd0JBMkJDOzs7Ozs7Ozs7Ozs7OztBQzlCRCxNQUFhLEtBQUs7SUFLaEIsWUFBWSxNQUFnQixFQUFFLGNBQWtDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQXNCO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDMUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsTUFBZ0I7UUFDdkIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUExQkQsc0JBMEJDOzs7Ozs7Ozs7Ozs7OztBQzVCRCxrR0FBc0M7QUFFdEMsTUFBYSxPQUFPO0lBSWxCO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBZEQsMEJBY0M7Ozs7Ozs7Ozs7Ozs7O0FDakJELCtGQUEwRDtBQUUxRCxnR0FBOEM7QUFDOUMsZ0dBQWtDO0FBRWxDLE1BQWEsSUFBSyxTQUFRLGVBQU07SUFHNUIsWUFBWSxPQUFpQjtRQUN6QixLQUFLLENBQ0QsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUNuRixPQUFPLEVBQ1AscUJBQWMsQ0FDakIsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Q0FDSjtBQVhELG9CQVdDOzs7Ozs7Ozs7Ozs7OztBQ2JELGdHQUE4QztBQUU5QyxNQUFhLE1BQU8sU0FBUSx1QkFBVTtJQU1wQyxZQUNFLFVBQXNCLEVBQ3RCLFlBQXNCLEVBQ3RCLFVBQThDO1FBRTlDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsSUFBSSxDQUFDLFVBQVUscUJBQVEsVUFBVSxDQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxRQUFRLEdBQXVCLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDO1lBRWhDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDYixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFlBQVk7b0JBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLGlCQUFpQixFQUFFO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxZQUFZLENBQUMsWUFBc0I7UUFDakMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFFBQVEsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBRWhCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Q0FDRjtBQTFERCx3QkEwREM7Ozs7Ozs7Ozs7Ozs7O0FDL0RELDhHQUFvRTtBQUVwRSxnR0FBOEM7QUFDOUMsZ0dBQWtDO0FBRWxDLE1BQWEsU0FBVSxTQUFRLGVBQU07SUFHakMsWUFBWSxPQUFpQjtRQUN6QixLQUFLLENBQ0QsSUFBSSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxFQUNuRixPQUFPLEVBQ1AsK0JBQW1CLENBQ3RCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0NBQ0o7QUFYRCw4QkFXQzs7Ozs7Ozs7Ozs7Ozs7QUNmRCxpSEFBZ0Q7QUFFaEQsTUFBYSxHQUFHO0lBSWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUs7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRjtBQWRELGtCQWNDOzs7Ozs7Ozs7Ozs7OztBQ2pCQSxJQUFZLFFBT1Y7QUFQRixXQUFZLFFBQVE7SUFDakIsZ0RBQWE7SUFDYixvREFBZTtJQUNmLG9EQUFlO0lBQ2Ysc0RBQWdCO0lBQ2hCLDBDQUFVO0lBQ1Ysa0NBQU07QUFDUixDQUFDLEVBUFUsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFPbEI7QUFBQSxDQUFDOzs7Ozs7O1VDUEo7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBLGtGQUFzQztBQUN0QyxvR0FBa0Q7QUFDbEQsNkdBQW9EO0FBQ3BELHlIQUE0RDtBQUM1RCxpR0FBZ0Q7QUFDaEQsd0ZBQTBDO0FBQzFDLHFGQUF3QztBQUN4QyxxRkFBd0M7QUFFeEMsTUFBTSxLQUFLLEdBQUc7SUFDWix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7SUFDeEYsd0ZBQXdGO0lBQ3hGLHdGQUF3RjtJQUN4Rix3RkFBd0Y7Q0FDekYsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckQsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FDeEIsTUFBTSxFQUNOLEVBQUUsRUFDRixFQUFFLEVBQ0YsTUFBTSxFQUNOLElBQUksYUFBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQ2pDLENBQUM7QUFFRixVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUkscUJBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUUzRSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZFLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2RSxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxhQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkUsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksYUFBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXZFLE1BQU0sUUFBUSxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvYW5pbWF0aW9ucy9ib21iLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2FuaW1hdGlvbnMvZ3VuQnVsbGV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvRW5lbXkudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9HYW1lLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL0JvbWJCYWdHTy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL0dhbWVPYmplY3RzL0d1bkdPLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvTGlzdGVuZXJzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvUGxheWVyLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvU3RhZ2UudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0JhZ0JvbWIudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0J1bGxldHMvQm9tYi50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LW9uLWJyb3dzZXItc3RhcnRlci8uL3NyYy9jbGFzc2VzL1dlYXBvbnMvQnVsbGV0cy9CdWxsZXQudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvY2xhc3Nlcy9XZWFwb25zL0J1bGxldHMvR3VuQnVsbGV0LnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9HdW4udHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1vbi1icm93c2VyLXN0YXJ0ZXIvLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cGVzY3JpcHQtb24tYnJvd3Nlci1zdGFydGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1bGxldEZyYW1lIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvQnVsbGV0RnJhbWVcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuXG5jb25zdCByaWdodEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IC0xLCB4OiAxLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDMsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA0LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTIsIHg6IDYsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMiwgeDogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA3LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeTogLTEsIHg6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB5OiAtMSwgeDogOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLiipdcIiB9LFxuICAgIHsgeTogMCwgeDogOSwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBkb3duQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogLTEsIHk6IDEsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiAyLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDIsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiAzLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDQsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA1LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IDUsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMiwgeTogNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0yLCB5OiA2LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDcsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKYjFwiIH0sXG4gICAgeyB4OiAtMSwgeTogNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHg6IC0xLCB5OiA4LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IDgsIGh1cnQ6IGZhbHNlLCBjaGFyOiBcIuKKl1wiIH0sXG4gICAgeyB4OiAwLCB5OiA5LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IHVwQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogLTEsIHk6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC0xLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0yLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC0zLCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC00LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC01LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTIsIHk6IC02LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC03LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLimIxcIiB9LFxuICAgIHsgeDogLTEsIHk6IC04LCBodXJ0OiBmYWxzZSwgY2hhcjogXCLiipdcIiB9LFxuICAgIHsgeDogMCwgeTogLTksIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgbGVmdEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IC0xLCB4OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtMSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtMywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNSwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0yLCB4OiAtNiwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtNywgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IC0xLCB4OiAtOCwgaHVydDogZmFsc2UsIGNoYXI6IFwi4piMXCIgfSxcbiAgICB7IHk6IDAsIHg6IC05LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBib21iQW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfSA9IHtcbiAgICBbS2V5Q29kZXMuQVJST1dfVVBdOiB1cEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfRE9XTl06IGRvd25BbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0xFRlRdOiBsZWZ0QW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19SSUdIVF06IHJpZ2h0QW5pbWF0aW9uLFxufTsiLCJpbXBvcnQgeyBCdWxsZXRGcmFtZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0J1bGxldEZyYW1lXCI7XG5pbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcblxuY29uc3QgcmlnaHRBbmltYXRpb246IEJ1bGxldEZyYW1lW10gPSBbXG4gICAgeyB5OiAwLCB4OiAxLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAyLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAzLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA0LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA1LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA2LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA3LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiA4LCBodXJ0OiB0cnVlLCBjaGFyOiBcIsOXXCIgfSxcbl07XG5cbmNvbnN0IHVwQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogMCwgeTogLTEsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiAtMiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC00LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtNSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeDogMCwgeTogLTYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHg6IDAsIHk6IC03LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB4OiAwLCB5OiAtOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5jb25zdCBkb3duQW5pbWF0aW9uOiBCdWxsZXRGcmFtZVtdID0gW1xuICAgIHsgeDogMCwgeTogMSwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDIsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiAzLCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNCwgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDUsIGh1cnQ6IHRydWUsIGNoYXI6IFwifFwiIH0sXG4gICAgeyB4OiAwLCB5OiA2LCBodXJ0OiB0cnVlLCBjaGFyOiBcInxcIiB9LFxuICAgIHsgeDogMCwgeTogNywgaHVydDogdHJ1ZSwgY2hhcjogXCJ8XCIgfSxcbiAgICB7IHg6IDAsIHk6IDgsIGh1cnQ6IHRydWUsIGNoYXI6IFwiw5dcIiB9LFxuXTtcblxuY29uc3QgbGVmdEFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXSA9IFtcbiAgICB7IHk6IDAsIHg6IC0xLCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtMiwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTMsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC00LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtNSwgaHVydDogdHJ1ZSB9LFxuICAgIHsgeTogMCwgeDogLTYsIGh1cnQ6IHRydWUgfSxcbiAgICB7IHk6IDAsIHg6IC03LCBodXJ0OiB0cnVlIH0sXG4gICAgeyB5OiAwLCB4OiAtOCwgaHVydDogdHJ1ZSwgY2hhcjogXCLDl1wiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgZ3VuQnVsbGV0QW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfSA9IHtcbiAgICBbS2V5Q29kZXMuQVJST1dfVVBdOiB1cEFuaW1hdGlvbixcbiAgICBbS2V5Q29kZXMuQVJST1dfRE9XTl06IGRvd25BbmltYXRpb24sXG4gICAgW0tleUNvZGVzLkFSUk9XX0xFRlRdOiBsZWZ0QW5pbWF0aW9uLFxuICAgIFtLZXlDb2Rlcy5BUlJPV19SSUdIVF06IHJpZ2h0QW5pbWF0aW9uLFxufTsiLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL1dlYXBvbnMvQnVsbGV0cy9CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEVuZW15IGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIktcIik7XG4gIH1cblxuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQge1xuICAgIGlmIChnYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICBnYW1lT2JqZWN0LmxpZmUtLTtcbiAgICB9XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBCdWxsZXQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL1N0YWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcmVhZG9ubHkgbWFpbkVsZW1lbnRJZDogc3RyaW5nO1xuICByZWFkb25seSBwcmVFbGVtZW50OiBIVE1MUHJlRWxlbWVudDtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XG4gIHJlYWRvbmx5IGhhbGZXaWR0aDogbnVtYmVyO1xuICByZWFkb25seSBoYWxmSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHBsYXllcjogUGxheWVyO1xuICBwdWJsaWMgY3VycmVudFN0YWdlOiBTdGFnZTtcbiAgcHVibGljIGlzUGF1c2VkOiBCb29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG1haW5FbGVtZW50SWQ6IHN0cmluZyxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIHBsYXllcjogUGxheWVyLFxuICAgIHN0YWdlOiBTdGFnZVxuICApIHtcbiAgICB0aGlzLm1haW5FbGVtZW50SWQgPSBtYWluRWxlbWVudElkO1xuICAgIHRoaXMucHJlRWxlbWVudCA9IDxIVE1MUHJlRWxlbWVudD4oXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLm1haW5FbGVtZW50SWQpXG4gICAgKTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5oYWxmV2lkdGggPSB3aWR0aCAvIDI7XG4gICAgdGhpcy5oYWxmSGVpZ2h0ID0gaGVpZ2h0IC8gMjtcbiAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZSA9IHN0YWdlO1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmRyYXcoKTtcbiAgICB9LCA0MCAvIDEwMDApO1xuICB9XG5cbiAgcmVwbGFjZUF0KHN0cjogc3RyaW5nLCBpbmRleDogbnVtYmVyLCByZXBsYWNlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RyLnN1YnN0cigwLCBpbmRleCkgK1xuICAgICAgcmVwbGFjZW1lbnQgK1xuICAgICAgc3RyLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aClcbiAgICApO1xuICB9XG5cbiAgZHJhdygpIHtcbiAgICBsZXQgYXJyYXkgPSBbLi4udGhpcy5jdXJyZW50U3RhZ2UubWF0cml4XTtcbiAgICB0aGlzLmN1cnJlbnRTdGFnZS5nYW1lT2JqZWN0cy5mb3JFYWNoKChnbykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gdGhpcy5yZXBsYWNlQXQoYXJyYXlbZ28ueV0sIGdvLngsIGdvLmNoYXIpO1xuICAgICAgYXJyYXlbZ28ueV0gPSByb3c7XG4gICAgfSk7XG4gICAgY29uc3QgeCA9IHRoaXMucmVwbGFjZUF0KFxuICAgICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0sXG4gICAgICB0aGlzLnBsYXllci54LFxuICAgICAgdGhpcy5wbGF5ZXIuY2hhclxuICAgICk7XG4gICAgYXJyYXlbdGhpcy5wbGF5ZXIueV0gPSB4O1xuICAgIC8vIHRyaW0gYXJyYXkgYnkgcGxheWVyIHBvc2l0aW9uXG4gICAgY29uc3QgeVJhbmdlID1cbiAgICAgIHRoaXMucGxheWVyLnkgPCB0aGlzLmhhbGZIZWlnaHRcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSA+IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGFsZkhlaWdodFxuICAgICAgICA/IGFycmF5Lmxlbmd0aCAtIHRoaXMuaGVpZ2h0XG4gICAgICAgIDogdGhpcy5wbGF5ZXIueSAtIHRoaXMuaGFsZkhlaWdodDtcblxuICAgIGNvbnN0IHhSYW5nZSA9XG4gICAgICB0aGlzLnBsYXllci54IDwgdGhpcy5oYWxmV2lkdGhcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5wbGF5ZXIueCA+IGFycmF5WzBdLmxlbmd0aCAtIHRoaXMuaGFsZldpZHRoXG4gICAgICAgID8gYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy53aWR0aFxuICAgICAgICA6IHRoaXMucGxheWVyLnggLSB0aGlzLmhhbGZXaWR0aDtcbiAgICBhcnJheSA9IGFycmF5XG4gICAgICAuc2xpY2UoeVJhbmdlLCB5UmFuZ2UgKyB0aGlzLmhlaWdodClcbiAgICAgIC5tYXAoKHJvdykgPT4gcm93LnN1YnN0cmluZyh4UmFuZ2UsIHhSYW5nZSArIHRoaXMud2lkdGgpKTtcbiAgICBhcnJheS51bnNoaWZ0KHRoaXMuaW5mb0JhcigpKTtcbiAgICB0aGlzLnByZUVsZW1lbnQuaW5uZXJIVE1MID0gYXJyYXkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIGluZm9CYXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWFwb24gPSB0aGlzLnBsYXllci5jdXJyZW50SXRlbT8ubmFtZTtcbiAgICByZXR1cm4gYExpZmU6JHtcIiDimaVcIi5yZXBlYXQodGhpcy5wbGF5ZXIubGlmZSl9IC0gV2VhcG9uOiAke3dlYXBvbiB8fCBcIm51bGxcIn1gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBLZXlDb2RlcyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVPYmplY3RQb3NpdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0dhbWVPYmplY3RQb3NpdGlvblwiO1xuXG5jb25zdCBHbG9iYWxDb2xsaWRlcnMgPSBcIuKVlOKVkOKVkOKVl+KVmuKVneKVkVwiO1xuXG5pbnRlcmZhY2UgR2FtZU9iamVjdEludGVyZmFjZSB7XG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICBjaGFyOiBzdHJpbmc7XG4gIGNvbGxpZGVyTGlzdDogc3RyaW5nO1xuICBmYWNpbmc6IEtleUNvZGVzO1xuICBvbkNvbGxpZGUoZ2FtZU9iamVjdDogR2FtZU9iamVjdCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IGltcGxlbWVudHMgR2FtZU9iamVjdEludGVyZmFjZSB7XG4gIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gIHB1YmxpYyB4OiBudW1iZXI7XG4gIHB1YmxpYyB5OiBudW1iZXI7XG4gIHB1YmxpYyBjaGFyOiBzdHJpbmc7XG4gIHB1YmxpYyBjb2xsaWRlckxpc3Q6IHN0cmluZztcbiAgcHVibGljIGZhY2luZzogS2V5Q29kZXM7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNoYXI6IHN0cmluZywgY29sbGlkZXJMaXN0OiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgdGhpcy5pZCA9IChNYXRoLnJhbmRvbSgpICsgMSkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5jaGFyID0gY2hhcjtcbiAgICB0aGlzLmNvbGxpZGVyTGlzdCA9IGNvbGxpZGVyTGlzdCArIEdsb2JhbENvbGxpZGVycztcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1JJR0hUO1xuICB9XG5cbiAgd2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sbGlkZXJMaXN0LmluY2x1ZGVzKFxuICAgICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5nZXRDaGFyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpXG4gICAgKTtcbiAgfVxuXG4gIHdpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbjogR2FtZU9iamVjdFBvc2l0aW9uKTogR2FtZU9iamVjdCB8IG51bGwge1xuICAgIHJldHVybiAoXG4gICAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdhbWVPYmplY3RzLmZpbmQoXG4gICAgICAgIChnbykgPT5cbiAgICAgICAgICBnby54ID09PSBwb3NpdGlvbi54ICYmXG4gICAgICAgICAgZ28ueSA9PT0gcG9zaXRpb24ueSAmJlxuICAgICAgICAgIGdvLmlkICE9PSB0aGlzLmlkICYmXG4gICAgICAgICAgZ28uY29uc3RydWN0b3IubmFtZSAhPT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICApIHx8IG51bGxcbiAgICApO1xuICB9XG5cbiAgY29sbGlkZShhcnJvdzogS2V5Q29kZXMpIHtcbiAgICBsZXQgY29sbGlkZVN0YWdlID0gZmFsc2U7XG4gICAgbGV0IGNvbGxpZGVHYW1lT2JqZWN0OiBHYW1lT2JqZWN0IHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb247XG4gICAgc3dpdGNoIChhcnJvdykge1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19VUDpcbiAgICAgICAgcG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55IC0gMSB9O1xuICAgICAgICBjb2xsaWRlU3RhZ2UgPSB0aGlzLndpbGxDb2xsaWRlU3RhZ2UocG9zaXRpb24pO1xuICAgICAgICBjb2xsaWRlR2FtZU9iamVjdCA9IHRoaXMud2lsbENvbGxpZGVHYW1lT2JqZWN0KHBvc2l0aW9uKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtleUNvZGVzLkFSUk9XX0RPV046XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLngsIHk6IHRoaXMueSArIDEgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLZXlDb2Rlcy5BUlJPV19MRUZUOlxuICAgICAgICBwb3NpdGlvbiA9IHsgeDogdGhpcy54IC0gMSwgeTogdGhpcy55IH07XG4gICAgICAgIGNvbGxpZGVTdGFnZSA9IHRoaXMud2lsbENvbGxpZGVTdGFnZShwb3NpdGlvbik7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gdGhpcy53aWxsQ29sbGlkZUdhbWVPYmplY3QocG9zaXRpb24pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS2V5Q29kZXMuQVJST1dfUklHSFQ6XG4gICAgICAgIHBvc2l0aW9uID0geyB4OiB0aGlzLnggKyAxLCB5OiB0aGlzLnkgfTtcbiAgICAgICAgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29sbGlkZVN0YWdlID0gZmFsc2U7XG4gICAgICAgIGNvbGxpZGVHYW1lT2JqZWN0ID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGNvbGxpZGVHYW1lT2JqZWN0KSB7XG4gICAgICB0aGlzLm9uQ29sbGlkZShjb2xsaWRlR2FtZU9iamVjdCk7XG4gICAgICBjb2xsaWRlR2FtZU9iamVjdC5vbkNvbGxpZGUodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbGxpZGVTdGFnZSB8fCBjb2xsaWRlR2FtZU9iamVjdDtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICB1cCgpIHtcbiAgICB0aGlzLmZhY2luZyA9IEtleUNvZGVzLkFSUk9XX1VQO1xuICAgIGlmICh0aGlzLnkgLSAxID49IDAgJiYgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19VUCkpIHtcbiAgICAgIHRoaXMueSAtPSAxO1xuICAgIH1cbiAgfVxuXG4gIGRvd24oKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19ET1dOO1xuICAgIGlmIChcbiAgICAgIHRoaXMueSArIDEgPCBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLm1hdHJpeC5sZW5ndGggJiZcbiAgICAgICF0aGlzLmNvbGxpZGUoS2V5Q29kZXMuQVJST1dfRE9XTilcbiAgICApIHtcbiAgICAgIHRoaXMueSArPSAxO1xuICAgIH1cbiAgfVxuXG4gIGxlZnQoKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19MRUZUO1xuICAgIGlmICh0aGlzLnggLSAxID49IDAgJiYgIXRoaXMuY29sbGlkZShLZXlDb2Rlcy5BUlJPV19MRUZUKSkge1xuICAgICAgdGhpcy54IC09IDE7XG4gICAgfVxuICB9XG5cbiAgcmlnaHQoKSB7XG4gICAgdGhpcy5mYWNpbmcgPSBLZXlDb2Rlcy5BUlJPV19SSUdIVDtcbiAgICBpZiAoXG4gICAgICB0aGlzLnggKyAxIDwgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5tYXRyaXhbMF0ubGVuZ3RoICYmXG4gICAgICAhdGhpcy5jb2xsaWRlKEtleUNvZGVzLkFSUk9XX1JJR0hUKVxuICAgICkge1xuICAgICAgdGhpcy54ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmdhbWVPYmplY3RzID1cbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuZ2FtZU9iamVjdHMuZmlsdGVyKFxuICAgICAgICAoZ28pID0+IGdvLmlkICE9PSB0aGlzLmlkXG4gICAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uL1BsYXllclwiO1xuaW1wb3J0IHsgQm9tYkJhZyB9IGZyb20gXCIuLi9XZWFwb25zL0JhZ0JvbWJcIjtcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi9XZWFwb25zL0d1blwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYkJhZ0dvIGV4dGVuZHMgR2FtZU9iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24pIHtcbiAgICBzdXBlcihwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBcIuKYjFwiKTtcbiAgfVxuXG4gIG9uQ29sbGlkZShnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KTogdm9pZCB7XG4gICAgaWYgKGdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgIGdhbWVPYmplY3QuaXRlbXMucHVzaChuZXcgQm9tYkJhZygpKTtcbiAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZU9iamVjdFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvR2FtZU9iamVjdFBvc2l0aW9uXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi9QbGF5ZXJcIjtcbmltcG9ydCB7IEd1biB9IGZyb20gXCIuLi9XZWFwb25zL0d1blwiO1xuXG5leHBvcnQgY2xhc3MgR3VuR28gZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHN1cGVyKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIFwi4pW+XCIpO1xuICB9XG5cbiAgb25Db2xsaWRlKGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpOiB2b2lkIHtcbiAgICBpZiAoZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgZ2FtZU9iamVjdC5pdGVtcy5wdXNoKG5ldyBHdW4oKSk7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcblxuZXhwb3J0IGNsYXNzIExpc3RlbmVycyB7XG4gIHB1YmxpYyBnYW1lOiBHYW1lO1xuXG4gIGNvbnN0cnVjdG9yKGdhbWU6IEdhbWUpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuICAgICAgdGhpcy5jaGVja0tleShlLCB0aGlzLmdhbWUpO1xuICAgIH07XG4gIH1cblxuICBjaGVja0tleShlOiBLZXlib2FyZEV2ZW50LCBnYW1lOiBHYW1lKSB7XG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmICghZ2xvYmFsVGhpcy5nYW1lLnBsYXllcikgcmV0dXJuO1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX1VQKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLnVwKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLkFSUk9XX0RPV04pIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIuZG93bigpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2Rlcy5BUlJPV19MRUZUKSB7XG4gICAgICBnbG9iYWxUaGlzLmdhbWUucGxheWVyLmxlZnQoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuQVJST1dfUklHSFQpIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIucmlnaHQoKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS2V5Q29kZXMuU1BBQ0UpIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIuYXR0YWNrKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtleUNvZGVzLlYpIHtcbiAgICAgIGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIuY2hhbmdlSXRlbSgpO1xuICAgIH1cblxuICAgIC8vIHRoaXMuZ2FtZS5kcmF3KCk7U1xuICB9XG59XG4iLCJpbXBvcnQgeyBXZWFwb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9XZWFwb25cIjtcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQm9tYkJhZyB9IGZyb20gXCIuL1dlYXBvbnMvQmFnQm9tYlwiO1xuaW1wb3J0IHsgR3VuIH0gZnJvbSBcIi4vV2VhcG9ucy9HdW5cIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciBleHRlbmRzIEdhbWVPYmplY3Qge1xuICBwdWJsaWMgaXRlbXM6IFdlYXBvbkludGVyZmFjZVtdO1xuICBwdWJsaWMgY3VycmVudEl0ZW1JbmRleDtcbiAgcHVibGljIGxpZmU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihnYW1lT2JqZWN0OiBHYW1lT2JqZWN0KSB7XG4gICAgZ2FtZU9iamVjdC5jb2xsaWRlckxpc3QgPSBcIuKUj+KUgeKUk+KUg+KUo+KUq31bXCI7XG4gICAgc3VwZXIoZ2FtZU9iamVjdC54LCBnYW1lT2JqZWN0LnksIGdhbWVPYmplY3QuY2hhciwgZ2FtZU9iamVjdC5jb2xsaWRlckxpc3QpO1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPSAwO1xuICAgIHRoaXMubGlmZSA9IDQ7XG4gIH1cblxuICBnZXQgY3VycmVudEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbUluZGV4XTtcbiAgfVxuXG4gIGNoYW5nZUl0ZW0oKSB7XG4gICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID1cbiAgICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCArIDEgPiB0aGlzLml0ZW1zLmxlbmd0aCAtIDFcbiAgICAgICAgPyAwXG4gICAgICAgIDogdGhpcy5jdXJyZW50SXRlbUluZGV4ICsgMTtcbiAgfVxuXG4gIGF0dGFjaygpIHtcbiAgICB0aGlzLmN1cnJlbnRJdGVtLmF0dGFjaygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdGFnZSB7XG4gIHB1YmxpYyBtYXRyaXg6IHN0cmluZ1tdO1xuICBwdWJsaWMgZ2FtZU9iamVjdHM6IEFycmF5PEdhbWVPYmplY3Q+O1xuICBwcml2YXRlIHBsYXllclBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IobWF0cml4OiBzdHJpbmdbXSwgcGxheWVyUG9zaXRpb246IEdhbWVPYmplY3RQb3NpdGlvbikge1xuICAgIHRoaXMubWF0cml4ID0gdGhpcy5hZGRGcmFtZShtYXRyaXgpO1xuICAgIHRoaXMucGxheWVyUG9zaXRpb24gPSBwbGF5ZXJQb3NpdGlvbjtcbiAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XG4gIH1cblxuICBhZGRHYW1lT2JqZWN0KGdhbWVPYmplY3Q6IEdhbWVPYmplY3QpIHtcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChnYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGdldENoYXIoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXhbeV1beF07XG4gIH1cblxuICBhZGRGcmFtZShtYXRyaXg6IHN0cmluZ1tdKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGxlbmd0aCA9IG1hdHJpeFswXS5sZW5ndGg7XG4gICAgbWF0cml4ID0gbWF0cml4Lm1hcCgoeCkgPT4gXCLilZFcIiArIHguc2xpY2UoMCwgbGVuZ3RoKSArIFwi4pWRXCIpO1xuICAgIG1hdHJpeC51bnNoaWZ0KFwi4pWUXCIgKyBcIuKVkFwiLnJlcGVhdChsZW5ndGgpICsgXCLilZdcIik7XG4gICAgbWF0cml4LnB1c2goXCLilZpcIiArIFwi4pWQXCIucmVwZWF0KGxlbmd0aCkgKyBcIuKVnVwiKTtcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59XG5cbi8vIOKVlOKVkOKVkOKVl+KVmuKVneKVkVxuIiwiaW1wb3J0IHsgV2VhcG9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvV2VhcG9uXCI7XG5pbXBvcnQgeyBCb21iIH0gZnJvbSBcIi4vQnVsbGV0cy9Cb21iXCI7XG5cbmV4cG9ydCBjbGFzcyBCb21iQmFnIGltcGxlbWVudHMgV2VhcG9uSW50ZXJmYWNlIHtcbiAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgcHVibGljIGJ1bGxldHM6IEJvbWJbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcIkJvbWIgQmFnXCI7XG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgY29uc3QgYnVsbGV0ID0gbmV3IEJvbWIoZ2xvYmFsVGhpcy5nYW1lLnBsYXllci5mYWNpbmcpO1xuICAgIGJ1bGxldC5pbml0KCk7XG4gICAgZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KGJ1bGxldCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGJvbWJBbmltYXRpb25zIH0gZnJvbSBcIi4uLy4uLy4uL2FuaW1hdGlvbnMvYm9tYlwiO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL0dhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuL0J1bGxldFwiO1xuXG5leHBvcnQgY2xhc3MgQm9tYiBleHRlbmRzIEJ1bGxldCB7XG4gICAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXlDb2RlOiBLZXlDb2Rlcykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIG5ldyBHYW1lT2JqZWN0KGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueCwgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci55LCBcImJcIiwgXCLilI/ilIHilJPilIPilKPilKt9W1wiKSxcbiAgICAgICAgICAgIGtleUNvZGUsXG4gICAgICAgICAgICBib21iQW5pbWF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0aGlzLmh1cnQgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBCdWxsZXRGcmFtZSB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzL0J1bGxldEZyYW1lXCI7XG5pbXBvcnQgeyBHYW1lT2JqZWN0UG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlcy9HYW1lT2JqZWN0UG9zaXRpb25cIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBHYW1lT2JqZWN0IHtcbiAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG4gIHByaXZhdGUgaW50ZXJ2YWw/OiBudW1iZXI7XG4gIHJlYWRvbmx5IGFuaW1hdGlvbjogQnVsbGV0RnJhbWVbXTtcbiAgcmVhZG9ubHkgYW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBnYW1lT2JqZWN0OiBHYW1lT2JqZWN0LFxuICAgIHBsYXllckZhY2luZzogS2V5Q29kZXMsXG4gICAgYW5pbWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IEJ1bGxldEZyYW1lW10gfVxuICApIHtcbiAgICBzdXBlcihnYW1lT2JqZWN0LngsIGdhbWVPYmplY3QueSwgZ2FtZU9iamVjdC5jaGFyLCBnYW1lT2JqZWN0LmNvbGxpZGVyTGlzdCk7XG4gICAgdGhpcy5hbmltYXRpb25zID0geyAuLi5hbmltYXRpb25zIH07XG4gICAgdGhpcy5odXJ0ID0gZmFsc2U7XG4gICAgdGhpcy5hbmltYXRpb24gPSBbLi4udGhpcy5nZXRBbmltYXRpb24ocGxheWVyRmFjaW5nKV07XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcztcbiAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5hbmltYXRpb24uc2hpZnQoKTtcbiAgICAgIGlmICghZnJhbWUpIHtcbiAgICAgICAgdGhpcy5vbkNvbGxpZGUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnggPSB4ICsgZnJhbWUueDtcbiAgICAgIHRoaXMueSA9IHkgKyBmcmFtZS55O1xuICAgICAgbGV0IHBvc2l0aW9uOiBHYW1lT2JqZWN0UG9zaXRpb24gPSB7IHg6IHRoaXMueCwgeTogdGhpcy55IH07XG4gICAgICB0aGlzLmNoYXIgPSBmcmFtZS5jaGFyIHx8IHRoaXMuY2hhcjtcbiAgICAgIHRoaXMuaHVydCA9IGZyYW1lLmh1cnQgfHwgZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLmh1cnQpIHtcbiAgICAgICAgY29uc3QgY29sbGlkZVN0YWdlID0gdGhpcy53aWxsQ29sbGlkZVN0YWdlKHBvc2l0aW9uKTtcbiAgICAgICAgY29uc3QgY29sbGlkZUdhbWVPYmplY3QgPSB0aGlzLndpbGxDb2xsaWRlR2FtZU9iamVjdChwb3NpdGlvbik7XG4gICAgICAgIGlmIChjb2xsaWRlU3RhZ2UpIHRoaXMub25Db2xsaWRlKCk7XG4gICAgICAgIGlmIChjb2xsaWRlR2FtZU9iamVjdCkge1xuICAgICAgICAgIHRoaXMub25Db2xsaWRlKCk7XG4gICAgICAgICAgY29sbGlkZUdhbWVPYmplY3Qub25Db2xsaWRlKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgNTApO1xuICB9XG5cbiAgZ2V0QW5pbWF0aW9uKHBsYXllckZhY2luZzogS2V5Q29kZXMpOiBCdWxsZXRGcmFtZVtdIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuYW5pbWF0aW9uc1twbGF5ZXJGYWNpbmddXTtcbiAgfVxuXG4gIG9uQ29sbGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLmludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG5cbiAgICB0aGlzLmNoYXIgPSBcIsOXXCI7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiYnVsbGV0IGRlc3Ryb3llZCBieSBpdHNlbGZcIik7XG4gICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICB9LCA1MCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGd1bkJ1bGxldEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vLi4vLi4vYW5pbWF0aW9ucy9ndW5CdWxsZXRcIjtcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9HYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi9CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEd1bkJ1bGxldCBleHRlbmRzIEJ1bGxldCB7XG4gICAgcHVibGljIGh1cnQ6IEJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihrZXlDb2RlOiBLZXlDb2Rlcykge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIG5ldyBHYW1lT2JqZWN0KGdsb2JhbFRoaXMuZ2FtZS5wbGF5ZXIueCwgZ2xvYmFsVGhpcy5nYW1lLnBsYXllci55LCBcIi1cIiwgXCLilI/ilIHilJPilIPilKPilKt9W1wiKSxcbiAgICAgICAgICAgIGtleUNvZGUsXG4gICAgICAgICAgICBndW5CdWxsZXRBbmltYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaHVydCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IFdlYXBvbkludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL1dlYXBvblwiO1xuaW1wb3J0IHsgR3VuQnVsbGV0IH0gZnJvbSBcIi4vQnVsbGV0cy9HdW5CdWxsZXRcIjtcblxuZXhwb3J0IGNsYXNzIEd1biBpbXBsZW1lbnRzIFdlYXBvbkludGVyZmFjZSB7XG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBidWxsZXRzOiBHdW5CdWxsZXRbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWUgPSBcIkd1blwiXG4gICAgdGhpcy5idWxsZXRzID0gW107XG4gIH1cblxuICBhdHRhY2soKSB7XG4gICAgY29uc3QgYnVsbGV0ID0gbmV3IEd1bkJ1bGxldChnbG9iYWxUaGlzLmdhbWUucGxheWVyLmZhY2luZyk7XG4gICAgYnVsbGV0LmluaXQoKTtcbiAgICBnbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QoYnVsbGV0KTtcbiAgfVxufVxuIiwiIGV4cG9ydCBlbnVtIEtleUNvZGVzIHtcbiAgICBBUlJPV19VUCA9IDM4LFxuICAgIEFSUk9XX0RPV04gPSA0MCxcbiAgICBBUlJPV19MRUZUID0gMzcsXG4gICAgQVJST1dfUklHSFQgPSAzOSxcbiAgICBTUEFDRSA9IDMyLFxuICAgIFYgPVx0ODZcbiAgfTtcblxuICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZVwiO1xuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL2NsYXNzZXMvR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgR3VuR28gfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RzL0d1bkdPXCI7XG5pbXBvcnQgeyBCb21iQmFnR28gfSBmcm9tIFwiLi9jbGFzc2VzL0dhbWVPYmplY3RzL0JvbWJCYWdHT1wiO1xuaW1wb3J0IHsgTGlzdGVuZXJzIH0gZnJvbSBcIi4vY2xhc3Nlcy9MaXN0ZW5lcnNcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL2NsYXNzZXMvUGxheWVyXCI7XG5pbXBvcnQgeyBTdGFnZSB9IGZyb20gXCIuL2NsYXNzZXMvU3RhZ2VcIjtcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4vY2xhc3Nlcy9FbmVteVwiO1xuXG5jb25zdCBzdGFnZSA9IFtcbiAgXCLilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAgIOKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilJfilInilInilInilInilInilInilInilInilInilInilInilInilJsgICDilJfilInilInilInilInilInilInilInilInilInilInilInilInilJsgICAgICDilI/ilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilJMgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSj4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSrICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUj+KUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUgeKUkyAg4pSP4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSTICAgICAgICAgICAgICAgICBo4pSDICAgICAg4pSDw5MgICAgICAgICDilIMgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilInilInilInilInilInilInilInilInilInilInilInilInilInilJogIOKUluKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUieKUqyAgICAgICAgICAgICAgICAgIOKUo+KUgeKUgeKUgeKUgeKUgeKUgeKUqyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICDilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgIFwiLFxuICBcIuKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSDICAgICAg4pSj4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSB4pSrICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSDICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilIMgICAgICDilJfilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilInilJsgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilIMgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUgyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCLilKPilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilIHilKsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwi4pSX4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSJ4pSbICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG4gIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIixcbiAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLFxuICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsXG5dO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5ldyBHYW1lT2JqZWN0KDMsIDMsIFwiT1wiKSk7XG5nbG9iYWxUaGlzLmdhbWUgPSBuZXcgR2FtZShcbiAgXCJnYW1lXCIsXG4gIDQwLFxuICAyMCxcbiAgcGxheWVyLFxuICBuZXcgU3RhZ2Uoc3RhZ2UsIHsgeDogMSwgeTogMSB9KVxuKTtcblxuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBHdW5Hbyh7IHg6IDEwLCB5OiA2IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgQm9tYkJhZ0dvKHsgeDogMTYsIHk6IDYgfSkpO1xuXG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDAsIHk6IDUgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQxLCB5OiA2IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MiwgeTogNyB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDAsIHk6IDMgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQxLCB5OiA0IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MiwgeTogNSB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDMsIHk6IDcgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQxLCB5OiA2IH0pKTtcbmdsb2JhbFRoaXMuZ2FtZS5jdXJyZW50U3RhZ2UuYWRkR2FtZU9iamVjdChuZXcgRW5lbXkoeyB4OiA0MiwgeTogNSB9KSk7XG5nbG9iYWxUaGlzLmdhbWUuY3VycmVudFN0YWdlLmFkZEdhbWVPYmplY3QobmV3IEVuZW15KHsgeDogNDAsIHk6IDYgfSkpO1xuZ2xvYmFsVGhpcy5nYW1lLmN1cnJlbnRTdGFnZS5hZGRHYW1lT2JqZWN0KG5ldyBFbmVteSh7IHg6IDQwLCB5OiA0IH0pKTtcblxuY29uc3QgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXJzKGdsb2JhbFRoaXMuZ2FtZSk7XG5saXN0ZW5lci5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=