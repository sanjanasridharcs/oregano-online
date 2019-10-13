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
        <button className={"button"} type="button" onClick = "alert('Ovo-Lacto-Vegetarian')">Ovo-Lacto-Vegetarian</button>&nbsp;
        <button className={"button"} type="button" onClick = "alert('Vegetarian')">Vegetarian</button>&nbsp;
        <button className={"button"} type="button" onClick="alert('Vegan')">Vegan</button>&nbsp;
        <button className={"button"} type="button" onClick="alert('Gluten Free')">Gluten-Free</button>
        </div>
      </div>
    </div>
  );
}

export default App;
