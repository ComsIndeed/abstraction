/* @refresh reload */
import { render } from "solid-js/web";
import Abstraction from "./lib/abstraction/abstraction";

const abstraction = new Abstraction();

import App from "./App";

const root = document.getElementById("root");

render(() => <App />, root!);

abstraction.start();
