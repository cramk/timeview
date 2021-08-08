import React from "react";
import Board from "./Board";
import "./css/Display.css";

class Display extends React.Component {
  render() {
    return (
      <div className="display">
        <div className="display-board">
          <Board />
        </div>
        <div className="display-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
          <ol>Type: {this.props.type}</ol>
          <ol>Elements: {this.props.elements}</ol>
        </div>
      </div>
    );
  }
}
export default Display;
