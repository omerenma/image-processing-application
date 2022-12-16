import express, { Request, Response } from 'express'
import path from 'path'
import {promises as fsPromise } from 'fs'
const imageProcessedWithSharp = require ('../../imageProcessingWithSharp')
import { writeFileToDisk} from '../../utils/writefile'
const imagesRouter = express()



imagesRouter.get('/images', (req: Request, res: Response):void => {
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
    if (!fileLocation) {
        res.send('Image not found')
    }
    writeFileToDisk(filename)
    res.type(`image/${format || 'jpg'}`)
    imageProcessedWithSharp(fileLocation, format, width, height).pipe(res)


})
export default imagesRouter

    