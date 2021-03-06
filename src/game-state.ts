import { Application } from "@pixi/app";
import { Container } from "pixi.js";
import { Flag } from "./flag/Flag";
import { generateFlagForPerson, generatePerson, Person } from "./person/Person";
import { TopBar } from "./ui/topbar";

export class GameState {
  person: Person;
  flag: Flag;
  fillSpeed: number;
  money: number;
  app: Application;
  topContainer: Container;
  flagContainer: Container;
  personContainer: Container;
  topBar: TopBar;
  capacity: number;
  capacityDischargeSpeed: number;

  constructor({ person, flag, fillSpeed, money, app }: { person: Person; flag: Flag; fillSpeed: number; money: number; app: Application }) {
    this.person = person;
    this.flag = flag;
    this.fillSpeed = fillSpeed;
    this.money = money;
    this.app = app;
    this.capacity = 0;
    this.capacityDischargeSpeed = 0.4;

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
      this.money++;
      this.flag.delete();
      this.person.delete();
      this.person = generatePerson();
      this.person.init(this.personContainer);
      this.flag = generateFlagForPerson(this.person, overflow);
      this.flag.init(this.flagContainer);
    }
  }
}
