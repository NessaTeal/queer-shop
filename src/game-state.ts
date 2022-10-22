import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { FLAG_DEFINITIONS } from './flag/flag-definitions';
import { FlagWithProgress, useFlagWithProgress } from './flag/FlagWithProgress';
import { useFrameTime } from './useFrameTime';

const initState = (flagWithProgress: FlagWithProgress) => ({
  ...initialState,
  flagWithProgress,
});

const initialState = {
  fillSpeed: 0,
  money: 0,
  capacity: 0,
  capacityDischargeSpeed: 0.1,
  flagStorage: {
    rainbow: 0,
    agender: 0,
    asexual: 0,
    transgender: 0,
    aromantic: 0,
    polysexual: 0,
    pansexual: 0,
    nonbinary: 0,
    genderfluid: 0,
    genderqueer: 0,
    bisexual: 0,
  },
  selectedFlag: FLAG_DEFINITIONS.rainbow,
  brushSize: 15,
  flagWithProgress: {} as FlagWithProgress,
};

type GameState = typeof initialState;

export const useGameState = (): [
  GameState,
  Dispatch<SetStateAction<GameState>>,
] => {
  const previousFrameTime = useRef(0);
  const [flagWithProgress, initFlag, updateFlag, isDone] =
    useFlagWithProgress();
  const [gameState, setGameState] = useState(initState(flagWithProgress));

  useEffect(() => {
    initFlag(gameState.selectedFlag, gameState.brushSize, 0);
  }, []);

  const frameTime = useFrameTime();

  useEffect(() => {
    const delta = (frameTime - previousFrameTime.current) / 1000;
    previousFrameTime.current = frameTime;

    const capacityDischarge =
      Math.min(
        gameState.capacity,
        Math.max(gameState.capacity * gameState.capacityDischargeSpeed, 5),
      ) * delta;

    updateFlag(
      delta * gameState.fillSpeed + capacityDischarge,
      gameState.brushSize,
    );
    setGameState((oldState) => ({
      ...oldState,
      flagWithProgress,
      capacity: oldState.capacity - capacityDischarge,
    }));
  }, [frameTime]);

  if (isDone) {
    setGameState((oldState) => ({
      ...oldState,
      flagStorage: {
        ...oldState.flagStorage,
        [flagWithProgress.type]:
          oldState.flagStorage[flagWithProgress.type] + 1,
      },
    }));
    initFlag(gameState.selectedFlag, gameState.brushSize, 0);
  }

  return [gameState, setGameState];
};
