import { Container } from "@pixi/display";
import { Flag, FlagType } from "../flag/Flag";
import { FLAG_DEFINITIONS } from "../flag/flag-definitions";
import { GameState } from "../game-state";
import { GameButton } from "./button";
import { GameText } from "./text";

export class FlagSelector {
  gameState: GameState;
  internalState!: Record<
    string,
    {
      button: GameButton;
      flagContainer: Container;
      amount: GameText;
    }
  >;

  constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  init(container: Container): void {
    let offset = 20;

    const header = new GameText("Select flag to paint:");
    container.addChild(header);

    this.internalState = Object.fromEntries(
      Object.entries(FLAG_DEFINITIONS).map(([key, flagProps]) => {
        const castedKey = key as FlagType;
        const flagContainer = new Container();
        const flag = new Flag(flagProps);
        flag.init(flagContainer);
        flagContainer.scale.set(0.1, 0.1);
        flagContainer.x = 160;
        const button = new GameButton({
          color: castedKey === this.gameState.selectedFlag ? 0xbb0000 : 0x00aa00,
          text: flagProps.type,
          x: 0,
          y: 0,
        });
        button.on("click", () => {
          Object.values(this.internalState).forEach((v) => {
            v.button.setColor(0x00aa00);
          });
          this.internalState[castedKey].button.setColor(0xbb0000);
          this.gameState.selectedFlag = flagProps.type;
        });
        const rowContainer = new Container();
        const amount = new GameText(this.gameState.flagStorage[castedKey] + "");
        amount.x = 250;
        amount.y = 15;
        rowContainer.addChild(button);
        rowContainer.addChild(flagContainer);
        rowContainer.addChild(amount);
        rowContainer.y = offset;
        offset += 60;
        container.addChild(rowContainer);
        return [
          castedKey,
          {
            button,
            flagContainer,
            amount,
          },
        ];
      })
    );
  }

  updateFlagCount(): void {
    Object.entries(this.internalState).forEach(([key, value]) => {
      value.amount.text = this.gameState.flagStorage[key as FlagType] + "";
    });
  }
}
