import React from 'react';
//import logo from './logo.svg';
//import bg1 from "./spices_background.jpg";
import './App.css';
import Header from './Header';

function App() {
  function display(name) {
    alert(name);
  }
  return (
    <div className="App">
      <Header />
      <div className={"bigBrain_main"}>
        <div className={"headertext"}>
          <div>
           Oregano   
          </div>
          <div>
            <button className={"button"} type="button" onClick={() => {display('Ovo-Lacto-Vegetarian')}}>Ovo-Lacto-Vegetarian</button>&nbsp;
            <button className={"button"} type="button" onClick={() => {display('Vegetarian')}}>Vegetarian</button>&nbsp;
            <button className={"button"} type="button" onClick={() => {display('Vegan')}}>Vegan</button>&nbsp;
            <button className={"button"} type="button" onClick={() => {display('Gluten Free')}}>Gluten-Free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
