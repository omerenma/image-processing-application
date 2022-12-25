// import  fs from 'fs'
import * as fs from "node:fs/promises";

export const writeFileToDisk =  (file: string | NodeJS.ArrayBufferView) => {
    try {
        fs.writeFile("new_path", file);
        //  fs.writeFileSync('dirname', file,  {flag:'a+'})
     
    } catch (error) {
        return error
    }
};