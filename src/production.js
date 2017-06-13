const express = require('express');
const path = require('path');
const app = express();

const ClientStatsPath = path.join(__dirname, './static/stats.json');
const ServerRendererPath = path.join(__dirname, './static/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use(ServerRenderer(Stats));

app.listen(3000);