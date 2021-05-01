import { Flag } from "./Flag";

export class GenderqueerFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 3,
          color: 0xb57edc,
        },
        {
          width: 1 / 3,
          color: 0xffffff,
        },
        {
          width: 1 / 3,
          color: 0x4a8123,
        },
      ],
      progress,
    });
  }
}
