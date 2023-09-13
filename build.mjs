/* eslint-env node */
import { build } from "esbuild";
import babel from "esbuild-plugin-babel";

build({
  entryPoints: { seventyhccs: "src/main.ts" },
  bundle: true,
  minifyWhitespace: true,
  platform: "node",
  target: "rhino1.7.14",
  external: ["kolmafia"],
  plugins: [babel()],
  outdir: "KoLmafia/scripts/seventy-hccs",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
