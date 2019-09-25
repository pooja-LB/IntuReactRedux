
import {tablistReducer} from './logs/index';


const initialState = {
    list: ''
}



export function rootReducer(state = initialState, action) {
    return {
        list: tablistReducer(state.list, action)
    }
}