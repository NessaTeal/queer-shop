import { Flag } from "./Flag";

export class PolysexualFlag extends Flag {
  constructor() {
    super(5 / 3, [
      {
        width: 1 / 3,
        color: 0xf61cb9,
      },
      {
        width: 1 / 3,
        color: 0x07d569,
      },
      {
        width: 1 / 3,
        color: 0x1c92f6,
      },
    ]);
  }
}
