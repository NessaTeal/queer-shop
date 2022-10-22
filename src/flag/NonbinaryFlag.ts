import { Flag } from "./Flag";

export class NonbinaryFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 3 / 2,
      stripes: [
        {
          width: 1 / 4,
          color: 0xfcf434,
        },
        {
          width: 1 / 4,
          color: 0xfcfcfc,
        },
        {
          width: 1 / 4,
          color: 0x9c59d1,
        },
        {
          width: 1 / 4,
          color: 0x2c2c2c,
        },
      ],
      progress,
    });
  }
}
