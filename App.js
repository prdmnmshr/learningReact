import React, { Component } from "react";
import ReactDOM from "react-dom/client";


//JSX(transpiled before it reaches the JS) -PARCEL-Babel
//JSX is not a HTML in javascript
//Bable transpiled to react
//When jsx is in single line you can write it without wrapping in () bracket otherwise we have to wrap it in ();
//react element
const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    Page title - PPPP
  </h1>
);
  



//Components
// header is a Component
// Button is a Component
// input box is a Component
//2types of component
//1 - class based component - OLD
//2-functional component -NEW
//A function which returns a jsx is a functional component
// Component composition means one component in another component
const HeadingComponent = () => (
  
  <div id="container">
    <Title />
    <h1 className="heading">This is my functional component</h1>
  </div>
);

const root  = ReactDOM.createRoot(document.getElementById("root"));



root.render(<HeadingComponent/>);