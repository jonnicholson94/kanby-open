
export type TaskComment = {
    commentDate: number,
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

export type SubTask = {
    title: string,
    status: boolean
}

export type Status = "Backlog" | "In progress" | "Paused" | "Completed"

export type Category = "General" | "Work" | "Life" | "Health" | "Learning"

export enum CategoryColour {
    GENERAL = "var(--purple)",
    WORK = "var(--blue)",
    LIFE = "var(--green)",
    HEALTH = "var(--light-pink)",
    LEARNING = "var(--grey)"
}