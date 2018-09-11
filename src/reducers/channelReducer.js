import * as actionType from '../actions/ActionType';

const initialState = {
    number: 0,
    channelList: []
}

const initialWindowState = true;

export function channelReducer(state = initialState, action) {
    let newState = {...state};
    switch (action.type) {
        case actionType.CREATE_CHANNEL:
            newState.number = newState.number + 1; 
            let name = "Channel " + newState.number.toString();
            newState.channelList.push({
                name: name,
                isShow: true
            });
            return newState;
        case actionType.SHOW_CHANNEL_WINDOW:
            var index = newState.channelList.findIndex(p => p.name == action.channelName);
            newState.channelList[index].isShow = !newState.channelList[index].isShow;
            return newState;
        case actionType.DELETE_CHANNEL_WINDOW:
            var index = newState.channelList.findIndex(p => p.name == action.channelName);
            let list = [...newState.channelList.slice(0, index), ...newState.channelList.slice(index + 1, newState.channelList.length)];
            newState.channelList = list;
            return newState;
        default:
            return state;
    }
}
