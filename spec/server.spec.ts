import { Express } from 'express';
import server from '../server'
const supertest = require('supertest')

const request = supertest(server);

describe('Test endpoint responses', () => {
    it('gets the endpoint', async () => {
        const response = await request.get('/api/images')
        expect(response.status).toBe(200);
    })

})











