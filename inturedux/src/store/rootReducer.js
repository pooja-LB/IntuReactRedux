
import {tablistReducer} from './logs/index';


const initialState = {
    list: {
        tabledata :"DEL",
        data :[]
    }
    // list: tablistReducer
}



export function rootReducer(state = initialState, action) {
    return {
        list: tablistReducer(state.list, action)
    }
}