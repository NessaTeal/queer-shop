import React from "react";
import { Flag } from "./Flag";

export function FlagComponent({ flag }: { flag: Flag }): JSX.Element {
  const height = 777 / flag.ratio;

  return (
    <div
      style={{
        width: "777px",
        height: `${height}px`,
      }}
    >
      {flag.stripes.map((stripe, index) => (
        <div
          key={index}
          style={{
            width: "777px",
            height: `${height * stripe.width}px`,
            background: stripe.color,
          }}
        ></div>
      ))}
    </div>
  );
}
