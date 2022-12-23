"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const image_resize_1 = require("../../utils/image_resize");
exports.imagesRouter = (0, express_1.default)();
exports.imagesRouter.get("/", (req, res) => {
    const fileLocation = path_1.default.resolve(__dirname, `../../images/encenadaport.jpg`);
    res.sendFile(`image/${fileLocation}`);
});
exports.imagesRouter.get('/images', (req, res) => {
    const filename = req.query.filename;
    const fileLocation = path_1.default.resolve(__dirname, `../../images/${filename}.jpg`);
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;
    // TODO
    // if fileLocation does not include filename.jpg res.send(Not found)
    if (!filename) {
        res.status(400).send('Please provide image with name, width and height for resizing');
    }
    (0, image_resize_1.resize_image)(fileLocation, Number(widthString), Number(heightString), filename, res);
    // TODO
    // if fileLocation does not match return file not found
    //res.type(`image/${format || 'jpg'}`)
    //  imageProcessedWithSharp(fileLocation, Number(widthString), Number(heightString), filename).pipe(res)
    // imageProcessedWithSharp(fileLocation, width, height)
});
