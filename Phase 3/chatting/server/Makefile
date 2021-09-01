all: msg.js connection.js
msg.js: msg.ts
	tsc msg.ts
connection.js: connection.ts node_modules
	tsc connection.ts
run: all
	node connection.js
node_modules: 
	npm install socket.io
install: node_modules