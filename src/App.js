import React from "react";

import "./App.css";
import WeeksView from "./views/WeeksView";
import AgeEntry from "./components/AgeEntry";

function App() {
  return (
    <main>
      <h1>Timeview</h1>
      <AgeEntry />
      <WeeksView />
    </main>
  );
}

export default App;
