const express = require("express");
const eventrouter = require("./router/eventroute");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();

app.use(express.json());

app.use(mongoSanitize());

app.use('/api/v1/event', eventrouter);

module.exports = app;