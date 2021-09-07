Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Mongo Courses
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\server\server.js : node server for db ops
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\server\Makefile : makefile for package installation
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\server\.gitignore : ensure mongo module is not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\client\main.html : main page for navigation
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\client\add.html : page for adding new course
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\client\update.html : page for updating course
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\client\delete.html : page for deleting course
2058828_Gray_Buckley_Mean_Stack\Phase 3\mongo-site\client\fetch.html : page for reading list of courses

How to use:
    node.js required
    GNU make recomended
    Start server:
        if GNU make is installed: 
            mongo-site\server> make run
        if not:
            mongo-site\server> npm install mongodb
            mongo-site\server> node ./server.js
    Start client:
        open client\main.html in chrome