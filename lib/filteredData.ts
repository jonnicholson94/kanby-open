
import { Status, Task } from "../types/dataSchema"

export const filteredData = (status: Status, list: Task[]): Task[] => {
    const filteredList = list.filter(x => {
        return x.status === status
    })

    return filteredList
}