all: msg.js connection.js
msg.js: msg.ts
	tsc msg.ts
connection.js: connection.ts
	tsc connection.ts
run: all
	node connection.js