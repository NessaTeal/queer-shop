import { Application } from "@pixi/app";
import { Flag } from "./flag/Flag";
import { generateFlagForPerson, generatePerson, Person } from "./person/Person";

export class GameState {
  person: Person;
  flag: Flag;
  fillSpeed: number;
  money: number;
  app: Application;

  constructor({
    person,
    flag,
    fillSpeed,
    money,
    app,
  }: {
    person: Person;
    flag: Flag;
    fillSpeed: number;
    money: number;
    app: Application;
  }) {
    this.person = person;
    this.flag = flag;
    this.fillSpeed = fillSpeed;
    this.money = money;
    this.app = app;
  }

  update(delta: number): void {
    this.flag.update(delta);

    if (this.flag.progress >= 1) {
      this.flag.delete();
      this.person.delete();
      this.person = generatePerson();
      this.person.init(this.app);
      this.flag = generateFlagForPerson(this.person);
      this.flag.init(this.app);
    }
  }
}
