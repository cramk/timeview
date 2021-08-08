import React from "react";
import Square from "./Square";
import "./css/Board.css";

class Board extends React.Component {
  renderSquares(numSquares) {
    const squares = [];
    for (let i = 0; i < numSquares; i++) {
      squares.push(<Square key={i}></Square>);
    }
    return squares;
  }

  render() {
    const status = "Current Age";

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderSquares(100)}
      </div>
    );
  }
}

export default Board;
