
export type Auth = "register" | "sign-in" | "forgot-password"

export enum AuthErrorResponses {
    ACCOUNT_EXISTS = "Seems like an account with this email already exists. Please sign in instead.",
    SHORT_PASSWORD = "The password you've entered is too short - please enter a password that's longer than 6 characters.",
    ACCOUNT_INVALID = "There's been a problem signing you in. Maybe you've entered the wrong password, or an account doesn't exist with this email address",
    MULTIPLE_REQUESTS = "You can only request a password reset once every 60 seconds.",
    DEFAULT = "There's been an error, please try again."
}

export enum AuthErrors {
    PASSWORD_LENGTH = "Password should be at least 6 characters",
    ACCOUNT_EXISTS = "User already registered",
    ACCOUNT_INVALID = "Invalid login credentials",
    SECURITY_ERROR = "For security purposes, you can only request this once every 60 seconds"
}
