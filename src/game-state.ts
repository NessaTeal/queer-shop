import { Application } from "@pixi/app";
import { Container } from "pixi.js";
import { FlagType } from "./flag/Flag";
import { FlagWithProgress } from "./flag/FlagWithProgress";
import { generateFlagForPerson, generatePerson, Person } from "./person/Person";
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
  topBar: TopBar;
  capacity: number;
  capacityDischargeSpeed: number;
  flagStorage: Record<FlagType, number>;

  constructor({
    person,
    flag,
    fillSpeed,
    money,
    app,
  }: {
    person: Person;
    flag: FlagWithProgress;
    fillSpeed: number;
    money: number;
    app: Application;
  }) {
    this.person = person;
    this.flag = flag;
    this.fillSpeed = fillSpeed;
    this.money = money;
    this.app = app;
    this.capacity = 0;
    this.capacityDischargeSpeed = 0.4;

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
    flag.init(flagContainer);

    const personContainer = new Container();
    personContainer.x = 800;
    this.personContainer = personContainer;
    person.init(personContainer);

    app.stage.addChild(topContainer, flagContainer, personContainer);
  }

  update(delta: number): void {
    const capacityDischarge = (Math.min(this.capacity, Math.max(this.capacity * this.capacityDischargeSpeed, 1)) * delta) / 1000;

    this.capacity -= capacityDischarge;

    this.flag.update(delta * this.fillSpeed + capacityDischarge);
    this.topBar.update();

    if (this.flag.progress >= 1) {
      const overflow = this.flag.progress - 1;
      this.flagStorage[this.flag.type]++;
      this.flag.delete();
      this.person.delete();
      this.person = generatePerson();
      this.person.init(this.personContainer);
      this.flag = generateFlagForPerson(this.person, overflow);
      this.flag.init(this.flagContainer);
    }
  }
}
