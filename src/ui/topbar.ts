import { Container, Graphics, Text, TextStyle } from "pixi.js";
import { GameState } from "../game-state";

export class TopBar {
  gameState: GameState;
  moneyCounter!: Text;

  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  init(container: Container): void {
    const increaseSpeedButton = new Graphics();
    increaseSpeedButton.beginFill(0x00abcd);
    increaseSpeedButton.drawRect(0, 0, 50, 20);
    increaseSpeedButton.endFill();

    increaseSpeedButton.interactive = true;
    increaseSpeedButton.buttonMode = true;

    increaseSpeedButton.on("click", () => this.upgradeSpeed());

    const progressButton = new Graphics();
    progressButton.beginFill(0x1233bb);
    progressButton.drawRect(60, 0, 50, 20);
    progressButton.endFill();

    progressButton.interactive = true;
    progressButton.buttonMode = true;

    progressButton.on("click", () => this.getProgress());

    const style = new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
    });
    const moneyCounter = new Text(`Money: ${this.gameState.money}`, style);
    moneyCounter.x = 500;
    this.moneyCounter = moneyCounter;

    container.addChild(increaseSpeedButton, progressButton, moneyCounter);
  }

  update(): void {
    this.moneyCounter.text = `Money: ${this.gameState.money}`;
  }

  upgradeSpeed(): void {
    if (this.gameState.money < 1) {
      return;
    }

    this.gameState.money -= 1;
    this.gameState.fillSpeed *= 1.1;
  }

  getProgress(): void {
    this.gameState.flag.progress += 0.1;
  }
}
