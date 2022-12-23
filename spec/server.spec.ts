import { Express } from 'express';
import server from '../server'
const supertest = require('supertest')
const {imagesRouter} = require('../src/routes/api/images')

const request = supertest(server);

describe('Test endpoint responses', () => {
    it('Gets first endpoint at :5000/', async() => {
        await request.get('/api/')
    })
    it('gets the endpoint', async () => {
       const response =  await request.get('/api/images?filename&width&height')
       expect(response.status).toBe(200)    
        
    })

})











