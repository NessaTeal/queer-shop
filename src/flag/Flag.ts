import { Container, Graphics } from "pixi.js";

export enum FlagType {
  rainbow = "rainbow",
  agender = "agender",
  asexual = "asexual",
  bisexual = "bisexual",
  genderfluid = "genderfluid",
  nonbinary = "nonbinary",
  pansexual = "pansexual",
  polysexual = "polysexual",
  transgender = "transgender",
  aromantic = "aromantic",
  genderqueer = "genderqueer",
}

export type FlagProps = {
  ratio: number;
  stripes: Array<Stripe>;
  type: FlagType;
};

export abstract class Flag {
  ratio: number;
  stripes: Array<Stripe>;
  type: FlagType;
  graphics!: Array<Graphics>;

  constructor({ ratio, stripes, type }: FlagProps) {
    this.ratio = ratio;
    this.stripes = stripes;
    this.type = type;
  }

  init(container: Container): void {
    let offset = 0;

    const height = 777 / this.ratio;

    this.graphics = this.stripes.map((s) => {
      const stripe = new Graphics();
      stripe.beginFill(s.color);
      stripe.drawRect(0, height * offset, 777, height * s.width);
      stripe.endFill();
      offset += s.width;
      return stripe;
    });

    container.addChild(...this.graphics);
  }

  delete(): void {
    this.graphics.forEach((g) => g.destroy());
  }
}

export type Stripe = {
  width: number;
  color: number;
};
