import React from 'react'
export default class ChannelWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrop: false
        };

        this.handleClickMinimize = this.handleClickMinimize.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleClickMinimize() {
        this.props.handleHide(this.props.item.name);
    }

    handleDropDown() {
        const isDrop = !this.state.isDrop;
        this.setState({isDrop});
    }

    render() {
        const dropDownWindow = this.state.isDrop ? 
            (
                <div className="drop-window">
                    <b>Column Options</b>
                    <ul>
                        <li>Option1</li>
                        <li>Option2</li>
                        <li>Option3</li>
                    </ul>
                </div>
            ) 
            :
             null;
        return (
            <div className="frame-class">
                <div className="item">
                    <div className="item-title">
                        <div className="item-header">
                            <div className="title-text">
                                {this.props.item.name}
                            </div>
                            <div>
                                <a href="#"
                                    onClick={this.handleDropDown}
                                >
                                    <i className="fa fa-bars icon"></i>
                                </a>
                                <a href="#"
                                    onClick={this.handleClickMinimize}
                                >
                                    <i className="fa fa-minus icon"></i>
                                </a>
                            </div>
                        </div>
                        {dropDownWindow}
                    </div>
                    <div className="item-body">
                        OptionWindow
                    </div>
                </div>
            </div>
        )
    }
}
