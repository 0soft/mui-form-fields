const packageinfo = require("read-pkg-up").sync().package;
const peerDependencies = packageinfo.peerDependencies;
const table = require("markdown-table");
const baseTable = Object.entries(peerDependencies).map(([k, v]) => {
  return [`[${k}](https://www.npmjs.com/package/${k})`, `\`${v}\``];
});
const dependencyTable = [
  ["Dependency", "Version"],
].concat(baseTable);

const list = Object.keys(peerDependencies).join(" ");
console.log(table(dependencyTable))
console.log("")
console.log("Install all of them via:");
console.log("")
console.log("```bash");
console.log(`$ npm i --save ${list}`);
console.log("```");
