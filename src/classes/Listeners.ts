import { KeyCodes } from "../utils/constants";
import { Game } from "./Game";

export class Listeners {
  public game: Game;

  constructor(game: Game) {
    this.game = game;
  }

  init() {
    document.onkeydown = (e) => {
      this.checkKey(e, this.game);
    };
  }

  checkKey(e: KeyboardEvent, game: Game) {
    e = e || window.event;
    if (!globalThis.game.player) return;
    if (e.keyCode === KeyCodes.ARROW_UP) {
      globalThis.game.player.up();
    } else if (e.keyCode === KeyCodes.ARROW_DOWN) {
      globalThis.game.player.down();
    } else if (e.keyCode === KeyCodes.ARROW_LEFT) {
      globalThis.game.player.left();
    } else if (e.keyCode === KeyCodes.ARROW_RIGHT) {
      globalThis.game.player.right();
    } else if (e.keyCode === KeyCodes.SPACE) {
      globalThis.game.player.attack();
    } else if (e.keyCode === KeyCodes.V) {
      globalThis.game.player.changeItem();
    }

    // this.game.draw();S
  }
}
