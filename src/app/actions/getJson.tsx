export default function getJson(){
    return (dispatch) => {
        fetch('http://192.168.0.102:3000/all')
            .then((response) => {
                return response.json()
            })
            .then((responseJson) => {
                dispatch({type: "GOT_JSON", json: responseJson})
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
