import { RainbowFlag } from "./flag/RainbowFlag";
import { GameState } from "./game-state";
import { generatePerson } from "./person/Person";
import * as PIXI from "pixi.js";

const app = new PIXI.Application({
  width: 1920,
  height: 1080,
  backgroundAlpha: 0,
});

document.body.appendChild(app.view);

let lastTimestamp = 0;

const gameState = new GameState({
  person: generatePerson(),
  flag: new RainbowFlag(0),
  fillSpeed: 0.0005,
  money: 0,
  app,
});

const gameloop = (timestamp: number) => {
  const delta = timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  gameState.update(delta);
  requestAnimationFrame(gameloop);
};

requestAnimationFrame(gameloop);
