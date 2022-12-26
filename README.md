## Description of application
- Image process application built with Nodejs, express server, jasmine testing fraimwork and sharp image processing
- The application is used to resize images sent to the server for optimal performance and quick load time of application

## Instruction on usage
- clone the respository from https://github.com/omerenma/image-processing-application into your local machine
- cd image-process-application
- Run yarn add all || npm install in your terminal

## Starting application express server
- Run yarn start in your terminal 
- Server listens on port 5000

## Linting, formating and code style check
- Run yarn lint

## Prettier
- Run yarn prettier

## Compiles and minifies for production
- Run yarn build

## Testing the endpoint
- Run yarn test

## Endpoint to resize image
- localhost:5000/api/images?filename='encenadaport.jpg'&width=200&height=200

## Image resize  functionality
- Upon accessing the endpoint url with the query parametersc, a new copy of the image is save to disk with  the location /assetes/thumbnails
