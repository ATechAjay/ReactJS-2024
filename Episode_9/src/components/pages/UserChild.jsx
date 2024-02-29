import React from "react";

class UserChild extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Child constructor");
    this.state = {};
  }
  async componentDidMount() {
    // console.log("Child componentDidMount");

    // API call
    const response = await fetch("https://api.github.com/users/atechajay");
    const data = await response.json();
    console.log(data);
  }
  render() {
    // console.log("Child render");
    return (
      <>
        <h1>Hello from the user child component. 😍</h1>
      </>
    );
  }
}

export default UserChild;
