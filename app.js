const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const eventrouter = require("./router/eventroute");
const descrouter = require("./router/descroute");

const app = express();

app.use(express.json());

app.use(mongoSanitize());

app.use('/api/v1/event', eventrouter);
app.use('/api/v1/desc', descrouter);

module.exports = app;