import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:4000");

function subscribeToTimer(cb) {
//   socket.on("timer", timestamp => cb(null, timestamp));
socket.on("chat", text =>  {
//cb(null, text));
console.log("Message: ", text)
})
  //socket.emit("subscribeToTimer", 1000);
//   socket.emit("chat", value);
//   value = '';
}

export { subscribeToTimer };
