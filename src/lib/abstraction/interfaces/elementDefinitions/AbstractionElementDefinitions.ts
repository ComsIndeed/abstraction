import { HeadPropertyBlockAbstractionElement } from "./AbstractionBlockDefinitions";

export interface Connection {
  to: HeadPropertyBlockAbstractionElement["id"];
  relationship: "normal" | string;
}
