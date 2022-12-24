import express, {Application, Request, Response } from 'express'
import sharp from 'sharp'
import path from 'path'
import { writeFileToDisk} from '../../utils/writefile'
import { resize_image } from '../../utils/image_resize'
import {imageProcessedWithSharp} from '../../utils/imageProcessingWithSharp'
import {logger} from '../../utils/logger'
export const imagesRouter = express.Router()


imagesRouter.get("/", async(req: Request, res: Response): Promise<void> => {
    //  const fileLocation = path.resolve(__dirname + `../../images/encenadaport.jpg`)
    //  res.sendFile(`image/${fileLocation}`)
    res.status(200).send('Hello')

})
imagesRouter.get('/images', logger, async(req: Request, res: Response) => {
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
    

    await resize_image(fileLocation, Number(widthString), Number(heightString), filename, res)

})
export default imagesRouter