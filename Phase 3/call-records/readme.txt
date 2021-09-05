Repo URL: https://github.com/GrayBuckley/2058828_Gray_Buckley_Mean_Stack.git
Project name: Call Records
Files:
2058828_Gray_Buckley_Mean_Stack\Phase 3\call-records\.gitignore : ensures call_data and node module are not tracked
2058828_Gray_Buckley_Mean_Stack\Phase 3\call-records\Makefile : Makefile for package installation
2058828_Gray_Buckley_Mean_Stack\Phase 3\call-records\script.js : script for mongo upload

How to use:
    node.js required
    GNU make recomended

    Create call_data.json in call-records directory
    if GNU make is installed:
        call-records> make run
    if not:
        call-records> npm install mongodb
        call-records> node .\script.js