export class DialogBox {
  public matrix: string[];
  public text: string;
  public width: number;

  constructor(text: string) {
    this.matrix = [];
    this.text = text;
    this.width = globalThis.game.width - 2;
    this.init();
  }

  getDialog(lastScreen: string[]) {
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
      const dialog: string[] = [];
      const padding = 4;
      // const paddingWord = " ".repeat((this.width - this.text.length) / 2);
      const texts = this.textRow(this.text);
      dialog.push(`✖ ╔${"═".repeat(this.width - 4)}╗ ✖`);
      dialog.push(`╔═╝${" ".repeat(this.width - 4)}╚═╗`);
      texts.map((text) => {
        let paddingText = " ".repeat((this.width - text.length) / 2);
        dialog.push(
          `║${paddingText}${text}${paddingText}${text.length % 2 ? " " : ""}║`
        );
      });

      // dialog.push(`║${paddingWord}${this.text}${paddingWord}║`);
      dialog.push(`╚═╗${" ".repeat(this.width - 4)}╔═╝`);
      dialog.push(`✖ ╚${"═".repeat(this.width - 4)}╝ ✖`);
      this.matrix = dialog;
      globalThis.game.dialog.push(this);
    } catch (error) {
      console.log(error);
    }
  }

  textRow(text: string): string[] {
    let arrayText = text.split(" ");
    let response = [];
    let tempText = "";
    while (arrayText.length > 0) {
      let tempWord = arrayText.shift();
      if ((tempText + " " + tempWord).length > this.width / 1.5) {
        tempWord && arrayText.unshift(tempWord);
        response.push(tempText);
        tempText = "";
      } else {
        tempText += " " + tempWord;
      }
    }
    tempText !== "" && response.push(tempText);
    return response;
  }
}
