import { argv } from 'process';

export const parseArgs = () => {
  const argsArr = argv.slice(2);
  let resultStr = '';

  for (const item of argsArr) {
    const isEven = argsArr.indexOf(item) % 2 === 0;
    let propName, propValue;

    if (isEven) {
      propName = item.replace('--', '');
      resultStr += propName;
    } else {
      propValue = ` is ${item}, `;
      resultStr += propValue;
    }
  }

  if (resultStr.length === 0) throw new Error('Не передано ни одного аргумента');
  
  resultStr = resultStr.trim().replace(/\,$/, '');
  console.log(resultStr);
};

try {
  parseArgs();
} catch (err) {
  console.error(err);
}