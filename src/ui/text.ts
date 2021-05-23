import { Text, TextStyle } from "pixi.js";

const style = new TextStyle({
  fontFamily: "Helvetica",
  fontSize: 16,
});

export class GameText extends Text {
  constructor(text: string) {
    super(text, style);
  }
}
