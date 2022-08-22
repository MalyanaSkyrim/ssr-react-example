const svgrPlugin = require("esbuild-plugin-svgr");

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/index.js"],
    bundle: true,
    outfile: "dist/bundle.js",
    loader: {
      ".js": "jsx",
    },
    plugins: [svgrPlugin()],
  })
  .catch(() => process.exit(1));
