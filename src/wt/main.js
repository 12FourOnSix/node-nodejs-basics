import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  let 
    osNumber = cpus().length,
    result = [];

  for (let i=0; i < osNumber; i++) {
    const 
      worker = new Worker('./src/wt/worker.js', { workerData: { id: i } }),
      number = 10 + i;

    worker.postMessage(number);

    worker.on('message', res_i => {
      result[i] = res_i;

      console.log(`result_${i}:`, result);
    });
  }
};

performCalculations();