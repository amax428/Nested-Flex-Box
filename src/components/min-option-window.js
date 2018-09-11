import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class MinOptionWindow extends React.Component {
    render() {
        return (
            <div className="frame-class min-window">
                <a href="#"
                    onClick={this.props.handleShow}
                >
                    <i className="fa fa-caret-right icon"></i>
                </a>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.showOptionWindowReducer
    };
}

const mapDispatchToProps = (dispatch) => {
  return { 
      handleShow: () => {dispatch(actions.showOptionWindow())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinOptionWindow);