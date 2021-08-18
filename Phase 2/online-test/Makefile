all: types.js server
.PHONY: server
types.js: types.ts
	tsc types.ts
server:
	make -C server all