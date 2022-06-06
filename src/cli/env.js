import { env } from 'process';

export const parseEnv = () => {
    let resultStr = '';

    for (const key in env) {
        if (!/^RSS_/i.test(key)) continue;

        const 
            envVariableName = key,
            envVariableValue = env[key];

        resultStr += `${envVariableName}=${envVariableValue}; `;
    }

    if (resultStr.length === 0) throw new Error('Переменные окружения с названием \"RSS_\" не установлены');
    console.log(resultStr);
};

try {
    parseEnv();
} catch (err) {
    console.error(err);
}