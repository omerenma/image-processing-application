import { Response } from 'express';
import path from 'path';
import sharp from 'sharp';

export const resize_image = async (
    image: string,
    width: number,
    height: number,
    filename: string,
    res: Response,
) => {
   
    try {
        const thumbnailPath = path.join(__dirname, '../../assets/thumbnails/');
        const thumbnailFile = `${thumbnailPath}${filename}${width}-${height}.jpg`;
             const result = await sharp(image)
            .resize(width, height)
            .toFormat('jpeg', { mozjpeg: true })
            .toFile(thumbnailFile)
            .then(() => {
               return res.status(200).sendFile(thumbnailFile);
            });
        return result;
    } catch (error) {
        console.warn(error);
    }
};
