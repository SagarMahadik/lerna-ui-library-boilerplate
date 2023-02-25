const fs = require("fs");
const findUp = require("find-up");

//how to get root package.json of mono repo

const monorepoPackageJsonPath = findUp.sync("package.json", { cwd: __dirname });
const monorepoPackageJson = JSON.parse(
	fs.readFileSync(monorepoPackageJsonPath)
);

console.log("monorepoPackageJson", monorepoPackageJson);

const constantsPackageJsonPath = findUp.sync("constants/package.json");
const constantsPackageJson = JSON.parse(
	fs.readFileSync(constantsPackageJsonPath)
);

console.log("constantsPackageJson", constantsPackageJson);

const constantsVersion = constantsPackageJson.version;

const packageJsonPath = findUp.sync("package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

console.log("packageJson", packageJson);

const isInternalDependency = (name) => name.startsWith("@bennytestui1/");

const updateDependency = (depName, updateTo) => {
	if (packageJson.peerDependencies && packageJson.peerDependencies[depName]) {
		packageJson.peerDependencies[depName] = updateTo;
	}
};

Object.keys(packageJson.peerDependencies || {}).forEach((depName) => {
	if (!isInternalDependency(depName)) {
		updateDependency(depName, monorepoPackageJson.devDependencies[depName]);
	}
});

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
