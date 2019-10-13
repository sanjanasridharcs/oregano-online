import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import BasicInfo from './BasicInfo';

class RealApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }
    
    display(name) {
        this.setPage(1);
    }

    setPage(page) {
        this.setState( (c) => {
            c.page = page;
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
                </div>
            );
        } else if (this.state.page === 1) {
            return (
                <div className={"bigBrain_sub"}>
                    <div className={"subpage"}>
                        <div  className={"subheader_text"}>
                            Ovo-Lacto-Vegetarian
                        </div>
                        <BasicInfo 
                            name={"ABC"} 
                            add={"Address: 1234 NE UW St Seattle, WA"}
                        />
                        <BasicInfo />
                        <BasicInfo />
                    </div>
                </div>
            )
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
