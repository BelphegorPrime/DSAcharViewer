export default function setPicker(chosenCharIndex) {
    return (dispatch) => {
        dispatch({type: "SET_CHARINDEX", chosenCharIndex})
    }
}
