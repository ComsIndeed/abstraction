// export {} from "";
import { AbstractionProjectInterface } from "./AbstractionProject";

export default interface AbstractionInterface {
  projects: AbstractionProjectInterface[];
  settings: object;
  start(): void;
  newProject(name: string): void;
}

export * from "./AbstractionProject";
export * from "./AbstractionElements";
export * from "./elementDefinitions/AbstractionBlockDefinitions";
export * from "./elementDefinitions/AbstractionElementDefinitions";
export * from "./elementDefinitions/AbstractionFolderDefinitions";
