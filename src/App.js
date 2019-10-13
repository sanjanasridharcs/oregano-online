import React from 'react';
//import logo from './logo.svg';
//import bg1 from "./spices_background.jpg";
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"bigBrain_main"}>
        <div className={"headertext"}>
          Oregano
        </div>
        <div>
        <button className={"button_ovolacto"} type="button" onClick = "alert('Ovo-Lacto-Vegetarian')">Ovo-Lacto-Vegetarian</button>
        <button className={"button_vegetarian"} type="button" onClick = "alert('Vegetarian')">Vegetarian</button>
        <button className={"button_vegan"} type="button" onClick="alert('Vegan')">Vegan</button>
        <button className={"button_glutenfree"} type="button" onClick="alert('Gluten Free')">Gluten-Free</button>
        </div>
      </div>
    </div>
  );
}

export default App;
