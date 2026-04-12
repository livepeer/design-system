const typescript = require("rollup-plugin-typescript2");
const pkg = require("./package.json");

const config = {
  input: "./index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      clean: true,
      check: false,
      tsconfig: "tsconfig-rollup.json",
      typescript: require("typescript"),
      include: ["*.ts", "**/*.ts", "*.tsx", "**/*.tsx"],
    }),
  ],
};

module.exports = config;
