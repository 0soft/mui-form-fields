const table = require("markdown-table");
const getComponents = require("../devtools/getComponents");
const components = getComponents();
const getURL = (component) => {
  return `https://zerosoft.dev/mui-form-fields/${component}`;
}
const baseTable = components.map(c => {
  return [`[\`<${c}/>\`](${getURL(c)})`];
});
const componentsTable = [
  ["Component"],
].concat(baseTable);
console.log(table(componentsTable))
