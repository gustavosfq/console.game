import { Option } from "../Option";

export class OptionDialog {
  public matrix: string[];
  public optionsTemp: Option[];
  public options: Option[];
  public width: number;
  public index: number;

  constructor(options: Option[]) {
    this.matrix = [];
    this.optionsTemp = options;
    this.options = [];
    this.index = 0;
    this.width = globalThis.game.width - 2;
    this.init();
  }

  getOptions(lastScreen: string[]) {
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
        const dialog: string[] = [];
        dialog.push(`✖ ╔${"═".repeat(this.width - 4)}╗ ✖`);
        dialog.push(`╔═╝${" ".repeat(this.width - 4)}╚═╗`);
        texts.map((optionTemp) => {
          let tempText = "";
          if (optionTemp.text == option.text) {
            tempText = "✖ " + optionTemp.text;
          } else {
            tempText = "  " + optionTemp.text;
          }
          let paddingTextleft = " ".repeat(this.width / 8);
          let paddingTextright = " ".repeat(
            this.width - paddingTextleft.length - tempText.length
          );
          dialog.push(
            `║${paddingTextleft}${tempText}${paddingTextright}${
              tempText.length % 2 ? "" : ""
            }║`
          );
        });

        dialog.push(`╚═╗${" ".repeat(this.width - 4)}╔═╝`);
        dialog.push(`✖ ╚${"═".repeat(this.width - 4)}╝ ✖`);
        this.options.push(new Option(dialog, option.func));
      });
    } catch (error) {
      console.log(error);
    }
  }

  next(): void{
    this.index += 1;
    if (this.index >= this.options.length) {
      this.index = 0;
    }
  }

  previous(): void {
    this.index -= 1;
    if (this.index < 0) {
      this.index = this.options.length - 1;
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
