import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import createStyledComponentsTransformer from "typescript-plugin-styled-components";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

const externalDependencies = [
	"react",
	"react-dom",
	"styled-components",
	"react/jsx-runtime",
	"framer-motion",
];

const styledComponentsTransformer = createStyledComponentsTransformer({
	displayName: true,
	ssr: true,
});

export default {
	input: "src/index.ts",
	output: [
		{
			dir: "dist",
			entryFileNames: "[name].js",
			format: "esm",
			exports: "named",
		},
	],
	external: externalDependencies,
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({
			tsconfig: "tsconfig.json",
			transformers: [() => ({ before: [styledComponentsTransformer] })],
			exclude: ["src/**/*.spec.tsx", "src/**/*.stories.tsx"],
		}),
		terser(),
	],
};
