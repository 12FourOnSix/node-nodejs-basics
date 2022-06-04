import { copyFile, readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve } from 'path';

const 
    origFolderPath = './src/fs/files',
    destFolderPath = './src/fs/files_copy';

export const copy = async () => {
    if (!existsSync(origFolderPath) || existsSync(destFolderPath)) {
        throw new Error('FS operation failed');
    }

    await mkdir(destFolderPath);
    const files = await readdir(origFolderPath);

    for await (const filename of files) {
        const 
            origFilePath = resolve(origFolderPath, filename),
            destFilePath = resolve(destFolderPath, filename);

        copyFile(origFilePath, destFilePath);
    }
};


try {
    copy();
} catch (err) {
    console.error(err);
}