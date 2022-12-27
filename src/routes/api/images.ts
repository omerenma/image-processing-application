import express, { Request, Response } from 'express';
import path from 'path';
import { resize_image } from '../../utils/image_resize';
import { logger } from '../../utils/logger';
import { validate_input } from '../../utils/validate_input';
export const imagesRouter = express.Router();

imagesRouter.get('/', async (req: Request, res: Response): Promise<void> => {
    res.status(200).send('Hello');
});
imagesRouter.get('/images', logger, async (req: Request, res: Response) => {
    const filename = req.query.filename as string;
    const fileLocation = path.resolve(__dirname, `../../images/${filename}.jpg`);
    const widthString = req.query.width;
    const heightString = req.query.height;

   // Validate user input
    validate_input(res, filename, Number(widthString), Number(heightString));
    // Resize image
    await resize_image(
        fileLocation,
        Number(widthString),
        Number(heightString),
        filename,
        res
    );
});
export default imagesRouter;
