import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Template from "./template";
import App from "./App";

export default function serverRenderer({ clientStats, serverStats }) {
  return (req, res, next) => {
    const sheet = new ServerStyleSheet();
    const context = {};
    const markup = ReactDOMServer.renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      )
    );
    const helmet = Helmet.renderStatic();
    const css = sheet.getStyleTags();

    res.status(200).send(
      Template({
        markup: markup,
        helmet: helmet
      })
    );
  };
}
