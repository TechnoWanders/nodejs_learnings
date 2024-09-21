const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/content.txt','utf8');
const second = readFileSync('./content/subfolder/text.txt','utf8');

//console.log(first, second);

writeFileSync('./content/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    {flag: 'a'}
)



