import { Flag } from "./Flag";

export class AromanticFlag extends Flag {
  constructor() {
    super(5 / 3, [
      {
        width: 1 / 5,
        color: 0x3da542,
      },
      {
        width: 1 / 5,
        color: 0xa7d379,
      },
      {
        width: 1 / 5,
        color: 0xffffff,
      },
      {
        width: 1 / 5,
        color: 0xa9a9a9,
      },
      {
        width: 1 / 5,
        color: 0x000000,
      },
    ]);
  }
}
