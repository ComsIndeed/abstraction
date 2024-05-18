import { Button, Input, MenuItem, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";
import AbstractionInterface from "../lib/abstraction/interfaces";

export default function Interface(props: any) {
  return (
    <>
      <Visuals />
      <ControlPanel abstraction={props.abstraction} />
    </>
  );
}

function Visuals() {
  return (
    <>
      <h2>Backend Visual</h2>
    </>
  );
}
function ControlPanel(props: any) {
  const [selectedElementType, setSelectedElementType] = createSignal("folder");
  const [elementName, setElementName] = createSignal("");

  const abstraction: AbstractionInterface = props.abstraction;
  const handleSelection = (e: SelectChangeEvent) => {
    setSelectedElementType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div class="BackendInterface">
        <form>
          <h3>Create element</h3>
          <Input
            placeholder="Name"
            onchange={(e: ChangeEvent) => {
              setElementName(e.target.value);
            }}
          ></Input>
          <Select
            variant="outlined"
            label="Element"
            value={selectedElementType()}
            onChange={handleSelection}
          >
            <MenuItem value="folder">Folder</MenuItem>
            <MenuItem value="codeblock">Codeblock</MenuItem>
          </Select>
          <Button
            variant="contained"
            onClick={() => {
              abstraction.newProject("test");
            }}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              console.log(abstraction);
            }}
          >
            Log runtime
          </Button>
          <Button variant="text">Clear</Button>
        </form>
      </div>
    </>
  );
}
