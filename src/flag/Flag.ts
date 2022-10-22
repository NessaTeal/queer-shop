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
