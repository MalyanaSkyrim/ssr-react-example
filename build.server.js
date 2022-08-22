const svgrPlugin = require("esbuild-plugin-svgr");

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["server/server.jsx"],
    bundle: true,
    outfile: "build/server.js",
    plugins: [svgrPlugin()],
    platform:"node"
  })
  .catch(() => process.exit(1));