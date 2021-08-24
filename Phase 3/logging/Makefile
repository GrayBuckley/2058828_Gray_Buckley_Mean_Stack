all: fileIO.js record.js main.js
fileIO.js: fileIO.ts
	tsc fileIO.ts
record.js: record.ts
	tsc record.ts
main.js: main.ts
	tsc main.ts
run: all
	node main.js