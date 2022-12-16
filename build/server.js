"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const images_1 = __importDefault(require("./src/routes/api/images"));
app.use('/api', images_1.default);
const port = 5000;
app.listen(port, () => {
    console.log('Server listening on port');
});
exports.default = app;
