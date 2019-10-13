
import './BasicInfo.css';
import React, { Component } from 'react';

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

 
  render() {
    return (
      <div>
        <div className={"subtextleft"}>
          {this.props.name}<br></br>
          {this.props.add}
        </div>
        <div className={"subtextright"}>
          Rating: Star Icons yay<br></br>
          Read Reviews
        </div>
      </div>
      );
  }
}

export default BasicInfo;
