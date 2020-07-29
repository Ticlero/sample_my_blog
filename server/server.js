const uuidv4 = require("uuid");
const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const Client = require("./client.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = 3333;
const SERVER_URI = `http://localhost:${port}`;

//const __dirname = path.resolve(path.dirname(""));
const clientList = [];

app.use(express.static(path.resolve(__dirname, "../public")));

io.on("connection", (ws) => {
  //ws.on("new message", ({ socketId, id, name }) => {
  //console.log({ socketId, id, name });
  //var user = new Client(data.socketId, data.id, data.name, uuidv4());
  //clientList.push(user);
  //ws.emit("enter", user);
  //});
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname, "../public/index.html");
});

server.listen(port, () => {
  console.log("Server Open", `Go ${SERVER_URI}`);
});
