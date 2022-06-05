import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverseText = new Transform({
  transform(chunk, encoding, callback) {
    const originalData = chunk.toString();
    const transformedData = originalData.split('').reverse().join('');
    const dataToWrite = `--> ${transformedData} \n\n`;

    callback(null, dataToWrite);
  }
});

export const transform = async () => {
  console.log('Привет!\nВведите текст, который хотите обработать');
  console.log('(прим.: для выхода нажмите "ctrl + c"):\n');

  try {
    await pipeline(
      stdin,
      reverseText,
      stdout
    );
  } catch (err) {
    console.error(err);
  }
};

transform();