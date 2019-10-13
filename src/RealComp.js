import React, { Component } from 'react';
import './App.css';
import Header from './Header';

class RealApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }
    
    display(name) {
        alert(name);
    }

    setPage(page) {
        this.setState( (c) => {
            this.state.page = page;
            return c;
        });
    }

    renderPage() {
        if (this.state.page === 0) { // the home page
            return (
            <div className={"bigBrain_main"}>
                <div className={"headertext"}>
                    <div>
                    Oregano   
                    </div>
                    <div>
                    <button className={"button"} type="button" onClick={() => {this.display('Ovo-Lacto-Vegetarian')}}>Ovo-Lacto-Vegetarian</button>&nbsp;
                    <button className={"button"} type="button" onClick={() => {this.display('Vegetarian')}}>Vegetarian</button>&nbsp;
                    <button className={"button"} type="button" onClick={() => {this.display('Vegan')}}>Vegan</button>&nbsp;
                    <button className={"button"} type="button" onClick={() => {this.display('Gluten Free')}}>Gluten-Free</button>
                    </div>
                </div>
            </div>);
        }
        return (""); // an empty page
    }

    render() {
        return ( 
        <div className="App">
            <Header />
            {this.renderPage()}
        </div>
        );
  }
}

export default RealApp;
