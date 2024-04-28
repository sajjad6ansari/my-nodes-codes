const path=require("node:path")

console.log(__dirname);
console.log(__filename);

console.log("---------------------------------basename method");
console.log(path.basename(__dirname));
console.log(path.basename(__filename));

console.log("---------------------------------extname method");
console.log(path.extname(__dirname));
console.log(path.extname(__filename));

console.log("---------------------------------parse method");
console.log(path.parse(__dirname));
console.log(path.parse(__filename));

console.log("---------------------------------format method");
console.log(path.format(path.parse(__dirname)));
console.log(path.format(path.parse(__filename)));

console.log("---------------------------------isAbsolute method");
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./hello.js"));

console.log("---------------------------------join method");
console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("/folder1","folder2","index.html"));
console.log(path.join("/folder1","//folder2","index.html"));
console.log(path.join("/folder1","//folder2","../index.html"));
console.log(path.join(__dirname,"index.html"));

console.log("---------------------------------resolve method");
console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"index.html"));


