"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.createProduct = void 0;
const product_validation_1 = require("../validations/product.validation");
const logger_1 = require("../utils/logger");
const product_service_1 = require("../services/product.service");
const uuid_1 = require("uuid");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.product_id = (0, uuid_1.v4)();
    const { error, value } = (0, product_validation_1.createProductValidation)(req.body);
    if (error) {
        logger_1.logger.error('ERR: product - create = ', error.details[0].message);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.details[0].message
        });
    }
    try {
        yield (0, product_service_1.addProductToDB)(value);
        logger_1.logger.info('Success add product');
        return res.status(201).send({
            status: true,
            statusCode: 201,
            message: 'Success add product'
        });
    }
    catch (error) {
        logger_1.logger.error('ERR: product - create = ', error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error
        });
    }
});
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { id } } = req;
    if (id) {
        const product = yield (0, product_service_1.getProductById)(id);
        if (product) {
            logger_1.logger.info('Success get product');
            return res.status(200).send({
                status: true,
                statusCode: 200,
                data: product
            });
        }
        else {
            logger_1.logger.info('Failed get product');
            return res.status(404).send({
                status: true,
                statusCode: 404,
                message: 'Data Not Found',
                data: {}
            });
        }
    }
    else {
        const products = yield (0, product_service_1.getProductFromDb)();
        logger_1.logger.info('Success get product');
        return res.status(200).send({
            status: true,
            statusCode: 200,
            data: products
        });
    }
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { id } } = req;
    const { error, value } = (0, product_validation_1.updateProductValidation)(req.body);
    if (error) {
        logger_1.logger.error('ERR: product - update = ', error.details[0].message);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error.details[0].message
        });
    }
    try {
        const result = yield (0, product_service_1.updateProductById)(id, value);
        if (result) {
            logger_1.logger.info('Success update product');
            return res.status(200).send({
                status: true,
                statusCode: 200,
                message: 'Success update product'
            });
        }
        else {
            logger_1.logger.info('Data not found');
            return res.status(404).send({
                status: false,
                statusCode: 404,
                message: 'Failed update product'
            });
        }
    }
    catch (error) {
        logger_1.logger.error('ERR: product - update = ', error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { params: { id } } = req;
    try {
        const result = yield (0, product_service_1.deleteProductById)(id);
        if (result) {
            logger_1.logger.info('Success delete product');
            return res.status(200).send({
                status: true,
                statusCode: 200,
                message: 'Success delete product'
            });
        }
        else {
            logger_1.logger.info('Data not found');
            return res.status(404).send({
                status: false,
                statusCode: 404,
                message: 'Failed delete product'
            });
        }
    }
    catch (error) {
        logger_1.logger.error('ERR: product - delete = ', error);
        return res.status(422).send({
            status: false,
            statusCode: 422,
            message: error
        });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.controller.js.map