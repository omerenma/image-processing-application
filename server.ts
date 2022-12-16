import express, {Express} from 'express'
const app:Express = express();
import imagesRouter from './src/routes/api/images'


app.use('/api', imagesRouter)

const port = 5000
app.listen(port, () => {
    console.log('Server listening on port')
})



export default app