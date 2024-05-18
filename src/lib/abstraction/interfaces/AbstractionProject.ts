import {
  CodeblockAbstractionElement,
  FolderAbstractionElement,
} from "./AbstractionElements";

export interface AbstractionProject {
  head: HeadProperty;
  contents: ContentsProperty;
}

interface HeadProperty {
  name: string;
  dependencies: string[];
  author?: string;
  dateCreated?: Date;
  dateModified?: Date;
  [key: string]: any;
}

export type ContentsProperty = (
  | FolderAbstractionElement
  | CodeblockAbstractionElement
)[];
