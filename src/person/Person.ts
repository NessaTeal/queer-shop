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

export type Person = {
  name: string;
  gender: Gender;
  sexualPreference: SexualPreference;
  tags: Array<Tag>;
};

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

  return {
    name,
    gender,
    sexualPreference,
    tags,
  };
}
