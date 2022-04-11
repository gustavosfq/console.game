import { KeyCodes } from "../utils/constants";
import { DialogBox } from "./DialogBox";
import { Game } from "./Game";
import { OptionDialog } from "./GameObjects/OptionDialog";

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
    if(globalThis.game.dialog.length) {
      if(globalThis.game.dialog[0] instanceof DialogBox) {
        if (e.keyCode === KeyCodes.SPACE) {
          globalThis.game.dialog.shift();
        }
      } else if(globalThis.game.dialog[0] instanceof OptionDialog) {
        const option = globalThis.game.dialog[0].options[globalThis.game.dialog[0].index]; 
        if (e.keyCode === KeyCodes.SPACE) {
          option.func();
          globalThis.game.dialog.shift();
        }
        if(e.keyCode === KeyCodes.ARROW_UP) {
          globalThis.game.dialog[0].previous();
        }
        if(e.keyCode === KeyCodes.ARROW_DOWN) {
          globalThis.game.dialog[0].next();
        }
      }
      return
    };
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
