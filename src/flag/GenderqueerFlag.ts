import { Flag } from "./Flag";

export class GenderqueerFlag extends Flag {
  constructor() {
    super(5 / 3, [
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
    ]);
  }
}
