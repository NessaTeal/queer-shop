import React from 'react';
import { Group, Rect } from 'react-konva';
import { GameText } from './GameText';

interface GameButtonProps {
  x: number;
  y: number;
  fill: string;
  text: string;
  onClick: () => void;
}

export function GameButton(props: GameButtonProps) {
  const { x, y, text } = props;
  return (
    <Group>
      <Rect {...props} width={150} height={50} />
      <GameText x={x + 5} y={y + 17} text={text} />
    </Group>
  );
}
