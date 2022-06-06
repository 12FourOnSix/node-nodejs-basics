import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const 
  fileToZipPath = './src/zip/files/fileToCompress.txt',
  zippedFilePath = './src/zip/archive.gz',
  readStream = createReadStream(fileToZipPath),
  writeStream = createWriteStream(zippedFilePath),
  gzip = createGzip();

export const compress = async () => {
  try {
    await pipeline(
      readStream, 
      gzip, 
      writeStream
    );
  } catch (err) {
    console.error(err);
  }
};

compress();