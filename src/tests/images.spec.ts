import app from '../../server'
import supertest from 'supertest'
import jasmine from 'jasmine'
import path from 'path'
import { resize_image } from '../utils/image_resize'
import express ,{ response, Response } from 'express'
const request = supertest(app)
describe('Test  /api endpoint is active', () => {
    it('gets the /api route', async () => {
        const response = await request.get('/api')
        expect(response.status).toBe(200)
    })
    it('gets /api/images', async() => {
        const response = await request.get('/api/images')
        // expect(response).
        
    })
    it('checks resize_image function is defined', async () => {
        const app = express.Router()
        const request = supertest(app)
        expect(resize_image).toBeDefined()
    })
    it('resize image', async () => {
    const input = path.join(__dirname,'../images/fjord.jpg');
    const output = path.join(__dirname,'../images/thumbnails/fjord.jpg');
    const thumbnailFile: void = await resize_image(input, 400, 400, output, response);
    expect(thumbnailFile).toEqual(undefined)
  });
})

