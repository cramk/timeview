import React from "react";
import { useEffect, useState } from "react";
import Display from "../components/Display";

function App() {
  const [] = useState(null);
  const EXPECTED_AGE = 100; // 100 years
  const WEEKS_IN_LIFE = EXPECTED_AGE * 52;
  useEffect(() => {}, []);
  return (
    <main>
      <caption>Weeks View</caption>

      <Display type="weeks" elements={WEEKS_IN_LIFE}></Display>
    </main>
  );
}

export default App;
