import React from "react";
import "./App.css";
import "./styles/main.css";
import WeeksView from "./views/WeeksView";
import AgeEntry from "./components/AgeEntry";

class App extends React.Component {
  state = { age: 50 };

  handleAge = (ageValue) => {
    this.setState({ age: ageValue });
  };
  render() {
    return (
      <main>
        <h1>Timeview</h1>
        <AgeEntry onSetAge={this.handleAge} age={this.state.age} /> Age:
        {this.state.age}
        <WeeksView />
      </main>
    );
  }
}

export default App;
