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
    
    displayOvo(name) {
        this.setPage(1);
    }

    displayLacto(name) {
        this.setPage(2);
    }

    displayVegan(name) {
        this.setPage(3);
    }

    displayGluten(name) {
        this.setPage(4);
    }

    displayHome(name) {
        this.setPage(0);
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
                            <button className={"button"} type="button" onClick={() => {this.displayOvo('Ovo-Lacto-Vegetarian')}}>Ovo-Lacto-Vegetarian</button>&nbsp;
                            <button className={"button"} type="button" onClick={() => {this.displayLacto('Vegetarian')}}>Lacto-Vegetarian</button>&nbsp;
                            <button className={"button"} type="button" onClick={() => {this.displayVegan('Vegan')}}>Vegan</button>&nbsp;
                            <button className={"button"} type="button" onClick={() => {this.displayGluten('Gluten Free')}}>Gluten-Free</button>
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
                            name={"Cafe Flora"} 
                            add={"2901 E Madison St, Seattle, WA 98112"}
                            rating={5}
                        />
                        <BasicInfo 
                            name={"Sunlight Cafe"}
                            add={"6404 9th Ave NE, Seattle, WA 98115"}
                            rating={4}
                        />
                        <BasicInfo 
                            name={"World Pizza"}
                            add={"672 S King St, Seattle, WA 98104"}
                            rating={5}
                        />
                    </div>
                </div>
            )
        } else if (this.state.page === 2) {
            return (
                <div className={"bigBrain_sub"}>
                    <div className={"subpage"}>
                        <div  className={"subheader_text"}>
                            Lacto-Vegetarian
                        </div>
                        <BasicInfo 
                            name={"Cafe Flora"} 
                            add={"2901 E Madison St, Seattle, WA 98112"}
                            rating={5}
                        />
                        <BasicInfo 
                            name={"Anar"}
                            add={"2040 6th Ave, Seattle, WA 98121"}
                            rating={4}
                        />
                        <BasicInfo 
                            name={"JaK's Grill"}
                            add={"3701 NE 45th St, Seattle, WA 98105"}
                            rating={2}
                        />
                    </div>
                </div>
            )
        } else if (this.state.page === 3) {
            return (
                <div className={"bigBrain_sub"}>
                    <div className={"subpage"}>
                        <div  className={"subheader_text"}>
                            Vegan
                        </div>
                        <BasicInfo 
                            name={"Harvest Beat"} 
                            add={"1711 N 45th St, Seattle, WA 98103"}
                            rating={5}
                        />
                        <BasicInfo 
                            name={"Wayward Vegan Cafe"}
                            add={"801 NE 65th St, Seattle, WA 98115"}
                            rating={4}
                        />
                        <BasicInfo 
                            name={"Pizza Pi Vegan Pizzeria"}
                            add={"5500 University Way, Seattle, WA 98105"}
                            rating={4}
                        />
                    </div>
                </div>
            )
        } else if (this.state.page === 4) {
            return (
                <div className={"bigBrain_sub"}>
                    <div className={"subpage"}>
                        <div  className={"subheader_text"}>
                            <div className={"subheader_text"}>
                                Gluten-Free
                            </div>
                            <div className={"searchbar"}>
                                <input type="text" placeholder="Search.."></input>
                            </div>
                        </div>
                        <BasicInfo 
                            name={"Niche Gluten Free Cafe & Bakery"} 
                            add={"808 12th Ave, Seattle, WA 98122"}
                            rating={4}
                        />
                        <BasicInfo 
                            name={"Nuflours Bakery"}
                            add={"518 15th Ave E, Seattle, WA 98112"}
                            rating={5}
                        />
                        <BasicInfo 
                            name={"Capital Cider"}
                            add={"818 E Pike St, Seattle, WA 98122"}
                            rating={4}
                        />
                    </div>
                </div>
            )
        }

        return (""); // an empty page
    }

    render() {
        return ( 
        <div className="App">
            <Header displayHome={this.displayHome.bind(this)}/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {this.renderPage()}
        </div>
        );
  }
}

export default RealApp;
