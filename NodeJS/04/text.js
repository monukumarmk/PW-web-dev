const fs = require("fs");

const newData = "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser."


fs.writerFileSync("node.js_architecture.txt, newData");

const data = fs.readFileSync("nodeJS_architecture.txt");

console.log(data.toString());


