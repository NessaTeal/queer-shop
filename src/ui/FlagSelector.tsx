import Konva from 'konva';
import React from 'react';
import { Group } from 'react-konva';
import { Flag } from '../flag/Flag';
import {
  FlagDefinition,
  FlagType,
  FLAG_DEFINITIONS,
} from '../flag/flag-definitions';
import { GameButton } from './GameButton';
import { GameText } from './GameText';

type FlagSelectorProps = Konva.NodeConfig & {
  selectedFlag: FlagType;
  selectFlag: (flagDefinition: FlagDefinition) => void;
  flagStorage: Record<FlagType, number>;
};

export function FlagSelector({
  selectedFlag,
  selectFlag,
  flagStorage,
  ...rest
}: FlagSelectorProps) {
  return (
    <Group {...rest}>
      <GameText x={0} y={0} text="Select flag to paint:" />
      {Object.entries(FLAG_DEFINITIONS).map(([key, flagDefinition], index) => {
        const castedKey = key as FlagType;

        return (
          <Group key={key} x={0} y={20 + 60 * index}>
            <GameButton
              x={0}
              y={0}
              text={flagDefinition.type}
              fill={castedKey === selectedFlag ? '#abcabc' : '#00bb00'}
              onClick={() => {
                selectFlag(flagDefinition);
              }}
            />
            <GameText x={250} y={15} text={flagStorage[castedKey].toString()} />
            <Flag flagDefinition={flagDefinition} x={160} />
          </Group>
        );
      })}
    </Group>
  );
}
