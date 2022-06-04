import { readFile } from 'fs/promises';
import { existsSync } from 'fs';

const fileToReadPath = './src/fs/files/fileToRead.txt';

export const read = async () => {
    if (!existsSync(fileToReadPath)) throw new Error('FS operation failed');

    const fileContent = await readFile(fileToReadPath, { encoding: 'utf-8' });
    console.log(fileContent);
};


try {
    read();
} catch (err) {
    console.error(err);
}