import { createReadStream } from "fs";
import { pipeline } from 'stream/promises';
import { stdout } from "process";

const 
  fileToReadPath = "./src/streams/files/fileToRead.txt",
  readStream = createReadStream(fileToReadPath);

export const read = async () => {
    await pipeline(
        readStream,
        stdout,
        (err) => {
            if (!err) return;
            if (err.code == 'ENOENT') throw new Error('File not found, nothing to read');
        }
    );
};

read();