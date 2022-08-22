import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";

import App from "../src/App";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.static(path.resolve("./dist"), { maxAge: "1d" }));
app.use(express.static(path.resolve("./public/assets"), { maxAge: "1d" }));

app.get("*", (req, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
              <App />
            </StaticRouter>
          </Provider>
        )}
          </div>`
      )
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
