import { ContentsProperty } from "./AbstractionProject";
import {
  HeadPropertyBlockAbstractionElement,
  instruction,
} from "./elementDefinitions/AbstractionBlockDefinitions";
import { HeadPropertyFolderAbstractionElement } from "./elementDefinitions/AbstractionFolderDefinitions";

export interface FolderAbstractionElement {
  head: HeadPropertyFolderAbstractionElement;
  contents: ContentsProperty;
}

export interface BlockAbstractionElement {
  head: HeadPropertyBlockAbstractionElement;
  instructions: instruction[];
}
