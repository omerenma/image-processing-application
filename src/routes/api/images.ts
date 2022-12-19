import express, { Request, Response } from 'express'
import path from 'path'
const imageProcessedWithSharp = require ('../../imageProcessingWithSharp')
import { writeFileToDisk} from '../../utils/writefile'
export const imagesRouter = express()



imagesRouter.get('/images', (req: Request, res: Response) => {
    const filename = req.query.filename as string    
    const fileLocation = path.resolve(__dirname, `../../images/${filename}.jpg`)
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format


    
    let width, height
    if (widthString) {
        width = Number(widthString)
    }
    if (heightString) {
        height = Number(heightString)
    }
    // TODO
    // if fileLocation does not include filename.jpg res.send(Not found)
    if (!filename) {
        return res.status(400).send('Please provide image with name, width and height for resizing')
    }
    // TODO
    // if fileLocation does not match return file not found

    
    writeFileToDisk(filename)
    res.type(`image/${format || 'jpg'}`)

        console.log("includes")
        imageProcessedWithSharp(fileLocation, format, width, height).pipe(res)
})


    