import { Flag } from "./Flag";

export class TransgenderFlag extends Flag {
  constructor() {
    super(5 / 3, [
      {
        width: 1 / 5,
        color: 0x5bcefa,
      },
      {
        width: 1 / 5,
        color: 0xf5a9b8,
      },
      {
        width: 1 / 5,
        color: 0xffffff,
      },
      {
        width: 1 / 5,
        color: 0xf5a9b8,
      },
      {
        width: 1 / 5,
        color: 0x5bcefa,
      },
    ]);
  }
}
