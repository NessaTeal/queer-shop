import { Flag } from "./Flag";

export class GenderfluidFlag extends Flag {
  constructor() {
    super(5 / 3, [
      {
        width: 1 / 5,
        color: 0xff75a2,
      },
      {
        width: 1 / 5,
        color: 0xffffff,
      },
      {
        width: 1 / 5,
        color: 0xbe18d6,
      },
      {
        width: 1 / 5,
        color: 0x000000,
      },
      {
        width: 1 / 5,
        color: 0x333ebd,
      },
    ]);
  }
}
