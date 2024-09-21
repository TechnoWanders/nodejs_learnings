const {readFile, writeFile} = require('fs')
const { deflateSync } = require('zlib')

readFile('./content/content.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/subfolder/text.txt','utf-8', (err, result)=>{
        if(err){
            console.log(err)
            return 
        }
        const second = result 
        writeFile('./content/result-asyncc.txt',`Here is the result : ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return 
            }
            console.log(result)
        })
    })
})