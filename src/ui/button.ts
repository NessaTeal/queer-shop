import { Graphics } from "pixi.js";
import { GameText } from "./text";

export class GameButton extends Graphics {
  text: GameText;

  constructor({ color, text, x, y }: { color: number; text: string; x: number; y: number }) {
    super();
    this.beginFill(color);
    this.drawRect(x, 0, 150, 50);
    this.endFill();
    this.interactive = true;
    this.buttonMode = true;

    this.text = new GameText(text);
    this.text.x = x + 5;
    this.text.y = y + 17;
    this.addChild(this.text);
  }
}
