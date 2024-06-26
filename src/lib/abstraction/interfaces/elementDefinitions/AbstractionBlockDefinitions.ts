import { Connection } from "./AbstractionElementDefinitions";

export interface HeadPropertyBlockAbstractionElement {
  name: string;
  id: string;
  blockType: "normal" | "looping" | "";
  connections: Connection[];
  [key: string]: any;
}

export interface instruction {
  code: string;
  language?: string;
  [key: string]: any;
}
