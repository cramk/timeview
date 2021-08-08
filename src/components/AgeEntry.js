import React from "react";
import "./css/AgeEntry.css";

class AgeEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age,
    };
  }
  /*  state = { age: 0 }; */
  handleAgeChange = (event) => {
    var age = event.target.validity.valid ? event.target.value : this.state.age;
    this.setState({
      age: age,
    });
    this.props.onSetAge(age);
  };
  render() {
    return (
      <div className="flex items-center mt-2 mb-6 ">
        <input
          ref={(ref) => (this.inputbox = ref)}
          type="number"
          pattern="[0-9]*"
          placeholder="Enter your age here"
          className="w-full pr-10 pl-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500 age-entry-field"
          onChange={this.handleAgeChange.bind(this)}
          value={this.state.age}
          min="0"
          max="150"
        />
        <svg
          className="svg-icon w-4 h-4 fill-current text-gray-500 -ml-8 z-10"
          viewBox="0 0 24 24"
        >
          <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
        </svg>
      </div>
    );
  }
}

export default AgeEntry;
