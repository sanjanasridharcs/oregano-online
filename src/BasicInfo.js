
import './BasicInfo.css';
import React, { Component } from 'react';
import Rating from './Rating'

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

 
  render() {
    return (
      <div className={"subtextContainer"}>
        <div className={"subtextleft subtext"}>
          {this.props.name}<br></br>
          {this.props.add}
        </div>
        <div className={"subtextright subtext"}>
          <Rating rating={this.props.rating}/><br></br>
          <div className={"subtextright_advanced"}>
            <div></div>
          </div>
        </div>
      </div>
      );
  }
}

export default BasicInfo;
