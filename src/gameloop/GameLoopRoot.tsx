import React from 'react';
import App from '../App';
import { DeltaContext } from './DeltaContext';
import { useDelta } from './useDelta';

export function GameLoopRoot(): JSX.Element {
  const delta = useDelta();

  return (
    <DeltaContext.Provider value={delta}>
      <App />
    </DeltaContext.Provider>
  );
}
