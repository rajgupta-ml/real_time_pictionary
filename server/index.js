"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    var a = req.body;
    res.status(200).send(a);
});
app.listen(8080, function () {
    console.log('Hello');
});
