import React from 'react';
import { Group, Rect } from 'react-konva';
import Konva from 'konva';
import { FlagDefinition } from './flag-definitions';

interface FlagProps extends Konva.NodeConfig {
  flagDefinition: FlagDefinition;
}

export function Flag({ flagDefinition, ...rest }: FlagProps) {
  return (
    <Group {...rest} scale={{ x: 0.1, y: 0.1 }}>
      {flagDefinition.stripes.map((s, i) => (
        <Rect
          key={i}
          x={0}
          y={s.offset - flagDefinition.stripes[0].offset}
          width={777}
          height={flagDefinition.height * s.width}
          fill={s.color}
        />
      ))}
    </Group>
  );
}
