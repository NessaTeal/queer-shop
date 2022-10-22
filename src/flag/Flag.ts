import { Application, Graphics } from "pixi.js";

export abstract class Flag {
  ratio: number;
  stripes: Array<Stripe>;
  complete: boolean;
  progress: number;
  graphics!: Array<Graphics>;

  constructor(ratio: number, stripes: Array<Stripe>) {
    this.ratio = ratio;
    this.stripes = stripes;
    this.complete = false;
    this.progress = 0;
  }

  init(app: Application): void {
    let offset = 0;

    const height = 777 / this.ratio;

    this.graphics = this.stripes.map((s) => {
      const stripe = new Graphics();
      stripe.beginFill(s.color);
      stripe.drawRect(0, height * offset, 777, height * s.width);
      stripe.scale.set(0, 1);
      stripe.endFill();
      offset += s.width;
      return stripe;
    });

    app.stage.addChild(...this.graphics);
  }

  update(delta: number): void {
    this.progress += delta * 0.0005;
    let progressRequired = 0;

    for (let i = 0; i < this.stripes.length; i++) {
      const stripe = this.stripes[i];

      const progressSoFar = Math.max(
        0,
        Math.min(1, (this.progress - progressRequired) / stripe.width)
      );

      this.graphics[i].scale.set(progressSoFar, 1);

      if (progressSoFar === 1) {
        progressRequired += stripe.width;
      } else {
        break;
      }
    }
  }

  delete(): void {
    this.graphics.forEach((g) => g.destroy());
  }
}

export type Stripe = {
  width: number;
  color: number;
};
