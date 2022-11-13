import { Dispatch, SetStateAction, useState } from 'react';
import {
  FlagType,
  FlagTypeArray,
  FLAG_DEFINITIONS,
} from './flag/flag-definitions';
import { FlagWithProgress, useFlagWithProgress } from './flag/FlagWithProgress';

const initialState = {
  fillSpeed: 10,
  money: 0,
  capacity: 0,
  capacityDischargeSpeed: 0.1,
  flagStorage: FlagTypeArray.reduce(
    (acc, cur) => ({ ...acc, [cur]: 0 }),
    {} as Record<FlagType, number>,
  ),
  selectedFlag: FLAG_DEFINITIONS.rainbow,
  brushSize: 10,
  timeToShowRecentFlag: 0,
};

export type GameState = typeof initialState & {
  recentlyFinishedFlag?: FlagType;
};
export type FullGameState = GameState & { flagWithProgress: FlagWithProgress };

export const useGameState = (): [
  FullGameState,
  Dispatch<SetStateAction<GameState>>,
] => {
  const [gameState, setGameState] = useState(initialState);
  const flagWithProgress = useFlagWithProgress(gameState, setGameState);

  return [{ ...gameState, flagWithProgress }, setGameState];
};
