import React, { Component } from 'react'

export default class ChannelListItem extends Component {
  constructor(props) {
      super(props);
      this.handleClickShow = this.handleClickShow.bind(this);
      this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickShow() {
      this.props.handleHide(this.props.item.name);
  }

  handleClickDelete() {
      this.props.handleDelete(this.props.item.name);
  }

  render() {
    return (
      <div className="channel-list-item-page">
        <a href="#"
          onClick={this.handleClickShow}
        >
            {this.props.item.isShow ? <i className="fa fa-plus icon"></i> : <i className="fa fa-minus icon"></i>}
            
        </a>
        {this.props.item.name}
        <a href="#"
          onClick={this.handleClickDelete}
        ><i className="fa fa-trash icon"></i></a>
      </div>
    )
  }
}
