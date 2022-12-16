"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const imageProcessedWithSharp = require('../../imageProcessingWithSharp');
const writefile_1 = require("../../utils/writefile");
const imagesRouter = (0, express_1.default)();
imagesRouter.get('/images', (req, res) => {
    const filename = req.query.filename;
    const fileLocation = path_1.default.resolve(__dirname, `../../images/${filename}.jpg`);
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;
    let width, height;
    if (widthString) {
        width = Number(widthString);
    }
    if (heightString) {
        height = Number(heightString);
    }
    if (!fileLocation) {
        res.send('Image not found');
    }
    (0, writefile_1.writeFileToDisk)(filename);
    res.type(`image/${format || 'jpg'}`);
    imageProcessedWithSharp(fileLocation, format, width, height).pipe(res);
});
exports.default = imagesRouter;
