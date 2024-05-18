import { Button, MenuItem, Select } from "@suid/material";
import { SelectChangeEvent } from "@suid/material/Select";
import { createSignal } from "solid-js";

export default function Interface() {
  return (
    <>
      <Visuals />
      <ControlPanel />
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
function ControlPanel() {
  const [selectedElementType, setSelectedElementType] = createSignal("folder");

  const handleSelection = (e: SelectChangeEvent) => {
    setSelectedElementType(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div class="BackendInterface">
        <form>
          <h3>Create element</h3>
          <Select
            variant="outlined"
            label="Element"
            value={selectedElementType()}
            onChange={handleSelection}
          >
            <MenuItem value="folder">Folder</MenuItem>
            <MenuItem value="codeblock">Codeblock</MenuItem>
          </Select>
          <Button variant="contained">Create</Button>
          <Button variant="text">Clear</Button>
        </form>
      </div>
    </>
  );
}
