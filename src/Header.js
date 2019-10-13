
import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <div className="Header">
            <div className="Headertext"> 
                Oregano
            </div>
            <div className="home_button_div">
            <button className={"homebutton"} type="button" onClick={() => {this.props.displayHome('Home')}}>Home</button>
            </div>
        </div>
      );
  }
}

export default Header;
