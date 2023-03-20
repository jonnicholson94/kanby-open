import { Task } from "./types/dataSchema";

export const data: Task[] = [
    {
        id: "123",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Health",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "In progress",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {   
        id: "456",
        userId: "54321",
        title: "Task",
        description: "Blablablablabla",
        dueDate: "01/03/2023",
        category: "Work",
        comments: [{
            commentDate: "01/03/2023",
            comment: "Example comment yo"
        }],
        status: "Backlog",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "789",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Health",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "In progress",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "101",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Life",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "In progress",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "102",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Learning",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "In progress",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "102",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "General",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "Paused",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "102",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Life",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "Completed",
        createdDate: "03/03/2023",
        completedDate: null
    },
    {
        id: "102",
        userId: "12345",
        title: "Example task",
        description: "Blablablablabla",
        dueDate: "12/03/2023",
        category: "Learning",
        comments: [{
            commentDate: "10/03/2023",
            comment: "Example comment yo"
        }],
        status: "Completed",
        createdDate: "03/03/2023",
        completedDate: null
    },
]