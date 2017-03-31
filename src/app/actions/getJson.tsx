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
        // var xmlHttp = new XMLHttpRequest();
        // xmlHttp.onreadystatechange = function() {
        //     if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
        //         console.log(xmlHttp.responseText);
        //     } else {
        //         console.log(xmlHttp.statusText, xmlHttp.responseText);
        //     }
        // }
        // xmlHttp.open("GET", "https://2mkxieiyztx2ogk3.myfritz.net:8083/all", true); // true for asynchronous
        // xmlHttp.send(null);
    }
}
