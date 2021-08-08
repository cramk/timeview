import React from "react";

import AgeEntry from "./AgeEntry";

const Header = (props) => {
  /*   handleAge = (ageValue) => {
    this.setState({ age: ageValue });
  }; */
  return (
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
          onSetAge={props.handleAge}
          age={props.age}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        />
      </div>
    </header>
  );
};

export default Header;
