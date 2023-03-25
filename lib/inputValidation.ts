
export const emailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)

export const validateEmail = (value: string) => {

    if (!emailRegex.test(value)) {
        return 'Enter a valid email address'
    } else {
        return ''
    }
}

export const validatePassword = (value: string) => {
    if (value.length < 6) {
        return 'Your password must be at least 6 characters'
    } else {
        return ''
    }
}