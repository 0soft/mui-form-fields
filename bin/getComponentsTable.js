const getComponents = require("../devtools/getComponents");
const components = getComponents();
const getURL = (component) => {
  return `https://zerosoft.dev/mui-form-fields/${component}`;
}
const list = components.map(c => {
  return `- [\`<${c}/>\`](${getURL(c)})`;
});
console.log(list.join("\n"))
