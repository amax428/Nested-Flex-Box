import * as actionType from './ActionType';

export const showOptionWindow = () => ({
  type: actionType.SHOW_OPTION_WINDOW
});

export const createChannel = () => ({
  type: actionType.CREATE_CHANNEL,
});

export const showChannelWindow = (channelName) => ({
  type: actionType.SHOW_CHANNEL_WINDOW,
  channelName
});

export const deleteChannelWindow = (channelName) => ({
  type: actionType.DELETE_CHANNEL_WINDOW,
  channelName
});