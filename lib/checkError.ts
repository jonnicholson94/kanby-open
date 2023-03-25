
import { AuthErrorResponses, AuthErrors } from "../types/auth"

export const checkError = (message: string) => {

    console.log(message);

    if (message === AuthErrors.ACCOUNT_EXISTS) {
        return AuthErrorResponses.ACCOUNT_EXISTS
    } else if (message === AuthErrors.PASSWORD_LENGTH) {
        return AuthErrorResponses.SHORT_PASSWORD
    } else if (message === AuthErrors.ACCOUNT_INVALID) {
        return AuthErrorResponses.ACCOUNT_INVALID
    } else if (message === AuthErrors.SECURITY_ERROR) {
        return AuthErrorResponses.MULTIPLE_REQUESTS
    }
}