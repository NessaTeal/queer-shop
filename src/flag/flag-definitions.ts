import { FlagType } from "./Flag";

export const FLAG_DEFINITIONS = {
  [FlagType.agender]: {
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
    type: FlagType.agender,
  },
  [FlagType.aromantic]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.aromantic,
  },
  [FlagType.asexual]: {
    ratio: 5 / 3,
    stripes: [
      {
        width: 1 / 4,
        color: 0x000000,
      },
      {
        width: 1 / 4,
        color: 0xa3a3a3,
      },
      {
        width: 1 / 4,
        color: 0xffffff,
      },
      {
        width: 1 / 4,
        color: 0x800080,
      },
    ],
    type: FlagType.asexual,
  },
  [FlagType.bisexual]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.bisexual,
  },
  [FlagType.genderfluid]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.genderfluid,
  },
  [FlagType.genderqueer]: {
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
    type: FlagType.genderqueer,
  },
  [FlagType.nonbinary]: {
    ratio: 3 / 2,
    stripes: [
      {
        width: 1 / 4,
        color: 0xfcf434,
      },
      {
        width: 1 / 4,
        color: 0xfcfcfc,
      },
      {
        width: 1 / 4,
        color: 0x9c59d1,
      },
      {
        width: 1 / 4,
        color: 0x2c2c2c,
      },
    ],
    type: FlagType.nonbinary,
  },
  [FlagType.pansexual]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.pansexual,
  },
  [FlagType.polysexual]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.polysexual,
  },
  [FlagType.rainbow]: {
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
    type: FlagType.rainbow,
  },
  [FlagType.transgender]: {
    ratio: 5 / 3,
    stripes: [
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
    ],
    type: FlagType.transgender,
  },
};
