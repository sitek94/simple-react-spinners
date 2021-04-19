import clear from "rollup-plugin-clear"

const dist = "dist"

export default {
  input: "src/index.js",
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: "cjs",
    },
    {
      file: `${dist}/bundle.es.js`,
      format: "es",
    },
    {
      name: "SimpleReactSpinners",
      file: `${dist}/bundle.umd.js`,
      format: "umd",
    },
  ],
  plugins: [
    clear({
      targets: ["dist"],
    }),
  ],
}
