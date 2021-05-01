import { Flag } from "./Flag";

export class RainbowFlag extends Flag {
  constructor(progress: number) {
    super({
      ratio: 777 / 480,
      stripes: [
        {
          width: 1 / 6,
          color: 0xe40303,
        },
        {
          width: 1 / 6,
          color: 0xff8c00,
        },
        {
          width: 1 / 6,
          color: 0xffed00,
        },
        {
          width: 1 / 6,
          color: 0x008026,
        },
        {
          width: 1 / 6,
          color: 0x004dff,
        },
        {
          width: 1 / 6,
          color: 0x750787,
        },
      ],
      progress,
    });
  }
}
