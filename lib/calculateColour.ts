
import { CategoryColour } from "../types/dataSchema"

export const calculateColour = (category) => {
    if (category === "General") {
        return CategoryColour.GENERAL
    } else if (category === "Health") {
        return CategoryColour.HEALTH
    } else if (category === "Learning") {
        return CategoryColour.LEARNING
    } else if (category === "Life") {
        return CategoryColour.LIFE
    } else if (category === "Work") {
        return CategoryColour.WORK
    } else {
        return "var(--purple)"
    }
}