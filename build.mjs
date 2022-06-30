/* eslint-env node */

import { build } from "esbuild";
import babel from "esbuild-plugin-babel";

build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  platform: "node",
  target: "rhino1.7.14",
  external: ["kolmafia"],
  plugins: [babel()],
  outfile: "KoLmafia/scripts/seventy-hccs/seventy-hccs.js",
}).catch(() => process.exit(1));

export {};
