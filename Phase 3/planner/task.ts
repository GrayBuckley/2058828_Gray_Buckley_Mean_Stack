export type task = {
    empID: string,
    taskID: string,
    task: string,
    deadline: string
}

export function newTask(empID: string, taskID:string, task:string, deadline:string):task{
    return {
        empID: empID,
        taskID:taskID,
        task:task,
        deadline:deadline
    }
}

function conflictingTask(l:task, r:task):boolean{
    return l.taskID == r.taskID;
}

export function pushTask(log:task[], t:task){
    let conflict = false;
    log.forEach(checkT => {
        conflict = conflict || conflictingTask(t,checkT);
    });
    if(!conflict)
        log.push(t);
}

export function removeTask(log:task[], id:string){
    let found:number|null = null;
    for(let i = 0; i < log.length; i++)
        if(log[i].taskID == id) found = i;
    if(found !== null)
        log.splice(found,1);
}