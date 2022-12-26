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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imagesRouter = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const image_resize_1 = require("../../utils/image_resize");
const logger_1 = require("../../utils/logger");
exports.imagesRouter = express_1.default.Router();
exports.imagesRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //  const fileLocation = path.resolve(__dirname + `../../images/encenadaport.jpg`)
    //  res.sendFile(`image/${fileLocation}`)
    res.status(200).send('Hello');
}));
exports.imagesRouter.get('/images', logger_1.logger, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const fileLocation = path_1.default.resolve(__dirname, `../../images/${filename}.jpg`);
    const widthString = req.query.width;
    const heightString = req.query.height;
    // TODO
    // if fileLocation does not include filename.jpg res.send(Not found)
    if (!filename || !widthString || !heightString) {
        res.status(400).send('Unable to process! Please provide image with name, width and height for resizing');
    }
    yield (0, image_resize_1.resize_image)(fileLocation, Number(widthString), Number(heightString), filename, res);
}));
exports.default = exports.imagesRouter;
