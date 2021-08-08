import React, { useState, useEffect } from "react";
import Display from "../components/Display";

function WeeksView(props) {
  const [weeks, setWeeks] = useState(props.age * 52);
  console.log("age", props.age);
  useEffect(() => {
    setWeeks(props.age * 52);
  }, [props.age]);
  console.log(`state is ${JSON.stringify(weeks)}`);
  return (
    <main>
      <Display type="WEEKS" elements={weeks} age={props.age}></Display>
    </main>
  );
}

export default WeeksView;
