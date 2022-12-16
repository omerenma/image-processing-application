"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('index function adds two numbers', () => {
    it('return 40', () => {
        expect((0, index_1.addTwo)(20, 20)).toEqual(40);
    });
    it('a + b  > 30', () => {
        expect((0, index_1.addTwo)(20, 15)).toBeGreaterThan(30);
    });
});
