import { Application } from "@pixi/app";
import { Container } from "pixi.js";
import { FlagType } from "./flag/BaseFlag";
import { FLAG_DEFINITIONS } from "./flag/flag-definitions";
import { FlagWithProgress } from "./flag/FlagWithProgress";
import { Person } from "./person/Person";
import { FlagSelector } from "./ui/flag-selector";
import { TopBar } from "./ui/topbar";

export class GameState {
  person: Person;
  flag: FlagWithProgress;
  fillSpeed: number;
  money: number;
  app: Application;
  topContainer: Container;
  flagContainer: Container;
  personContainer: Container;
  flagSelectorContainer: Container;
  topBar: TopBar;
  capacity: number;
  capacityDischargeSpeed: number;
  flagStorage: Record<FlagType, number>;
  selectedFlag: FlagType;
  flagSelector: FlagSelector;
  brushSize: number;

  constructor({ person, fillSpeed, money, app }: { person: Person; fillSpeed: number; money: number; app: Application }) {
    this.person = person;
    this.fillSpeed = fillSpeed;
    this.money = money;
    this.app = app;
    this.capacity = 0;
    this.capacityDischargeSpeed = 0.4;
    this.selectedFlag = FlagType.rainbow;
    this.brushSize = 15;

    this.flagStorage = {
      rainbow: 0,
      agender: 0,
      asexual: 0,
      transgender: 0,
      aromantic: 0,
      polysexual: 0,
      pansexual: 0,
      nonbinary: 0,
      genderfluid: 0,
      genderqueer: 0,
      bisexual: 0,
    };

    const topContainer = new Container();
    this.topContainer = topContainer;

    const topBar = new TopBar(this);
    topBar.init(topContainer);
    this.topBar = topBar;

    const flagContainer = new Container();
    flagContainer.y = 50;
    this.flagContainer = flagContainer;
    this.flag = new FlagWithProgress(FLAG_DEFINITIONS[FlagType.rainbow], flagContainer, 0, this.brushSize);

    const personContainer = new Container();
    personContainer.x = 800;
    this.personContainer = personContainer;
    person.init(personContainer);

    const flagSelectorContainer = new Container();
    flagSelectorContainer.position.set(800, 200);
    this.flagSelectorContainer = flagSelectorContainer;
    const flagSelector = new FlagSelector(this);
    flagSelector.init(flagSelectorContainer);
    this.flagSelector = flagSelector;

    app.stage.addChild(topContainer, flagContainer, personContainer, flagSelectorContainer);
  }

  update(delta: number): void {
    const capacityDischarge = (Math.min(this.capacity, Math.max(this.capacity * this.capacityDischargeSpeed, 1)) * delta) / 1000;

    this.capacity -= capacityDischarge;

    this.flag.update(delta * this.fillSpeed + capacityDischarge, this.brushSize);
    this.topBar.update();

    if (this.flag.isDone()) {
      const overflow = this.flag.currentStripe.progress - 1;
      this.flagStorage[this.flag.type]++;
      this.flag.delete();
      this.flag = new FlagWithProgress(FLAG_DEFINITIONS[this.selectedFlag], this.flagContainer, overflow, this.brushSize);
      this.flagSelector.updateFlagCount();
    }
  }
}
