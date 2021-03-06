import { Flag } from "./Flag";

export class AgenderFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 3 / 2,
      stripes: [
        {
          width: 1 / 7,
          color: 0x000000,
        },
        {
          width: 1 / 7,
          color: 0xb9b9b9,
        },
        {
          width: 1 / 7,
          color: 0xffffff,
        },
        {
          width: 1 / 7,
          color: 0xb8f483,
        },
        {
          width: 1 / 7,
          color: 0xffffff,
        },
        {
          width: 1 / 7,
          color: 0xb9b9b9,
        },
        {
          width: 1 / 7,
          color: 0x000000,
        },
      ],
      progress,
    });
  }
}
