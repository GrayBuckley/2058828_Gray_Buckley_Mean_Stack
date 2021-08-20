Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Online Tests
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\Makefile : makefile for compiling js of entire project
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\.gitignore : instructs git not to track compiled .js Files
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\config.json : can be changed to configure which port to listen for http requests on (defaults to 8080)
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\types.ts : type declarations used by server - client should use same ones to ease http parsing
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\server\Makefile : makefile for server subdir. Automatically used by main Makefile.
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\server\tests.json : tests loaded by listener.ts. Default is a short 2-question test.
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\server\listener.ts : http listener for server - controller of server
2058828_Gray_Buckley_Mean_Stack\Phase 2\online-tests\server\grader.ts : funcitons imported by listener to grade submissions in the server

How to use:
    GNU make and node.js required
    compile: online-test> make all
    start server: online-test> node .\server\listener.js
    compile + start server: online-test> make run