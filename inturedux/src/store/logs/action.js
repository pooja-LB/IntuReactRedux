
import { UPDATE_DATA, RENDER_TABLE_DATA, RENDER_TIMELINE_DATA, UPDATE_STATUS} from '../actionTypes'



export const updateDataAction = payload => {
    console.log(payload, "hhhh")
    return {
        type: UPDATE_DATA,
        payload
    }
}

export const updateData = payload => {
    console.log(payload ,"updateData")
    return dispatch => {
        dispatch(updateDataAction(payload))
    }
}

export const renderTableData = (payload) => {
    console.log(payload, "tableaction")
    return {
        type: RENDER_TABLE_DATA,
        payload : payload
    }
}

export const renderData = (payload) => {
    console.log(payload, "renderData")
    return dispatch => {
        dispatch(renderTableData(payload))
    }
}

export const renderTimelineData = (payload) => {
    console.log(payload, "renderTimelineDatarenderTimelineData")
    return{
        type: RENDER_TIMELINE_DATA,
        payload: payload
    }
}

export const renderTimeline = (payload) => {
    console.log(payload, "rendertimeline")
    return dispatch => {
        dispatch(renderTimelineData(payload))
    }
}
