import { Application } from "@pixi/app";
import { Flag } from "./flag/Flag";
import { RainbowFlag } from "./flag/RainbowFlag";
import { Person } from "./person/Person";

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
      this.flag = new RainbowFlag();
      this.flag.init(this.app);
    }
  }
}
