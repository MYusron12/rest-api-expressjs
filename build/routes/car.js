"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRouter = void 0;
const express_1 = require("express");
exports.CarRouter = (0, express_1.Router)();
exports.CarRouter.get('/', (req, res, next) => {
    res.status(200).send({
        status: 200,
        data: 'Ok',
        responseMessage: 'Success'
    });
});
//# sourceMappingURL=car.js.map