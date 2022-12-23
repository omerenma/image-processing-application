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
const server_1 = __importDefault(require("../server"));
const supertest = require('supertest');
const { imagesRouter } = require('../src/routes/api/images');
const request = supertest(server_1.default);
describe('Test endpoint responses', () => {
    it('Gets first endpoint at :5000/', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/api/');
    }));
    it('gets the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename&width&height');
        expect(response.status).toBe(200);
    }));
});
