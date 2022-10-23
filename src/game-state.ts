import { Dispatch, SetStateAction, useState } from 'react';
import { FlagType, FLAG_DEFINITIONS } from './flag/flag-definitions';
import { FlagWithProgress, useFlagWithProgress } from './flag/FlagWithProgress';

const initialState = {
  fillSpeed: 10,
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
  } as Record<FlagType, number>,
  selectedFlag: FLAG_DEFINITIONS.rainbow,
  brushSize: 10,
};

export type GameState = typeof initialState;
export type FullGameState = GameState & { flagWithProgress: FlagWithProgress };

export const useGameState = (
  delta: number,
): [FullGameState, Dispatch<SetStateAction<GameState>>] => {
  const [gameState, setGameState] = useState(initialState);
  const flagWithProgress = useFlagWithProgress(gameState, setGameState, delta);

  return [{ ...gameState, flagWithProgress }, setGameState];
};
