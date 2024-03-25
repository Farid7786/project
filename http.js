const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/') {
        res.end('Welcome to our page')
        return;
    }
    if(req.url === '/about') {
        res.end('This Is the about page')
        return;
    }
    res.end(`
        <h1>Oops!!</h1>
        <p> Sorry We cant find the page you looking for<p>
        <a href="/"> back home</a>
    `)
})
server.listen(5000);
