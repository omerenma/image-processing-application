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
const sharp = require('sharp');
const fs = require('fs');
const imageProcessedWithSharp = (path, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const readImage = fs.createReadStream(path);
    let transform = sharp;
    if (width || height) {
        yield transform(path)
            .resize(width, height)
            .toFile('output.jpg')
            .then((info) => {
            console.log(info, 'info');
        });
        // .toBuffer()
        // .then((data: any) => {fs.writeFileSync('images.jpg', data)})
    }
    // readImage.pipe(transform)
    return transform;
});
module.exports = imageProcessedWithSharp;
