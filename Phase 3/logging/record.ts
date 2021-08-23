export type record = {
    firstName: string,
    lastName: string,
    gender: string,
    email: string,
    date: Date
}

export function newRecord(firstName: string, lastName:string, gender:string, email:string):record{
    return {
        firstName: firstName,
        lastName:lastName,
        gender:gender,
        email:email,
        date: new Date()
    }
}