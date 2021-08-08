import React from "react";

import "./css/DisplayInfo.css";

class DisplayInfo extends React.Component {
  render() {
    let percentage = (this.props.age <= 100 ? this.props.age : 100) / 100;
    console.log("percentage", percentage);
    return (
      <div className="display-info">
        <h2 className="tracking-widest text-xs title-font font-thin text-blue-100 mb-1">
          TYPE
        </h2>
        <h1 className="title-font text-xs font-light text-blue-300 mb-3">
          {this.props.type}
        </h1>
        <h2 className="tracking-widest text-xs title-font font-thin text-blue-100 mb-1">
          WEEKS
        </h2>
        <h1 className="title-font text-xs font-light text-blue-300 mb-3">
          {this.props.elements}
        </h1>
        <h2 className="tracking-widest text-xs title-font font-thin text-blue-100 mb-1">
          AGE
        </h2>
        <h1 className="title-font text-xs font-light text-blue-300 mb-3">
          {this.props.age}
        </h1>
      </div>
    );
  }
}
export default DisplayInfo;
