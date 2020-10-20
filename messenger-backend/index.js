const express = require("express");

const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 4000;

const io = require("socket.io")(server);
const path = require("path");

app.get("/", (req, res) => {
  res.status(200).send("Hi, Sagar!");
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

io.on("connection", (client) => {
  //console.log("New client connected");
  client.on('Test', (message) => {
    console.log('A client sent us this message: ', message)
//     sendMessage(() => {
//         client.emit('chat', message)
//     }, message)
   })
    //client.emit("welcome", "Hello and Welcome to the Server")
});

// io.on('connection', (client) => {
//     client.on('subscribeToTimer', (interval) => {
//       setInterval(() => {
//         client.emit('timer', new Date());
//       }, interval);
//     });
//   });

app.use(express.static(path.join(__dirname + "/public")));
