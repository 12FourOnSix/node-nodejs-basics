import { rm } from 'fs/promises';
import { existsSync } from 'fs';

const 
    fileToBeDeletedPath = './src/fs/files/fileToRemove.txt';

export const remove = async () => {
    if (!existsSync(fileToBeDeletedPath)) {
        throw new Error('FS operation failed');
    }

    await rm(fileToBeDeletedPath);
};


try {
    remove();
} catch (err) {
    console.error(err);
}