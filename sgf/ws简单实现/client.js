const textArea = document.getElementById('text');
const onlineUsers = document.getElementById('online-users');

// 创建WebSocket连接
const socket = new WebSocket('ws://localhost:3000');

// 当WebSocket连接成功时，向服务器发送一个"join"事件
socket.addEventListener('open', () => {
  socket.send(JSON.stringify({ event: 'join', userId: generateUserId() }));
});

// 监听服务器发送的消息
socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  switch (data.event) {
    case 'update':
      // 更新文档内容
      textArea.value = data.content;
      break;
    case 'users':
      // 更新在线用户列表
      onlineUsers.textContent = '在线用户: ' + data.users.join(', ');
      break;
  }
});

// 监听文本框的输入事件
textArea.addEventListener('input', (event) => {
  // 将编辑操作发送给服务器
  socket.send(JSON.stringify({ event: 'input', value: textArea.value }));
});

// 生成一个随机用户ID
function generateUserId() {
  return 'user_' + Math.floor(Math.random() * 1000);
}
