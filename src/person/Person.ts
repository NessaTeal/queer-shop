export type Gender = "male" | "female" | "nb" | "genderfluid";
const genders: Array<Gender> = ["male", "female", "nb", "genderfluid"];

export type SexualOrientation = "male" | "female" | "many" | "all" | "none";
const orientations: Array<SexualOrientation> = [
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
  sexualOrientation: SexualOrientation;
  tags: Array<Tag>;
};

export function generatePerson(): Person {
  const name = "Autumn";
  const gender = genders[Math.floor(Math.random() * genders.length)];
  const sexualOrientation =
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

  if (gender === sexualOrientation) {
    tags.push("gay");
  } else if (sexualOrientation === "many") {
    if (Math.random() > 0.2) {
      tags.push("poly");
    } else {
      tags.push("bi");
    }
  } else if (sexualOrientation === "all") {
    if (Math.random() > 0.3) {
      tags.push("pan");
    } else {
      tags.push("bi");
    }
  } else if (sexualOrientation === "none") {
    tags.push("ace");
  }

  if (tags.length === 0) {
    tags.push("ally");
  }

  return {
    name,
    gender,
    sexualOrientation,
    tags,
  };
}
