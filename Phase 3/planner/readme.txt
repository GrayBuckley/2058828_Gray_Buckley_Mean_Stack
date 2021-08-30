Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Task Planner
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\.gitignore : ensures log.json and compiled js are not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\task.ts : type declaration and constructor for task objects
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\server\fileIO.ts : server file operations
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\server\httpController.ts : http server listener
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\client\client.html : html page for client UI
2058828_Gray_Buckley_Mean_Stack\Phase 3\planner\client\controller.ts : http client and DOM operations


How to use:
    node.js required
    GNU make recomended
    compile:
        if GNU make is installed:
            planner> make all
        if not:
            planner> tsc task.ts
            planner> tsc server/fileIO.ts
            planner> tsc server/httpController.ts
            planner> tsc client/controller.ts
    run server:
        planner> node main.js
    compile + run server:
        if GNU make:
            planner> make run
        if not:
            planner> tsc task.ts
            planner> tsc server/fileIO.ts
            planner> tsc server/httpController.ts
            planner> tsc client/controller.ts
            planner> node main.js
    open client: open Phase 3/planner/client/client.html in chrome