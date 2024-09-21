const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our web server')
    }
    //console.log(req)
    if(req.url === '/about'){
        res.end('here is our history page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Page not found</p>
        <a href="/">Back to home</a>
        `)
})

server.listen(5000)