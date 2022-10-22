import { Container } from "pixi.js";
import { GameState } from "../game-state";
import { GameButton } from "./button";
import { GameText } from "./text";

export class TopBar {
  gameState: GameState;
  moneyCounter!: GameText;

  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  init(container: Container): void {
    const increaseSpeedButton = new GameButton({
      color: 0x00abcd,
      text: "Upgrade fill speed",
      x: 0,
      y: 0,
    });

    increaseSpeedButton.on("click", () => this.upgradeSpeed());

    const progressButton = new GameButton({
      color: 0x929dfc,
      text: "Manual fill",
      x: 150,
      y: 0,
    });

    progressButton.on("click", () => this.getProgress());

    const moneyCounter = new GameText(`Money: ${this.gameState.money}`);
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
