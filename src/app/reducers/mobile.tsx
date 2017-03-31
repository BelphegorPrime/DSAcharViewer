const initialState = {
    json: {},
    chosenChar: {},
    chosenCharIndex: 0,
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case "GOT_JSON":
            return {...state, json: action.json, chosenChar: action.json[state.chosenCharIndex]}
        case "SET_CHARINDEX":
            return {...state, chosenCharIndex: action.chosenCharIndex, chosenChar: state.json[action.chosenCharIndex]}
        default:
            return state;
    }
}
