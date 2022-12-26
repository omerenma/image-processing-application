// import sharp from 'sharp';
// import fs from 'fs';
// import path from 'path';

// export const imageProcessedWithSharp =  async (paths: string, width: number, height: number, filename: string) => {
// 	const readImage = fs.createReadStream(paths);
// 	const transform = sharp;
// 	try {
// 		const thumbnailPath = path.join(__dirname, '../images/thumbnails/');
// 		const thumbnailFile = thumbnailPath + filename + '.' + 'jpg';
// 		await transform(readImage)
// 			.resize(width, height)
// 			.toFormat('jpeg', { mozjpeg: true })
// 			.toFile(thumbnailFile);

// 	} catch (error) {
// 		return 'Something went wrong';
// 	}
// 	readImage.pipe(transform);
// 	return transform;

// 	if (width || height) {
// 	   await transform(paths)
// 	        .resize(width, height)
// 	        .toFile('output.jpg')
// 	    .then((info: any) => {
// 	        console.log(info, 'info')
// 	    })
// 	.toBuffer()
// 	.then((data: any) => {fs.writeFileSync('images.jpg', data)})
// 	}

// 	readImage.pipe(transform)
// 	 return transform
// };
//module.exports =  imageProcessedWithSharp
