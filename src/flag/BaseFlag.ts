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

export class BaseFlag {
  ratio: number;
  stripes: Array<StripeWithOffset>;
  type: FlagType;
  container: Container;
  graphics: Array<Graphics>;
  width: number;
  height: number;

  constructor({ ratio, stripes, type }: FlagProps, container: Container) {
    this.ratio = ratio;
    this.type = type;
    this.container = container;
    this.width = 777;
    this.height = this.width / this.ratio;
    this.stripes = stripes.reduce(
      (val, cur, index) => [
        ...val,
        {
          ...cur,
          offset: (index === 0 ? 0 : val[index - 1].offset) + this.height * cur.width,
        },
      ],
      new Array<StripeWithOffset>()
    );
    this.graphics = [];
  }

  delete(): void {
    this.graphics.forEach((g) => g.destroy());
  }
}

export type Stripe = {
  width: number;
  color: number;
};

export type StripeWithOffset = Stripe & {
  offset: number;
};
