
import {UPDATE_DATA} from '../actionTypes'



export const updateDataAction = payload => {
    console.log(payload, "hhhh")
    return {
        type: UPDATE_DATA,
        payload
    }
}

export const updateData = (payload) => {
    console.log(payload ,"updateData")
    return dispatch => {
        dispatch(updateDataAction(payload))
    }
}

