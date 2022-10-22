import React, { useState } from 'react';
import Konva from 'konva';
import { Group, Rect } from 'react-konva';
import { FlagDefinition, FlagType, StripeWithOffset } from './flag-definitions';

const initialState = {
  offset: 0,
  lastStripeIndex: -1,
  stripes: Array<StripeWithOffset>(),
  finishedStripes: Array<Konva.NodeConfig>(),
  currentStripe: {} as Konva.NodeConfig & {
    progress: number;
  },
  type: FlagType.rainbow,
};

export type FlagWithProgress = typeof initialState;

export const useFlagWithProgress = (): [
  FlagWithProgress,
  (flagDefinition: FlagDefinition, brushSize: number, progress: number) => void,
  (delta: number, brushSize: number) => void,
  boolean,
] => {
  const [flag, setFlag] = useState(initialState);

  const initFlag = (
    flagDefinition: FlagDefinition,
    brushSize: number,
    progress: number,
  ) => {
    const stripeWidth = Math.min(brushSize, flagDefinition.stripes[0].offset);
    setFlag({
      offset: stripeWidth,
      lastStripeIndex: 0,
      finishedStripes: [],
      currentStripe: {
        fill: flagDefinition.stripes[0].color,
        height: stripeWidth,
        progress,
      },
      stripes: flagDefinition.stripes,
      type: flagDefinition.type,
    });
  };

  const updateFlag = (fill: number, brushSize: number) => {
    if (flag.lastStripeIndex === flag.stripes.length) {
      return;
    }

    while (fill > 0) {
      const notch = 1 - flag.currentStripe.progress;
      flag.currentStripe.progress += fill;
      fill -= Math.min(notch, fill);

      if (flag.currentStripe.progress > 1) {
        flag.finishedStripes.push({ ...flag.currentStripe, width: 777 });
        if (flag.offset === flag.stripes[flag.lastStripeIndex].offset) {
          flag.lastStripeIndex++;

          if (flag.lastStripeIndex === flag.stripes.length) {
            return;
          }
        }
        const chosenStripe = flag.stripes[flag.lastStripeIndex];
        const stripeWidth = Math.min(
          brushSize,
          chosenStripe.offset - flag.offset,
        );

        flag.currentStripe = {
          fill: chosenStripe.color,
          height: stripeWidth,
          y: flag.offset,
          progress: flag.currentStripe.progress - 1,
        };
        flag.offset += stripeWidth;
      }
    }
  };

  return [
    flag,
    initFlag,
    updateFlag,
    flag.lastStripeIndex === flag.stripes.length,
  ];
};

export function renderFlagWithProgress(flagWithProgress: FlagWithProgress) {
  return (
    <Group>
      {flagWithProgress.finishedStripes.map((s, index) => (
        <Rect key={index} {...s}></Rect>
      ))}
      <Rect
        {...flagWithProgress.currentStripe}
        width={777 * Math.min(1, flagWithProgress.currentStripe.progress)}
      />
    </Group>
  );
}
