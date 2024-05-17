"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes->controller -> repository -> mongodb-> repository->controller->route->json
const express_1 = require("express");
const hellorouter = (0, express_1.Router)();
//define paths
hellorouter.get("/", (req, res) => {
    res.json({ "data": "server is live" });
});
exports.default = hellorouter;
