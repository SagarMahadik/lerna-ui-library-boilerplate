const fs = require("fs");
const path = require("path");

const packagePath = process.argv[2];
console.log("Reverting", packagePath);
const packageJsonPath = path.resolve(packagePath, "package.json");
const packageJson = require(packageJsonPath);

const isInternalDependency = (name) => name.startsWith("@benny/");

const revertDependency = (depName, revertTo) => {
	if (packageJson.peerDependencies && packageJson.peerDependencies[depName]) {
		packageJson.peerDependencies[depName] = revertTo;
	}
	// if (packageJson.dependencies && packageJson.dependencies[depName]) {
	// 	packageJson.dependencies[depName] = revertTo;
	// }
};

Object.keys(packageJson.peerDependencies || {}).forEach((depName) => {
	if (isInternalDependency(depName)) {
		revertDependency(depName, "workspace:*");
	} else {
		revertDependency(depName, "workspace:*");
	}
});

// Object.keys(packageJson.dependencies || {}).forEach((depName) => {
// 	if (isInternalDependency(depName)) {
// 		revertDependency(depName, "*");
// 	} else {
// 		revertDependency(depName, "workspace:*");
// 	}
// });

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("Reverted peer dependencies");

// function run() {
// 	console.log("Reverting peer dependencies");
// }

// run();
