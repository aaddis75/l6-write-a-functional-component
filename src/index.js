import React from "react";
import ReactDOM from "react-dom";
import individualNames from "./data.js";
import NameTag from "./NameTag";
import "./styles.css";

const renderNameTag = (onePerson) => <NameTag key={onePerson.id} name={onePerson.name} />;

const App = () => {

const NameTagElements = individualNames.map(renderNameTag);
return (
  <div className="App">
  <h1>Name Tag Generator</h1>
  {NameTagElements}
</div>
)
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




