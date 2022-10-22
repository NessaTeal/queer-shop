import { Container, Graphics } from "pixi.js";
import { BaseFlag, FlagProps } from "./BaseFlag";

export class FlagWithProgress extends BaseFlag {
  offset: number;
  lastStripeIndex: number;
  currentStripe: {
    progress: number;
    stripe: Graphics;
  };

  constructor(props: FlagProps, container: Container, progress: number, brushSize: number) {
    super(props, container);
    const stripe = new Graphics();
    stripe.beginFill(this.stripes[0].color);
    const stripeWidth = Math.min(brushSize, this.stripes[0].offset);
    stripe.drawRect(0, 0, 777, stripeWidth);
    stripe.endFill();
    stripe.scale.set(0, 1);
    this.graphics.push(stripe);
    this.container.addChild(stripe);
    this.currentStripe = {
      progress,
      stripe,
    };
    this.offset = stripeWidth;
    this.lastStripeIndex = 0;
  }

  update(fill: number, brushSize: number): void {
    if (this.lastStripeIndex === this.stripes.length) {
      return;
    }

    this.currentStripe.progress += fill;
    this.currentStripe.stripe.scale.set(Math.min(1, this.currentStripe.progress), 1);

    if (this.currentStripe.progress > 1) {
      const stripe = new Graphics();
      if (this.offset === this.stripes[this.lastStripeIndex].offset) {
        this.lastStripeIndex++;

        if (this.lastStripeIndex === this.stripes.length) {
          return;
        }
      }
      const chosenStripe = this.stripes[this.lastStripeIndex];
      const stripeWidth = Math.min(brushSize, chosenStripe.offset - this.offset);

      stripe.beginFill(chosenStripe.color);
      stripe.drawRect(0, this.offset, 777, stripeWidth);
      stripe.endFill();
      stripe.scale.set(0, 1);
      this.graphics.push(stripe);
      this.container.addChild(stripe);
      this.offset += stripeWidth;

      this.currentStripe = {
        progress: this.currentStripe.progress - 1,
        stripe,
      };
    }
  }

  isDone(): boolean {
    return this.lastStripeIndex === this.stripes.length;
  }
}
