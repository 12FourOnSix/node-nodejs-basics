import { rename as renameFile } from 'fs/promises';
import { existsSync } from 'fs';

const 
    wrongFilenamePath = './src/fs/files/wrongFilename.txt',
    properFilenamePath = './src/fs/files/properFilename.md';

export const rename = async () => {
    if (!existsSync(wrongFilenamePath) || existsSync(properFilenamePath)) {
        throw new Error('FS operation failed');
    }

    await renameFile(wrongFilenamePath, properFilenamePath);
};


try {
    rename();
} catch (err) {
    console.error(err);
}