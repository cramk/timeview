import React, { useState, useEffect } from "react";
import Display from "../components/Display";

class WeeksView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      WEEKS_IN_LIFE: props.age * 52,
      TYPE: "WEEKS",
    };
  }

  useEffect(() => {   
    this.updateWeeks();
  }, [this.props.age]);
  
  updateWeeks = () => {
    this.state.WEEKS_IN_LIFE = this.props.age
  }

  render() {
    return (
      <main>
        <Display
          type={this.state.TYPE}
          elements={this.state.WEEKS_IN_LIFE}
          age={this.props.age}
        ></Display>
      </main>
    );
  }
}

export default WeeksView;
