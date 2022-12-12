// the synchronuos way

const {readFileSync, writeFileSync} =require('fs');
const path =require('path');

console.log('start')
const first =readFileSync((path.join('./content','first.txt')),'utf8');
const second =readFileSync((path.join('./content','first.txt')),'utf8');

writeFileSync(`${(path.join('./content','result.txt'))}`,`${first},${second}`);
writeFileSync('./content/result.txt','appending from this part',{flag:'a'}); //this will append not overwrite

console.log('done with this task');
console.log("starting the next task");


