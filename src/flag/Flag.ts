import { Container, Graphics } from "pixi.js";
import { BaseFlag, FlagProps } from "./BaseFlag";

export class Flag extends BaseFlag {
  constructor(flagProps: FlagProps, container: Container) {
    super(flagProps, container);
    this.graphics = this.stripes.map((s) => {
      const stripe = new Graphics();
      stripe.beginFill(s.color);
      stripe.drawRect(0, s.offset - this.stripes[0].offset, 777, this.height * s.width);
      stripe.endFill();
      return stripe;
    });

    this.container.addChild(...this.graphics);
  }
}
