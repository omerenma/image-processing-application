import express, {Application} from 'express'
import {imagesRouter} from './src/routes/api/images'
const app: Application = express();


app.use('/api', imagesRouter)
app.get('/', (req, res) => {
    res.send("Hello")
})

const port = 5000
app.listen(port, () => {
    console.log('Server listening on port')
})



export default app