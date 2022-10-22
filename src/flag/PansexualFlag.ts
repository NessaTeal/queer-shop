import { Flag } from "./Flag";

export class PansexualFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 3,
          color: 0xff218c,
        },
        {
          width: 1 / 3,
          color: 0xffd800,
        },
        {
          width: 1 / 3,
          color: 0x21b1ff,
        },
      ],
      progress,
    });
  }
}
