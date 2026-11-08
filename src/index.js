import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";
import React, { Component } from "react";

const renderNameTag = (onePerson) => <NameTag key={onePerson.id} name={onePerson.name} />;

class App extends Component {

state = { people: [{name:"Sally", id: 1},
    {name: "John", id: 2},
    {name: "Juli", id: 3},
    {name: "Austin", id: 4},
    {name: "Ashley", id: 5}],
  };

render() {
const NameTagElements=this.state.people.map(renderNameTag);
return (
  <div className="App">
  <h1>Name Tag Generator</h1>
  {NameTagElements}
</div>
  )
};
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




