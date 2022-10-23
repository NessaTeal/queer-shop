import React from 'react';
import { createRoot } from 'react-dom/client';
import { GameLoopRoot } from './gameloop/GameLoopRoot';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(<GameLoopRoot />);
} else {
  alert('Root not found!');
}
