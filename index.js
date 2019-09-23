const http = require('http')
const express = require('express')

const app = express()
const server = http.Server(app)

const PORT = process.env.port || 3000

const io = require('socket.io')(server)

app.use(express.static(__dirname + '/public'))

function onConnection(socket) {
    console.log('connect ', socket.id)
    socket.on('drawing', data => {
        console.log('SOCKET DATA:', data)
        socket.broadcast.emit('drawing', data)
    })
}

// what is diff b/w onConnect and connection

io.on('connection', onConnection)

server.listen(PORT, () => console.log(`server listening on port ${PORT} 🤘🏼`))
