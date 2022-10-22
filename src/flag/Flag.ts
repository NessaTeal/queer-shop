import { AgenderFlag } from "./AgenderFlag";
import { AromanticFlag } from "./AromanticFlag";
import { AsexualFlag } from "./AsexualFlag";
import { BisexualFlag } from "./BisexualFlag";
import { GenderfluidFlag } from "./GenderfluidFlag";
import { GenderqueerFlag } from "./GenderqueerFlag";
import { NonbinaryFlag } from "./NonbinaryFlag";
import { PansexualFlag } from "./PansexualFlag";
import { PolysexualFlag } from "./PolysexualFlag";
import { RainbowFlag } from "./RainbowFlag";
import { TransgenderFlag } from "./TransgenderFlag";

export type Flag = {
  ratio: number;
  stripes: Array<Stripe>;
};

export type Stripe = {
  width: number;
  color: string;
};

export type IncompleteStripe = Stripe & {
  progress: number;
};

export const allFlags = [
  RainbowFlag,
  BisexualFlag,
  AgenderFlag,
  AromanticFlag,
  AsexualFlag,
  GenderfluidFlag,
  GenderqueerFlag,
  NonbinaryFlag,
  PansexualFlag,
  PolysexualFlag,
  TransgenderFlag,
];

export type IncompleteFlag = Flag & {
  incompleteStripes: Array<IncompleteStripe>;
  complete: boolean;
};

export function createIncompleteFlag(flag: Flag): IncompleteFlag {
  return {
    ...flag,
    incompleteStripes: [{ ...flag.stripes[0], progress: 0 }],
    complete: false,
  };
}

export function updateIncompleteFlag(
  flag: IncompleteFlag,
  delta: number
): IncompleteFlag {
  if (flag.complete) {
    return flag;
  }

  const currentStripe = flag.incompleteStripes.length - 1;
  flag.incompleteStripes[currentStripe].progress += 0.0007 * delta;

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
