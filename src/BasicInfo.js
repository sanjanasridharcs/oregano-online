
import './BasicInfo.css';
import React, { Component } from 'react';
import Rating from './Rating'

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModel: false
    }
  }
 
  render() {
    return (
      <div className={"subtextContainer"} onClick={() => {this.props.renderModel(true, this.props.name, this.props.add, this.props.rating)}}>
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
