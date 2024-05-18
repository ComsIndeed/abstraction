import {
  BlockAbstractionElement,
  FolderAbstractionElement,
} from "./AbstractionElements";

export interface AbstractionProjectInterface {
  head: HeadProjectProperty;
  contents: ContentsProperty;
}

export interface HeadProjectProperty {
  name: string;
  dependencies: string[];
  author?: string;
  dateCreated?: Date;
  dateModified?: Date;
  [key: string]: any;
}

export type ContentsProperty = (
  | FolderAbstractionElement
  | BlockAbstractionElement
)[];
