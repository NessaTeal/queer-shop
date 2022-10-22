import { Container, Text, TextStyle } from "pixi.js";
import { FlagType } from "../flag/Flag";
import { FLAG_DEFINITIONS } from "../flag/flag-definitions";
import { FlagWithProgress } from "../flag/FlagWithProgress";

export type Gender = "male" | "female" | "nb" | "genderfluid" | "no";
const genders: Array<Gender> = ["male", "female", "nb", "genderfluid", "no"];

export type SexualPreference = "male" | "female" | "many" | "all" | "none";
const orientations: Array<SexualPreference> = ["male", "female", "many", "all", "none"];

export type Tag = "ally" | "gay" | "trans" | "nb" | "ace" | "bi" | "pan" | "poly" | "genderfluid" | "agender" | "aro" | "genderqueer";

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

    const sexualPreference = new Text(`Sexual preference: ${this.sexualPreference}`, style);
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
  const name = generateName();
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const sexualPreference = orientations[Math.floor(Math.random() * orientations.length)];

  const tags = Array<Tag>();

  if (gender === "no") {
    tags.push("agender");
  } else if (Math.random() > 0.8) {
    tags.push("trans");
  }

  if (gender === "nb") {
    if (Math.random() > 0.5) {
      tags.push("nb");
    } else {
      tags.push("genderqueer");
    }
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

    if (Math.random() > 0.5) {
      tags.push("aro");
    }
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

export function generateFlagForPerson(person: Person, overflow: number): FlagWithProgress {
  const tag = person.tags[Math.floor(Math.random() * person.tags.length)];

  switch (tag) {
    case "gay":
    case "ally": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.rainbow], overflow);
    }
    case "bi": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.bisexual], overflow);
    }
    case "ace": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.asexual], overflow);
    }
    case "poly": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.polysexual], overflow);
    }
    case "pan": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.pansexual], overflow);
    }
    case "nb": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.nonbinary], overflow);
    }
    case "genderfluid": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.genderfluid], overflow);
    }
    case "trans": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.transgender], overflow);
    }
    case "agender": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.agender], overflow);
    }
    case "aro": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.aromantic], overflow);
    }
    case "genderqueer": {
      return new FlagWithProgress(FLAG_DEFINITIONS[FlagType.genderqueer], overflow);
    }
  }
}

const consonants = "qwrtpsdfghjklzxcvbnm" + "nnvvssrrttplkc";
const vowels = "aeouiy" + "aaeeooi";
const firstSyllables = ["cv", "vc", "vcv"];
const secondSyllables = ["cvc", "vc", "vcv", "vvc", "cv"];

function generateName(): string {
  const firstSyllable = firstSyllables[Math.floor(Math.random() * firstSyllables.length)]
    .split("")
    .map((l, i) => {
      const letter = l === "v" ? getRandomVowel() : getRandomConsonant();
      return i === 0 ? letter.toUpperCase() : letter;
    })
    .join("");

  const secondSyllable = secondSyllables[Math.floor(Math.random() * secondSyllables.length)]
    .split("")
    .map((l) => (l === "v" ? getRandomVowel() : getRandomConsonant()))
    .join("");

  return firstSyllable + secondSyllable;
}

function getRandomVowel(): string {
  return getRandomLetter(vowels);
}

function getRandomConsonant(): string {
  return getRandomLetter(consonants);
}

function getRandomLetter(letters: string): string {
  const ran = Math.floor(Math.random() * letters.length);
  console.log(ran);
  return letters[ran];
}
