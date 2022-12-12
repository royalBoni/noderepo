const http=require('http');

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end('welcome to our homepage')
    }
    else if(req.url==='/about'){
        res.end('this is our about page')
    }

    else{
        res.end(
            `
            <h1>opps</h1>
            <p>sorry we cant find this page</p>

            ` 
        )
    }
})

server.listen(5000)