import React from "react";
import Square from "./Square";
import "./css/Board.css";

class Board extends React.Component {
  state = { maxElements: 52 * 100 };
  renderSquares() {
    const squares = [];
    let useElements = this.state.maxElements;
    //always render 100 years of elements
    if (this.state.maxElements < this.props.elements) {
      useElements = this.props.elements;
    }
    //if age is > 100, render age elements
    for (let i = 0; i < useElements; i++) {
      squares.push(
        <Square
          key={i}
          elementkey={i}
          past={i <= this.props.elements}
          currentyear={
            i >= this.props.elements - 52 && i <= this.props.elements
          }
        ></Square>
      );
    }
    return squares;
  }

  render() {
    return <div>{this.renderSquares()}</div>;
  }
}

export default Board;
