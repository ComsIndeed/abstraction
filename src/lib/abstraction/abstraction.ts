// Contains backend code for the app

import { AbstractionProject } from "./interfaces/index";

class Abstraction {
  static projects: AbstractionProject[];
  static settings: any;

  start() {
    console.log("Abstraction runtime started");
  }
}

export default Abstraction;
