import { enumToArray } from '../util';

export enum FlagType {
  rainbow = 'rainbow',
  agender = 'agender',
  asexual = 'asexual',
  bisexual = 'bisexual',
  genderfluid = 'genderfluid',
  nonbinary = 'nonbinary',
  pansexual = 'pansexual',
  polysexual = 'polysexual',
  transgender = 'transgender',
  aromantic = 'aromantic',
  genderqueer = 'genderqueer',
}

export const FlagTypeArray = enumToArray(FlagType);

export type FlagDefinition = {
  ratio: number;
  stripes: Array<StripeWithOffset>;
  type: FlagType;
  height: number;
  width: number;
};

export type StripeWithOffset = {
  width: number;
  color: string;
  offset: number;
};

export const FLAG_DEFINITIONS = Object.fromEntries(
  [
    {
      ratio: 3 / 2,
      stripes: [
        {
          width: 1 / 7,
          color: '#000000',
        },
        {
          width: 1 / 7,
          color: '#b9b9b9',
        },
        {
          width: 1 / 7,
          color: '#ffffff',
        },
        {
          width: 1 / 7,
          color: '#b8f483',
        },
        {
          width: 1 / 7,
          color: '#ffffff',
        },
        {
          width: 1 / 7,
          color: '#b9b9b9',
        },
        {
          width: 1 / 7,
          color: '#000000',
        },
      ],
      type: FlagType.agender,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 5,
          color: '#3da542',
        },
        {
          width: 1 / 5,
          color: '#a7d379',
        },
        {
          width: 1 / 5,
          color: '#ffffff',
        },
        {
          width: 1 / 5,
          color: '#a9a9a9',
        },
        {
          width: 1 / 5,
          color: '#000000',
        },
      ],
      type: FlagType.aromantic,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 4,
          color: '#000000',
        },
        {
          width: 1 / 4,
          color: '#a3a3a3',
        },
        {
          width: 1 / 4,
          color: '#ffffff',
        },
        {
          width: 1 / 4,
          color: '#800080',
        },
      ],
      type: FlagType.asexual,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 2 / 5,
          color: '#d60270',
        },
        {
          width: 1 / 5,
          color: '#9b4f96',
        },
        {
          width: 2 / 5,
          color: '#0038a8',
        },
      ],
      type: FlagType.bisexual,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 5,
          color: '#ff75a2',
        },
        {
          width: 1 / 5,
          color: '#ffffff',
        },
        {
          width: 1 / 5,
          color: '#be18d6',
        },
        {
          width: 1 / 5,
          color: '#000000',
        },
        {
          width: 1 / 5,
          color: '#333ebd',
        },
      ],
      type: FlagType.genderfluid,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 3,
          color: '#b57edc',
        },
        {
          width: 1 / 3,
          color: '#ffffff',
        },
        {
          width: 1 / 3,
          color: '#4a8123',
        },
      ],
      type: FlagType.genderqueer,
    },
    {
      ratio: 3 / 2,
      stripes: [
        {
          width: 1 / 4,
          color: '#fcf434',
        },
        {
          width: 1 / 4,
          color: '#fcfcfc',
        },
        {
          width: 1 / 4,
          color: '#9c59d1',
        },
        {
          width: 1 / 4,
          color: '#2c2c2c',
        },
      ],
      type: FlagType.nonbinary,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 3,
          color: '#ff218c',
        },
        {
          width: 1 / 3,
          color: '#ffd800',
        },
        {
          width: 1 / 3,
          color: '#21b1ff',
        },
      ],
      type: FlagType.pansexual,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 3,
          color: '#f61cb9',
        },
        {
          width: 1 / 3,
          color: '#07d569',
        },
        {
          width: 1 / 3,
          color: '#1c92f6',
        },
      ],
      type: FlagType.polysexual,
    },
    {
      ratio: 777 / 480,
      stripes: [
        {
          width: 1 / 6,
          color: '#e40303',
        },
        {
          width: 1 / 6,
          color: '#ff8c00',
        },
        {
          width: 1 / 6,
          color: '#ffed00',
        },
        {
          width: 1 / 6,
          color: '#008026',
        },
        {
          width: 1 / 6,
          color: '#004dff',
        },
        {
          width: 1 / 6,
          color: '#750787',
        },
      ],
      type: FlagType.rainbow,
    },
    {
      ratio: 5 / 3,
      stripes: [
        {
          width: 1 / 5,
          color: '#5bcefa',
        },
        {
          width: 1 / 5,
          color: '#f5a9b8',
        },
        {
          width: 1 / 5,
          color: '#ffffff',
        },
        {
          width: 1 / 5,
          color: '#f5a9b8',
        },
        {
          width: 1 / 5,
          color: '#5bcefa',
        },
      ],
      type: FlagType.transgender,
    },
  ].map((flagDefinition) => {
    const height = 777 / flagDefinition.ratio;
    return [
      flagDefinition.type,
      {
        ...flagDefinition,
        width: 777,
        height,
        stripes: flagDefinition.stripes.reduce(
          (val, cur, index) => [
            ...val,
            {
              ...cur,
              offset:
                (index === 0 ? 0 : val[index - 1].offset) + height * cur.width,
            },
          ],
          new Array<StripeWithOffset>(),
        ),
      },
    ];
  }),
) as Record<FlagType, FlagDefinition>;
