import React from "react";
import { IncompleteFlag } from "./Flag";

export function IncompleteFlagComponent({
  flag,
}: {
  flag: IncompleteFlag;
}): JSX.Element {
  const height = 777 / flag.ratio;

  return (
    <div
      style={{
        width: "777px",
        height: `${height}px`,
      }}
    >
      {flag.incompleteStripes.map((stripe, index) => (
        <div
          key={index}
          style={{
            width: `${stripe.progress * 777}px`,
            height: `${height * stripe.width}px`,
            background: stripe.color,
          }}
        ></div>
      ))}
    </div>
  );
}
