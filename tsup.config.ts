import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  target: "es2015",
  clean: true,
  tsconfig: "tsconfig.build.json",
  external: [/^@radix-ui/, /^react/, /^next/, /^@stitches/, /^tslib/],
  esbuildOptions(options) {
    options.jsx = "transform";
  },
});
