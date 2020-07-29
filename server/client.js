function Client(socketId, id, name, uuid) {
  this.socketId = socketId;
  this.id = id;
  this.name = name;
  this.uuid = uuid;
}

Client.prototype.sendMsg = function (msg) {};

module.exports.Client = Client;
