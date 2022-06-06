import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { stdin } from 'process';

const 
  writeToFilePath = './src/streams/files/fileToWrite.txt',
  writeStream = createWriteStream(writeToFilePath);

export const write = async () => {
  console.log('Привет!\nВведите текст, который хотите записать в файл');
  console.log('(прим.: для выхода нажмите "ctrl + C"):  \n');

  try {
    await pipeline (
      stdin,
      writeStream
    );
  } catch (err) {
    console.error(err);
  }

};

write();