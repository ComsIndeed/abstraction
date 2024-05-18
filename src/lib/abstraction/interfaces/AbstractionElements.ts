import { ContentsProperty } from "./AbstractionProject";

export interface FolderAbstractionElement {
  head: HeadPropertyFolderAbstractionElement;
  contents: ContentsProperty;
}

export interface CodeblockAbstractionElement {
  head: HeadPropertyCodeblockAbstractionElement;
  instructions: instruction[];
}
