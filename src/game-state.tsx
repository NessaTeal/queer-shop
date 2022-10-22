import { chooseFlagForPerson, Flag, IncompleteFlag } from "./flag/Flag";
import { generatePerson, Person } from "./person/Person";

export type GameState = {
  person: Person;
  flag: IncompleteFlag;
  fillSpeed: number;
  money: number;
};

export function updateGameState(
  gameState: GameState,
  delta: number
): GameState {
  const newGameState = {
    ...gameState,
  };

  const updatedFlag = updateIncompleteFlag(gameState, delta);
  if (updatedFlag.complete) {
    newGameState.person = generatePerson();
    newGameState.flag = chooseFlagForPerson(newGameState.person);
    newGameState.money += 1;
  } else {
    newGameState.flag = updatedFlag;
  }

  return newGameState;
}

export function createIncompleteFlag(flag: Flag): IncompleteFlag {
  return {
    ...flag,
    incompleteStripes: [{ ...flag.stripes[0], progress: 0 }],
    complete: false,
  };
}

export function updateIncompleteFlag(
  {
    flag,
    fillSpeed,
  }: {
    flag: IncompleteFlag;
    fillSpeed: number;
  },
  delta: number
): IncompleteFlag {
  if (flag.complete) {
    return flag;
  }

  const currentStripe = flag.incompleteStripes.length - 1;
  flag.incompleteStripes[currentStripe].progress += fillSpeed * delta;

  if (flag.incompleteStripes[currentStripe].progress >= 1) {
    const overflow = flag.incompleteStripes[currentStripe].progress - 1;
    flag.incompleteStripes[currentStripe].progress = 1;
    if (flag.incompleteStripes.length === flag.stripes.length) {
      return { ...flag, complete: true };
    }

    flag.incompleteStripes.push({
      ...flag.stripes[currentStripe + 1],
      progress: overflow,
    });
  }

  return { ...flag };
}

export function increaseSpeed(gameState: GameState): GameState {
  const newGameState = { ...gameState };

  if (newGameState.money >= 1) {
    newGameState.money--;
    newGameState.fillSpeed += 0.0001;
  }

  return newGameState;
}
