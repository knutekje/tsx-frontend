export type taskType = {
    id: number,
    title: string,
    description: string,
    status: string,
    photoUrl: string,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date
    user: userType

}

export type taskCreateDto = {
    title: string,
    description: string,
    status: string,
    photoUrl: string,
    dueDate: Date,
    
}

export type userType = {
     
        id: number,    
        username: string,
        email: string,
        displayName: string, 
        role: string,
        createdAt: Date,
        updatedAt: Date,
        tasks: taskType[]
}



