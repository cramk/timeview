import React from "react";

import Display from "../components/Display";

function App() {
  const EXPECTED_AGE = 100; // 100 years
  const WEEKS_IN_LIFE = EXPECTED_AGE * 52;

  return (
    <main>
      <small>Weeks View</small>

      <Display type="weeks" elements={WEEKS_IN_LIFE}></Display>
    </main>
  );
}

export default App;
