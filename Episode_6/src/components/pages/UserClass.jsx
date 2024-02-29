/* eslint-disable react/prop-types */
// import React from "react";
import { Component } from "react";

// Its a normal JS class
class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // State Variable
    // state is reserved words
    this.state = {
      count: 100,
      count2: 50,
    };
    console.log(this.props.userName + " -- Constructor function");
    // this.clickHandler = {};
  }

  componentDidMount() {
    console.log(this.props.userName + " -- Component did mount");
  }
  render() {
    console.log(this.props.userName + " -- Render function");
    return (
      <div>
        <h2>Name: {this.props.userName}</h2>
        <h3>Location:{this.props.location}</h3>
        <h4>Contact: {this.props.contact}</h4>
        <h5>Count: {this.state.count}</h5>
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1;
            // Do not mutate state directly. Use setState().
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase the Count
        </button>
      </div>
    );
  }
}
export default UserClass;
