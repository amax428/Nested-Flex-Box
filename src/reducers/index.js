import {combineReducers} from 'redux';
import showOptionWindowReducer from './showOptionWindowReducer';
import {channelReducer} from './channelReducer';

const reducers = combineReducers({
    showOptionWindowReducer, channelReducer
});

export default reducers;