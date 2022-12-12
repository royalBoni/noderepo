const {readFile, writeFile} =require('fs');
const { start } = require('repl');

console.log('start')
readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   
    const first =result;
    
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second =result;

        writeFile('./content/resultasync',`${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            else{
                console.log('done with task')
            }
        })
    })
})

console.log('waiting for a new task')