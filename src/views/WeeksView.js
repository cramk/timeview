import React, { useState, useEffect } from "react";
import Display from "../components/Display";

function WeeksView(props) {
  const [weeks, setWeeks] = useState(props.age * 52);

  useEffect(() => {
    setWeeks(props.age * 52);
  }, [props.age]);

  return (
    <main>
      <Display type="WEEKS" elements={weeks} age={props.age}></Display>
    </main>
  );
}

export default WeeksView;
