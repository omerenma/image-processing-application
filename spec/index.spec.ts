import { addTwo} from '../src/index'

describe('index function adds two numbers', () => {
    it('return 40', () => {
        expect(addTwo(20, 20)).toEqual(40)
    });
    it('a + b  > 30', () => {
        expect(addTwo(20, 15)).toBeGreaterThan(30)
    })
})