import * as actionType from '../actions/ActionType';

const initialState = true;

const showOptionWindowReducer = (state = initialState, action) => {
    let newState = state;
    switch (action.type) {
        case actionType.SHOW_OPTION_WINDOW:
            return newState = !state;
        default:
            return state;
    }
}

export default showOptionWindowReducer;