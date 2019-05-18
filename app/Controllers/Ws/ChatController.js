"use strict";

// COntroller responsavel pelo canal
// Escuta os eventos disparados pelo cliente
class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onError() {}
  // Cliente conectado diretamente no outro cliente P2P
  onMessage(data) {
    //enviar a informação para todos clientes até mesmo quem enviou
    this.socket.broadcastToAll("message", data);
  }
}

module.exports = ChatController;
