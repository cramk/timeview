import React from "react";
import "./css/Square.css";

class Square extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.past
            ? `square past ${this.props.currentyear ? "pulse" : ""}`
            : "square"
        }
        id={`square-week-${this.props.elementkey}`}
      >
        {/* TODO */}
      </div>
    );
  }
}

export default Square;
