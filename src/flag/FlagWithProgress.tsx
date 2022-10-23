import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Konva from 'konva';
import { Group, Rect } from 'react-konva';
import {
  FlagDefinition,
  FlagType,
  FLAG_DEFINITIONS,
  StripeWithOffset,
} from './flag-definitions';
import { GameState } from '../game-state';

function initFlag(
  brushSize: number,
  flagDefinition: FlagDefinition,
): FlagWithProgress {
  const stripeWidth = Math.min(brushSize, flagDefinition.stripes[0].offset);
  return {
    offset: stripeWidth,
    lastStripeIndex: 0,
    finishedStripes: [],
    currentStripe: {
      fill: flagDefinition.stripes[0].color,
      height: stripeWidth,
      progress: 0,
    },
    stripes: flagDefinition.stripes,
    type: flagDefinition.type,
  };
}

export type FlagWithProgress = {
  offset: number;
  lastStripeIndex: number;
  stripes: Array<StripeWithOffset>;
  finishedStripes: Array<Konva.NodeConfig>;
  currentStripe: Konva.NodeConfig & {
    progress: number;
  };
  type: FlagType;
};

export const useFlagWithProgress = (
  gameState: GameState,
  setGameState: Dispatch<SetStateAction<GameState>>,
  delta: number,
): FlagWithProgress => {
  const [flag, setFlag] = useState(
    initFlag(gameState.brushSize, FLAG_DEFINITIONS.rainbow),
  );

  useEffect(() => {
    const capacityDischarge =
      Math.min(
        gameState.capacity,
        Math.max(gameState.capacity * gameState.capacityDischargeSpeed, 5),
      ) * delta;
    setGameState((oldState) => ({
      ...oldState,
      capacity: oldState.capacity - capacityDischarge,
    }));

    let fill = delta * gameState.fillSpeed + capacityDischarge;

    let flagToWork = JSON.parse(JSON.stringify(flag)) as FlagWithProgress;

    while (fill > 0) {
      const notch = Math.min(1 - flagToWork.currentStripe.progress, fill);
      flagToWork.currentStripe.progress += notch;
      fill -= notch;

      if (fill > 0) {
        flagToWork.finishedStripes.push({
          ...flagToWork.currentStripe,
          width: 777,
        });
        if (
          flagToWork.offset ===
          flagToWork.stripes[flagToWork.lastStripeIndex].offset
        ) {
          flagToWork.lastStripeIndex++;

          if (flagToWork.lastStripeIndex === flagToWork.stripes.length) {
            setGameState((oldState) => ({
              ...oldState,
              flagStorage: {
                ...oldState.flagStorage,
                [flagToWork.type]: oldState.flagStorage[flagToWork.type] + 1,
              },
            }));
            flagToWork = initFlag(gameState.brushSize, gameState.selectedFlag);
            setFlag(flag);
            continue;
          }
        }
        const chosenStripe = flagToWork.stripes[flagToWork.lastStripeIndex];
        const stripeWidth = Math.min(
          gameState.brushSize,
          chosenStripe.offset - flagToWork.offset,
        );

        flagToWork.currentStripe = {
          fill: chosenStripe.color,
          height: stripeWidth,
          y: flagToWork.offset,
          progress: flagToWork.currentStripe.progress - 1,
        };
        flagToWork.offset += stripeWidth;
      }
    }

    setFlag(flagToWork);
  }, [delta]);

  return flag;
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
