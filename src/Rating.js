import React, { Component } from 'react';


class Rating extends Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    renderStar(val) {
        let ac = "";
        if (this.props.rating >= val) {
            ac = "checked";
        }
        return (
            <span className={"fa fa-star " + ac}></span>
        );  
    }

    render() {
      return (
        <div className={"subtextright"}>
          Rating: 
          {this.renderStar(1)}
          {this.renderStar(2)}
          {this.renderStar(3)}
          {this.renderStar(4)}
          {this.renderStar(5)}
        </div> 
        );
    }
  }
  
  export default Rating;