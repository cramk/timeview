import React from "react";
import "./App.css";
import "./styles/main.css";
import WeeksView from "./views/WeeksView";
import Header from "./components/Header";
class App extends React.Component {
  state = { age: 50 };

  handleAge = (ageValue) => {
    this.setState({ age: ageValue });
  };
  render() {
    return (
      <main>
        <Header handleAge={this.handleAge} age={this.state.age} />
        Age:
        {this.state.age}
        <WeeksView age={this.state.age} />
      </main>
    );
  }
}

export default App;
