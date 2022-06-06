import { Worker } from 'worker_threads';

export const performCalculations = async () => {
  const 
    worker = new Worker('./src/wt/worker.js'),
    number = 7;

  worker.postMessage(number);

  worker.on('message', msg => {
    console.log('Hi, it\'s main thread! \nThe result is: ', msg);
  });
};

performCalculations();