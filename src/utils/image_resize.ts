import { Response } from 'express'
import path from 'path'
import sharp from 'sharp'

export const resize_image = async (image: string, width: number, height: number, filename: string, res: Response<any, Record<string, any>>) => {
    try {
        const thumbnailPath = path.join(__dirname, '../images/thumbnails/')
        const thumbnailFile = thumbnailPath + filename + '.' + 'jpg'
        const result = await sharp(image)
            .resize(width, height)
            .toFormat("jpeg", { mozjpeg: true })
            .toFile(thumbnailFile)
            .then(file => {
                res.sendFile(thumbnailFile)
            })
        return result
    } catch (error) {
        console.warn(error)
    }
}