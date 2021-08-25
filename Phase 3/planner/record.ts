export type record = {
    empID: string,
    taskID: string,
    task: string,
    deadline: string
}

export function newRecord(empID: string, taskID:string, task:string, deadline:string):record{
    return {
        empID: empID,
        taskID:taskID,
        task:task,
        deadline:deadline
    }
}