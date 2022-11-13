import React from 'react';
import './style.css';
import { Stage, Layer } from 'react-konva';
import { FlagDefinition } from '../flag/flag-definitions';
import { renderFlagWithProgress } from '../flag/FlagWithProgress';
import { useGameState } from '../game-state';
import { FlagSelector } from '../ui/FlagSelector';

export function App(): JSX.Element {
  const [gameState, setGameState] = useGameState();

  return (
    <>
      <button
        onClick={() =>
          setGameState((gameState) => ({
            ...gameState,
            fillSpeed: gameState.fillSpeed + 1,
          }))
        }
      >
        Increase fill speed
      </button>
      <button
        onClick={() =>
          setGameState((gameState) => ({
            ...gameState,
            capacity: gameState.capacity + 10,
          }))
        }
      >
        Manual fill
      </button>
      <button
        onClick={() =>
          setGameState((gameState) => ({
            ...gameState,
            brushSize: gameState.brushSize + 5,
          }))
        }
      >
        Increase brush size
      </button>
      <Stage width={1920} height={1080}>
        <Layer>
          {renderFlagWithProgress(gameState)}
          <FlagSelector
            selectedFlag={gameState.selectedFlag.type}
            selectFlag={(flagDefinition: FlagDefinition) => {
              setGameState((oldState) => ({
                ...oldState,
                selectedFlag: flagDefinition,
              }));
            }}
            flagStorage={gameState.flagStorage}
            x={800}
          />
        </Layer>
      </Stage>
    </>
  );
}

export default App;
