import base64 from 'base-64';
import userdata from '../constants/baseAuth';

export default function getJson(){
    return (dispatch) => {
        fetch('http://192.168.0.102:3000/all',{
            method: "get",
            headers:{
                "Authorization": "Basic "+base64.encode(userdata.username+":"+userdata.password),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
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
