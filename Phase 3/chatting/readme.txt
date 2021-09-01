Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Chatting with socket.io
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\.gitignore : ensures socket.io is not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\Makefile : Makefile for installing socket.io, compiling ts, and running server
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\client\login.html : a page to set user's name
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\client\chat.html : main chatting page
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\client\scripts.js : socket and dom operations linked by chat.html
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\client\Makefile : Makefile for installing socket.io-client
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\client\login.html : a page to set user's name
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\server\.gitignore : ensures compiled js is not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\server\msg.ts : type for a message sent from one user to another
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\server\connection.ts : server for recieving messages sent from clients and forewarding them to recipient(s)
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatting\server\Makefile : Makefile for installing socket.io, compiling ts, and running server

How to use:
    node.js required
    GNU make recomended
    init client + run server:
        if GNU make is installed:
            chatting> make run
        if not:
            chatting> cd client
            client> npm install socket.io-client
            client> cd ../server
            server> npm install socket.io
            server> tsc msg.ts
            server> tsc connection.ts
            server> node connection.js
    connect to server:
        open client/login.html in two or more chrome windows
        login with 2 or more different names
        input the name of one window to the "Name" field in another window, write a message, click send
            All clients with the inputted name will recieve the message sent by the first client
            message will appear at bottom of page
            ex: 
                One client, clientA, with name "A" is open.
                Two clients, clientB1 and clientB2, with name "B" are open.
                clientA sends message "hello world" to "B"
                both clientB1 and clientB2 will recieve message "hello world"
