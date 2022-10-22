import { Flag } from "./Flag";

export class AsexualFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 4,
          color: 0x000000,
        },
        {
          width: 1 / 4,
          color: 0xa3a3a3,
        },
        {
          width: 1 / 4,
          color: 0xffffff,
        },
        {
          width: 1 / 4,
          color: 0x800080,
        },
      ],
      progress,
    });
  }
}
