import { HeadPropertyCodeblockAbstractionElement } from "./AbstractionCodeblockDefinitions";

export interface Connection {
  to: HeadPropertyCodeblockAbstractionElement["id"];
  relationship: "normal" | string;
}
