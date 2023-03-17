
export type TaskComment = {
    commentDate: string,
    comment: string
}

export type Task = {
    id: string,
    userId: string,
    title: string,
    description: string,
    dueDate: string,
    category: string,
    comments: TaskComment[],
    status: string,
    createdDate: string,
    completedDate: string
}

export type IndividualTask = {
    parentTaskId: string,
    accountId: string,
    title: string,
    status: string,
    createdDate: string
}