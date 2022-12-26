import { addTwo } from '../index'

describe('addTwo function', () => {
    it('add two numbers and return 30', () => {
        expect(addTwo(20, 10)).toEqual(30)
    })
})
