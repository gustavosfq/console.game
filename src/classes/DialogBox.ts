export class DialogBox {
  public matrix: string[];
  public text: string;
  public width: number;

  constructor(text: string) {
    this.matrix = [];
    this.text = text;
    this.width = globalThis.game.width;
    this.init()

  }

  getDialog(lastScreen: string[]) {
    const xyPoint = {
        x: 0,
        y: lastScreen.length- this.matrix.length,
      };
      for (let i = 0; i < this.matrix.length; i++) {
        lastScreen[xyPoint.y+i] = this.matrix[i]        
      }
      return lastScreen;
  }

  init() {
    const dialog: string[] = [];
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
