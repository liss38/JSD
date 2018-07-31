const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

console.log('connection');

server.on('connection', (ws) => {
	ws.send('Hello!');

	console.log('connection');

	ws.on('message', (message) => {
		if(message === 'exit') {
			ws.close();
		} else {
			server.clients.forEach( (client) => {
				if(client.readyState === WebSocket.OPEN) {
					client.send(message);
				}
			});
		}
	});
});