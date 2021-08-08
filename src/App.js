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
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 mr-3 text-lg">Timeview</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>
            <label htmlFor="ageentry" className="text-gray-600 mr-2 text-sm">
              Age
            </label>
            <AgeEntry
              id="ageentry"
              onSetAge={this.handleAge}
              age={this.state.age}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            />
          </div>
        </header>
        Age:
        {this.state.age}
        <WeeksView age={this.state.age} />
      </main>
    );
  }
}

export default App;
