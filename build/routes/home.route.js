"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const express_1 = require("express");
exports.Home = (0, express_1.Router)();
exports.Home.get('/', (req, res, next) => {
    res.status(200).send({
        status: true,
        statusCode: 200,
        message: 'Server is running!'
    });
});
//# sourceMappingURL=home.route.js.map