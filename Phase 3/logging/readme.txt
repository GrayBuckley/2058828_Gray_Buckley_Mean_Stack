Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Debuggable Logger
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\logging\.gitignore : ensures log.json and compiled js are not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\logging\record.ts : type declaration and constructor for record objects
2058828_Gray_Buckley_Mean_Stack\Phase 3\logging\fileIO.ts : functions to abstract file operations
2058828_Gray_Buckley_Mean_Stack\Phase 3\logging\main.ts : interactions with the console

How to use:
    node.js required
    GNU make recomended
    compile:
        if GNU make is installed:
            logging> make all
        if not:
            logging> tsc record.ts
            logging> tsc fileIO.ts
            logging> tsc main.ts
    run:
        logging> node main.js
    compile + run:
        if GNU make:
            logging> make run
        if not:
            logging> tsc record.ts
            logging> tsc fileIO.ts
            logging> tsc main.ts
            logging> node main.js