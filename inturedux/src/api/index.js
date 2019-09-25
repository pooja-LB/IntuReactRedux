import axios from 'axios';
const url = "https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank";
const body = { 'email': 'mayankmittal@intugine.com' }
axios.defaults.headers.Authorization = "Bearer tTU3gFVUdP";

export const getData = () => async (dispatch) => {
    const promise = await axios.post(url, body);
    const data = promise.data.data;

    dispatch({
        type: "UPDATE_DATA",
        payload: data
    });

}
