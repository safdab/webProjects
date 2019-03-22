console.log("Hello world!")

const http = require('http')
let nbRequest = 0
// Instatiation d'un server

const server = http.createServer((req, res) => {
    nbRequest++;

    // Attente de deux secondes avant de repondre
    setTimeout(() => {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message: 'Hello World !', nbRequest}))
    }, 2000);
})

// Listen on port 8000
server.listen(8000)

console.log("Server running at http://127.0.0.1:8000/")