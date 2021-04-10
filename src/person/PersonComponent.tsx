import React from "react";
import { Person } from "./Person";

export function PersonComponent({ person }: { person: Person }): JSX.Element {
  return (
    <div>
      <div>Name: {person.name}</div>
      <div>Gender: {person.gender}</div>
      <div>Sexual orientation: {person.sexualOrientation}</div>
      <div style={{ display: "flex" }}>
        {"Tags: "}
        {person.tags.map((tag, index) => (
          <div key={index} style={{ marginRight: "4px" }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
