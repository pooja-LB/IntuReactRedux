
import { UPDATE_DATA } from '../actionTypes' 

const initialState = {
};
export function tablistReducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA:
            console.log(state, "payload")
            return {
                ...state,
              data: action.payload
            }
        default:
            return state
    }
}

