import React from "react";
import Board from "./Board";
import DisplayInfo from "./DisplayInfo";
import "./css/Display.css";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="display-board">
          <Board />
        </div>
        <DisplayInfo
          type={this.props.type}
          age={this.props.age}
          elements={this.props.elements}
        />
      </div>
    );
  }
}
export default Display;
