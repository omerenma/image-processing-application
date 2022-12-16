const sharp = require('sharp')
const fs  = require('fs')



interface Props {
    path: string
    format: string
    width: number
    height:number
}

const imageProcessedWithSharp = (props: Props): string => {
    console.log(props.path, 'pathh')
    const readImage = fs.createReadStream(props.path)
    let transform = sharp()

    if (props.format) {
        transform = transform.toFormat(props.format)
    }
    if (props.width || props.height) {
        transform = transform.resize(props.width, props.height)
    }
    return readImage.pipe(transform)
 }
module.exports =  imageProcessedWithSharp