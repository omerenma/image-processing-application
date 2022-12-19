import * as fs from 'node:fs/promises'
import path from 'path'

export const writeFileToDisk = async (filename: string) => {
    try {
        await fs.writeFile('dirname.txt', `\n${filename}`, {flag:'a+'})
        .then(data => console.log(data, 'data'))
     
    } catch (error) {
        console.log(error, 'error')
    }
}