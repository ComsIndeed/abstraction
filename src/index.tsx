/* @refresh reload */
import { render } from "solid-js/web";
import Abstraction from "./lib/abstraction/abstraction";

const abstraction: AbstractionInterface = new Abstraction();
abstraction.start();

import App from "./App";
import AbstractionInterface from "./lib/abstraction/interfaces";

const root = document.getElementById("root");

render(() => <App abstraction={abstraction} />, root!);
