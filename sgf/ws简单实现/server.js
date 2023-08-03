const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

const users = new Map();

// 当有新的WebSocket连接时
server.on('connection', (socket) => {
  // 监听客户端发送的消息
  socket.on('message', (message) => {
    const data = JSON.parse(message);
    switch (data.event) {
      case 'join':
        // 用户加入，保存用户信息
        socket.userId = data.userId;
        users.set(socket.userId, socket);
        // 向所有客户端发送更新的用户列表
        broadcast('users', { users: Array.from(users.keys()) });
        break;
      case 'input':
        // 收到客户端的编辑操作，向所有客户端发送更新的文档内容
        broadcast('update', { content: data.value });
        break;
    }
  });

  // 监听连接关闭事件
  socket.on('close', () => {
    // 移除已断开的用户
    users.delete(socket.userId);
    // 向所有客户端发送更新的用户列表
    broadcast('users', { users: Array.from(users.keys()) });
  });
});

// 向所有客户端广播消息
function broadcast(event, data) {
  const message = JSON.stringify({ event, ...data });
  for (const socket of server.clients) {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  }
}

console.log('WebSocket server is running on port 3000');
