import { readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { createHash } from 'crypto';

const fileToReadPath = './src/hash/files/fileToCalculateHashFor.txt';

export const calculateHash = async () => {
    if (!existsSync(fileToReadPath)) throw new Error('FS operation failed');

    const fileContent = await readFile(fileToReadPath, { encoding: 'utf-8' });

    const hash = createHash('sha256');
    hash.update(fileContent);
    
    return hash.digest('hex');
};

try {
    calculateHash();
} catch (err) {
    console.error(err);
}