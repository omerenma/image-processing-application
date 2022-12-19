const sharp = require('sharp')
const fs  = require('fs')



interface Props {
    path: string
    format: string
    width: number
    height:number
}

const imageProcessedWithSharp = (path:string, format:string, width:number, height:number): string => {
    const readImage = fs.createReadStream(path)
      let transform = sharp()

    if (format) {
        transform = transform.toFormat(format)
    }
    if (width || height) {
        transform = transform.resize(width, height)
    }
    if (readImage.path === undefined) {
        console.log('Image not found')
    }
    return readImage.pipe(transform)
 }
module.exports =  imageProcessedWithSharp