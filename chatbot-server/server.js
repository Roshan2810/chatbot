require('dotenv').config()
const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');
const { dummyResponse } = require('./dummy-response');

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: process.env.ORIGIN, methods: ["GET", "POST"] },
});

io.on('connection', (socket) => {
    socket.on('message', async (message) => {
        const botResponse = dummyResponse[message.toString().trim().toLowerCase()]; /** Add your model response instead of dummy response */ 
        if (!!botResponse) socket.emit('botresponse', botResponse);
        else socket.emit('botresponse', "I am unable understand")
    });
})

server.listen(4000, () => { console.log("listening on *:4000"); });