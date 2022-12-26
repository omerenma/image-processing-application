import express, { Application } from 'express';
import { imagesRouter } from './src/routes/api/images';
const app: Application = express();
const port = 5000;

app.use('/api', imagesRouter);
app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export default app;
