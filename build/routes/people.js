"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeopleRouter = void 0;
const express_1 = require("express");
exports.PeopleRouter = (0, express_1.Router)();
exports.PeopleRouter.get('/', (req, res, next) => {
    res.status(200).send({
        status: '200',
        data: [
            {
                id: 1,
                nama: 'Yusron'
            },
            {
                id: 2,
                nama: 'Baim'
            }
        ],
        responseMessage: 'Success'
    });
});
//# sourceMappingURL=people.js.map