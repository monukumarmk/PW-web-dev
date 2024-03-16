const fs = require("fs");

const data = "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser."

fs.writerFileSync("node.js_architecture.txt, data");

const readData = fs.readFileSync("nodeJS_architecture.txt");

console.log(readData.toString());

