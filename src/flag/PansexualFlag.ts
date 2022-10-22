import { Flag } from "./Flag";

export class PansexualFlag extends Flag {
  constructor() {
    super(5 / 3, [
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
    ]);
  }
}
