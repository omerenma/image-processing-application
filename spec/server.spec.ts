
import supertest from 'supertest'
import imagesRouter from '../src/routes/api/images';

const request = supertest(imagesRouter);

describe('Test endpoint responses', () => {
    it('gets the endpoint', async () => {
        const response = await request.get('/images')
        expect(response.status).toBe(200);
        
    })
})










