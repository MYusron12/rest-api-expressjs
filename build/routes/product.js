"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRouter = void 0;
const express_1 = require("express");
const logger_1 = require("../utils/logger");
exports.ProductRouter = (0, express_1.Router)();
exports.ProductRouter.get('/', (req, res, next) => {
    logger_1.logger.info('Success get product');
    res.status(200).send({
        status: true,
        statusCode: 200,
        data: [
            {
                name: 'Sepatu Adidas',
                price: 500000
            }
        ]
    });
});
exports.ProductRouter.post('/', (req, res, next) => {
    logger_1.logger.info('Success add product');
    res.status(200).send({
        status: true,
        statusCode: 200,
        data: req.body
    });
});
//# sourceMappingURL=product.js.map