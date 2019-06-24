const fs = require("fs");
const path = require("path");
const getComponents = require("../devtools/getComponents");
const ignored = new Set(["FormField", "FormDialog"]);
const components = getComponents().filter(c => !ignored.has(c));
const options = [
  { label: 'Owner', value: 'owner' },
  { label: 'Admin', value: 'admin' },
  { label: 'Manager', value: 'manager' },
  { label: 'Stakeholder', value: 'stakeholder' },
];
const extraProps = {
  FormButtonField: {
    text: "Click me!!!",
  },
  FormChipField: {
    value: ["Chip A", "Chip B", "Chip C"],
  },
  FormReadOnlyField: {
    value: "This value serves only for reading purposes",
  },
  FormShowField: {
    value: "This is a permanently disabled field that only displays things",
  },
  FormSelectField: {
    options,
  },
  FormReactSelectField: {
    options,
  },
};
const formatProps = (props) => {
  if (!props) {
    return "";
  }

  const text = Object.entries(props).map(([k, v]) => {
    if (typeof v === "object") {
      return `${k}={${JSON.stringify(v)}}`;
    }

    return `${k}="${v}"`;
  }).join("\n");

  return text;
}
const getBasicPage = (component) => {
  return `
---
name: ${component}
menu: Components
route: /components/${component}
---

import Form from "../FormTest";
import { ${component} } from "../../src";
import { Playground, Props } from 'docz';

# ${ component }

## Example

<Playground>
  <Form
    render={() => {
      return (
        <${component}
          icon="extension"
          name="fieldName"
          label="Field Label"${formatProps(extraProps[component])}
        />
      );
    }}
  />
</Playground>

## Properties

<Props of={${component}}/>

  `.trim();
}

const componentsDoczPath = path.resolve(__dirname, "..", "docz", "components");
components.forEach(c => {
  fs.writeFileSync(path.join(componentsDoczPath, c + ".mdx"), getBasicPage(c));
});
