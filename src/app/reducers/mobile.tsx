const initialState = {
    json: {},
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case "GOT_JSON":
            return {...state, json: action.json}
        default:
            return state;
    }
}
