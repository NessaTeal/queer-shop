import { Flag } from "./Flag";

export class BisexualFlag extends Flag {
  constructor() {
    super(5 / 3, [
      {
        width: 2 / 5,
        color: 0xd60270,
      },
      {
        width: 1 / 5,
        color: 0x9b4f96,
      },
      {
        width: 2 / 5,
        color: 0x0038a8,
      },
    ]);
  }
}
