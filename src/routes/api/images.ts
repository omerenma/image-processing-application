import express, {Application, Request, Response } from 'express'
import sharp from 'sharp'
import path from 'path'
import { writeFileToDisk} from '../../utils/writefile'
import { resize_image } from '../../utils/image_resize'
import {imageProcessedWithSharp} from '../../utils/imageProcessingWithSharp'
export const imagesRouter: Application = express()


imagesRouter.get("/", (req: Request, res: Response) => {
     const fileLocation = path.resolve(__dirname, `../../images/encenadaport.jpg`)
     res.sendFile(`image/${fileLocation}`)

})
imagesRouter.get('/images', (req: Request, res: Response) => {
    const filename = req.query.filename as string    
    const fileLocation = path.resolve(__dirname, `../../images/${filename}.jpg`)
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format


    // TODO
    // if fileLocation does not include filename.jpg res.send(Not found)
    if (!filename) {
        res.status(400).send('Please provide image with name, width and height for resizing')
    }

     resize_image(fileLocation, Number(widthString), Number(heightString), filename, res)
    // TODO
    // if fileLocation does not match return file not found
    
  
    //res.type(`image/${format || 'jpg'}`)
    //  imageProcessedWithSharp(fileLocation, Number(widthString), Number(heightString), filename).pipe(res)
    // imageProcessedWithSharp(fileLocation, width, height)

})
