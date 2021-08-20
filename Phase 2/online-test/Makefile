all: types.js server
.PHONY: server client
types.js: types.ts
	tsc types.ts
server:
	make -C server all
run: all
	node .\server\listener.js