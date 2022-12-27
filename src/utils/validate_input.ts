import { Response } from 'express';
export const validate_input = (res: Response, filename?: string, width?: number, height?: number) => {
    if (!filename) {
       return res.status(400).send('Please provide filename');
    }
    if (!width || width === 0) {
       return res.status(400).send('Please provide image width and width cannot be 0');
    }
    if (!height || height === 0) {
        return res.status(400).send('Please provide image height and height cannot be 0');
    }
    return;
};