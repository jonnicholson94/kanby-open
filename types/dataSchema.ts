
export type TaskComment = {
    commentDate: string,
    comment: string
}

export type Task = {
    id: string,
    userId: string,
    title: string,
    description: string,
    due_date: string,
    category: string,
    comments: TaskComment[],
    sub_tasks: string[],
    status: string,
    createdDate: string,
    completedDate: string
}

export type SubTask = {
    id: string,
    title: string,
    status: boolean,
    parent_task: string,
    user: string
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