Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Chatlog
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\.gitignore : ensures socket.io is not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\Makefile : Makefile for installing socket.io, compiling ts, and running server
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\client\login.html : a page to set user's name
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\client\chat.html : main chatting page
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\client\scripts.js : socket and dom operations linked by chat.html
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\client\Makefile : Makefile for installing socket.io-client
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\client\login.html : a page to set user's name
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\server\.gitignore : ensures compiled js is not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\server\msg.ts : type for a message sent from one user to another
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\server\dbIO.ts : process for logging messages in the database
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\server\connection.ts : server for recieving messages sent from clients and forewarding them to recipient(s)
2058828_Gray_Buckley_Mean_Stack\Phase 3\chatlog\server\Makefile : Makefile for installing socket.io, compiling ts, and running server

How to use:
    node.js required
    GNU make recomended
    init client + run server:
        if GNU make is installed:
            chatlog> make run
        if not:
            chatlog> cd client
            client> npm install socket.io-client
            client> cd ../server
            server> npm install socket.io
            server> tsc msg.ts
            server> tsc dbIO.ts
            server> tsc connection.ts
            server> node connection.js
    connect to server:
        open client/login.html in two or more chrome windows
        login with 2 or more different names
        input the name of one window to the "Name" field in another window, write a message, click send
            All clients with the inputted name will recieve the message sent by the first client
            message will appear at bottom of page
            Message will also be logged in the mongo database
            ex: 
                One client, clientA, with name "A" is open.
                Two clients, clientB1 and clientB2, with name "B" are open.
                clientA sends message "hello world" to "B"
                both clientB1 and clientB2 will recieve message "hello world"
                New document added to 'messages' collection: "{"recipient": "B", "message": "hello world"}"
