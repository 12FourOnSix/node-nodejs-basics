import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const 
  zipPath = './src/zip/archive.gz',
  unzippedFilePath = './src/zip/fileToCompress.txt',
  readStream = createReadStream(zipPath),
  writeStream = createWriteStream(unzippedFilePath),
  gunzip = createGunzip();

export const decompress = async () => {
    try {
    await pipeline(
      readStream, 
      gunzip, 
      writeStream
    );
  } catch (err) {
    console.error(err);
  }
};

decompress();