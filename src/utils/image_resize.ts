import { Response } from 'express';
import path from 'path';
import fs from 'fs';
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
        const thumbnailFile = `${thumbnailPath}${filename}-${width}-${height}.jpg`;
        
        if (fs.existsSync(`${thumbnailPath}/${filename}-${width}-${height}.jpg`)) {
            console.log('Exists.......');
            return  res.sendFile(`${thumbnailPath}/${filename}-${width}-${height}.jpg`);
        }
        console.log('File does not exists so i am creating a new image .........');
             await sharp(image)
            .resize(width, height)
            .toFormat('jpeg', { mozjpeg: true })
            .toFile(thumbnailFile)
            .then(() => {
               return res.status(200).sendFile(thumbnailFile);
            });
        
    } catch (error) {
        console.warn(error);
    }
};
