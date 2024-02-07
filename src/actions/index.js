export const increment = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}

export const decrement = (num) => {
    return {
        type: "DECREMENT",
        payload: num
    }
}

export const multiply = (num) => {
    return {
        type: "MULTIPLY",
        payload: num
    }
}

export const divide = (num) => {
    return {
        type: "DIVIDE",
        payload: num
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }
}

export const login = () => {
    return {
        type: "LOGIN"
    }
}