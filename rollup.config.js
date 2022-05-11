import svelte from "rollup-plugin-svelte";
import svelteConfig from './svelte.config';
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";
import scss from "rollup-plugin-scss";
import alias from "@rollup/plugin-alias";
import path from 'path';

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

const projectRoot = path.resolve(__dirname, '.');

export default {
  input: "src/index.js",
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name },
  ],
  plugins: [
    resolve({
      alias: {
        '@': path.resolve(projectRoot, "src")
      }
    }),
    scss(),
    svelte({
      include: "src/components/**/*.svelte",
      preprocess: svelteConfig.preprocess
    }),
    alias({
      entries: [
        {
          find: "@",
          replacement: `${path.resolve(projectRoot, "src")}`,
        }
      ]
    })
  ]
};
