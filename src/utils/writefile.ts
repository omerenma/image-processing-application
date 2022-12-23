// import  fs from 'fs'
import * as fs from 'node:fs/promises';
import path from 'path'

export const writeFileToDisk =  (file: string | NodeJS.ArrayBufferView) => {
    try {
        fs.writeFile('new_path', file)
        //  fs.writeFileSync('dirname', file,  {flag:'a+'})
     
    } catch (error) {
        console.log(error, 'error')
    }
}