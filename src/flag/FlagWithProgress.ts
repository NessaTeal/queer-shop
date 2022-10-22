import { Container } from "pixi.js";
import { Flag, FlagProps } from "./Flag";

export class FlagWithProgress extends Flag {
  progress: number;

  constructor(props: FlagProps, progress: number) {
    super(props);
    this.progress = progress;
  }

  init(container: Container): void {
    super.init(container);

    this.graphics.map((g) => {
      g.scale.set(0, 1);
    });
  }

  update(fill: number): void {
    this.progress += fill;
    let progressRequired = 0;

    for (let i = 0; i < this.stripes.length; i++) {
      const stripe = this.stripes[i];

      const progressSoFar = Math.max(0, Math.min(1, (this.progress - progressRequired) / stripe.width));

      this.graphics[i].scale.set(progressSoFar, 1);

      if (progressSoFar === 1) {
        progressRequired += stripe.width;
      } else {
        break;
      }
    }
  }
}
