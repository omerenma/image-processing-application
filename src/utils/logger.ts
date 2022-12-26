import { Response, Request } from 'express';
export const logger = (req: Request, res: Response, next: () => void) => {
    console.log('Getting /images route');
    next();
};
