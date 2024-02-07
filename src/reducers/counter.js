const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        case "MULTIPLY":
            return state * action.payload;
        case "DIVIDE":
            return state / action.payload;
        case "CLEAR":
            return state = 0;
        default:
            return state;
    }
};

export default counterReducer;
