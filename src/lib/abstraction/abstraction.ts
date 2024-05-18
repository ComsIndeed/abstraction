// Contains backend code for the app
import { v4 as UUID } from "uuid";

import {
  AbstractionProjectInterface,
  ContentsProperty,
  HeadProjectProperty,
  HeadPropertyBlockAbstractionElement,
  HeadPropertyFolderAbstractionElement,
  instruction,
} from "./interfaces/index";

class Abstraction {
  projects: AbstractionProjectInterface[] | any[] = [];
  settings: any;

  constructor() {
    const AbstractionLocalStorage =
      localStorage.getItem("AbstractionLocal") || "{}";
    this.projects = JSON.parse(AbstractionLocalStorage)?.projects || [];
  }

  newProject(name: string) {
    this.projects.unshift(new AbstractionProject(name));
  }

  start() {
    console.log("Abstraction runtime started");

    console.log(this);
  }
}

class AbstractionProject {
  head: HeadProjectProperty;
  contents: ContentsProperty = [];

  constructor(name: string) {
    this.head = { name: name, dependencies: [] };
  }

  newFolder(name: string) {
    this.contents.unshift(new FolderAbstractionElement(name));
  }

  newBlock(name: string) {
    this.contents.unshift(new BlockAbstractionElement(name));
  }
}

class FolderAbstractionElement {
  head: HeadPropertyFolderAbstractionElement;
  contents: ContentsProperty = [];

  constructor(name: string) {
    this.head = { name: name, id: UUID() };
  }

  newFolder(name: string) {
    this.contents.unshift(new FolderAbstractionElement(name));
  }

  newBlock(name: string) {
    this.contents.unshift(new BlockAbstractionElement(name));
  }
}

class BlockAbstractionElement {
  head: HeadPropertyBlockAbstractionElement;
  instructions: instruction[] = [];

  constructor(name: string) {
    this.head = {
      name: name,
      blockType: "normal",
      connections: [],
      id: UUID(),
    };
  }
}

export default Abstraction;
