import { Container, Text, TextStyle } from "pixi.js";
import { AsexualFlag } from "../flag/AsexualFlag";
import { BisexualFlag } from "../flag/BisexualFlag";
import { Flag } from "../flag/Flag";
import { GenderfluidFlag } from "../flag/GenderfluidFlag";
import { NonbinaryFlag } from "../flag/NonbinaryFlag";
import { PansexualFlag } from "../flag/PansexualFlag";
import { PolysexualFlag } from "../flag/PolysexualFlag";
import { RainbowFlag } from "../flag/RainbowFlag";
import { TransgenderFlag } from "../flag/TransgenderFlag";

export type Gender = "male" | "female" | "nb" | "genderfluid";
const genders: Array<Gender> = ["male", "female", "nb", "genderfluid"];

export type SexualPreference = "male" | "female" | "many" | "all" | "none";
const orientations: Array<SexualPreference> = [
  "male",
  "female",
  "many",
  "all",
  "none",
];

export type Tag =
  | "ally"
  | "gay"
  | "trans"
  | "nb"
  | "ace"
  | "bi"
  | "pan"
  | "poly"
  | "genderfluid";

export class Person {
  name: string;
  gender: Gender;
  sexualPreference: SexualPreference;
  tags: Array<Tag>;
  personContainer!: Container;

  constructor({
    name,
    gender,
    sexualPreference,
    tags,
  }: {
    name: string;
    gender: Gender;
    sexualPreference: SexualPreference;
    tags: Array<Tag>;
  }) {
    this.name = name;
    this.gender = gender;
    this.sexualPreference = sexualPreference;
    this.tags = tags;
  }

  init(container: Container): void {
    const style = new TextStyle({
      fontFamily: "Helvetica",
      fontSize: 16,
    });
    const personContainer = new Container();

    const name = new Text(`Name: ${this.name}`, style);
    personContainer.addChild(name);

    const gender = new Text(`Gender: ${this.gender}`, style);
    gender.y = 16;
    personContainer.addChild(gender);

    const sexualPreference = new Text(
      `Sexual preference: ${this.sexualPreference}`,
      style
    );
    sexualPreference.y = 32;
    personContainer.addChild(sexualPreference);

    const tags = new Text(`Tags: ${this.tags.join(", ")}`, style);
    tags.y = 48;
    personContainer.addChild(tags);

    container.addChild(personContainer);
    this.personContainer = personContainer;
  }

  delete(): void {
    this.personContainer.destroy();
  }
}

export function generatePerson(): Person {
  const name = "Autumn";
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const sexualPreference =
    orientations[Math.floor(Math.random() * orientations.length)];

  const tags = Array<Tag>();

  if (Math.random() > 0.8) {
    tags.push("trans");
  }

  if (gender === "nb") {
    tags.push("nb");
  } else if (gender === "genderfluid") {
    tags.push("genderfluid");
  }

  if (gender === sexualPreference) {
    tags.push("gay");
  } else if (sexualPreference === "many") {
    if (Math.random() > 0.2) {
      tags.push("poly");
    } else {
      tags.push("bi");
    }
  } else if (sexualPreference === "all") {
    if (Math.random() > 0.3) {
      tags.push("pan");
    } else {
      tags.push("bi");
    }
  } else if (sexualPreference === "none") {
    tags.push("ace");
  }

  if (tags.length === 0) {
    tags.push("ally");
  }

  return new Person({
    name,
    gender,
    sexualPreference,
    tags,
  });
}

export function generateFlagForPerson(person: Person, overflow: number): Flag {
  const tag = person.tags[Math.floor(Math.random() * person.tags.length)];

  switch (tag) {
    case "gay":
    case "ally": {
      return new RainbowFlag(overflow);
    }
    case "bi": {
      return new BisexualFlag(overflow);
    }
    case "ace": {
      return new AsexualFlag(overflow);
    }
    case "poly": {
      return new PolysexualFlag(overflow);
    }
    case "pan": {
      return new PansexualFlag(overflow);
    }
    case "nb": {
      return new NonbinaryFlag(overflow);
    }
    case "genderfluid": {
      return new GenderfluidFlag(overflow);
    }
    case "trans": {
      return new TransgenderFlag(overflow);
    }
  }
}
