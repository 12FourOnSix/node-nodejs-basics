import { readdir } from 'fs/promises';
import { existsSync } from 'fs';

const folderPath = './src/fs/files';

export const list = async () => {
    if (!existsSync(folderPath)) throw new Error('FS operation failed');

    const filenamesArr = await readdir(folderPath);

    for (const filename of filenamesArr) {
        console.log(filename);
    }
};

try {
    list();
} catch (err) {
    console.error(err);
}