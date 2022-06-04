import { appendFile } from 'fs/promises';
import { existsSync } from 'fs';

const 
    filePath = './src/fs/files/fresh.txt',
    text = 'I am fresh and young';


export const create = async () => {
    if (existsSync(filePath)) {
        throw new Error('FS operation failed');
    }
    await appendFile(filePath, text);
};


try {
    create();
} catch (err) {
    console.error(err);
}