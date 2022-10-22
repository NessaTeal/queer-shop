import React from 'react';
import { Text } from 'react-konva';

interface GameTextProps {
  x: number;
  y: number;
  text: string;
}

export function GameText(props: GameTextProps) {
  return <Text {...props} />;
}
