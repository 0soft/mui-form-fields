const getComponents = require("../devtools/getComponents");
const components = getComponents();
const getURL = (component) => {
  return `https://mui-form-fields.0soft.dev/components/${component}`;
}
const list = components.map(c => {
  return `- [\`<${c}/>\`](${getURL(c)})`;
});
console.log(list.join("\n"))
