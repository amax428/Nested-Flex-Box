import React, { Component } from 'react'
import ChannelWindow from './channel-window';
import {connect} from 'react-redux';
import OptionWindow from './option-window';
import MinOptionWindow from './min-option-window';

import * as actions from '../actions';

class View extends Component {
  render() {
    const list = this.props.channelData.channelList.map((item, index) => {
        if(item.isShow) {
            return (<ChannelWindow 
            key={index} 
            item={item}
            handleHide={this.props.handleShow} />);
        } else {
        }
    });

    return (
    <div className="row">
        {this.props.showOptionWindow ? <OptionWindow data={this.props.channelData.channelList}/> : <MinOptionWindow />}
        {list}
        <div className="frame-class">
            <button onClick={this.props.handleCreate}>Add Column</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        number: state.channelReducer.number,
        channelData: state.channelReducer,
        showOptionWindow: state.showOptionWindowReducer
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreate: () => {dispatch(actions.createChannel())},
        handleShow: (name) =>{dispatch(actions.showChannelWindow(name))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(View)
