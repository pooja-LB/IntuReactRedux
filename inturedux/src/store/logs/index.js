
import { UPDATE_DATA, RENDER_TABLE_DATA, RENDER_TIMELINE_DATA, UPDATE_STATUS } from '../actionTypes' 

const initialState = {
    tabledata : "DEL"
};
export function tablistReducer (state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA:
            console.log(initialState, "payload")
            return {
                ...state,
              data: action.payload
            }

        case RENDER_TABLE_DATA:
            console.log("sdffsdf" ,action.payload)
            return {
                ...state,
                tabledata: action.payload
            }
        case RENDER_TIMELINE_DATA:
            console.log(action.payload, "payloadtimeline")
            return{
                ...state,
                timelinedata: action.payload
            }

        default:
            return state
    }
}

