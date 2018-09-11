import React from 'react'
import { connect } from 'react-redux';
import ChannelListItem from './channel-list-item'
import * as actions from '../actions';

class OptionWindow extends React.Component {
    render() {
        return (
            <div className="frame-class">
                <div className="item">
                    <div className="item-title">
                        <div className="item-header">
                            <div className="title-text">
                                Application Options
                            </div>
                            <a href="#"
                                onClick={this.props.handleHide}
                            >
                                <i className="fa fa-caret-left icon"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="item-body">
                        <div>
                            Channels
                        </div>
                        <ul>
                            {this.props.channelData.channelList.map((item, index) => (

                                <li key={index}>
                                    <ChannelListItem item={item} handleHide={this.props.handleShowChannel} handleDelete={this.props.handleDeleteChannel}/>
                                </li>
                            ))}
                            <li>End</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channelData: state.channelReducer,
        state: state.showOptionWindowReducer
    };
}

const mapDispatchToProps = (dispatch) => {
  return { 
      handleHide: () => {dispatch(actions.showOptionWindow())},
      handleShowChannel: (name) =>{dispatch(actions.showChannelWindow(name))},
      handleDeleteChannel: (name) =>{dispatch(actions.deleteChannelWindow(name))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(OptionWindow);