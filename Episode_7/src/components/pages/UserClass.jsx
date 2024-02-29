import React from "react";
import UserChild from "./UserChild";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Ajay",
      lastName: "Yadav",
      count: 0,
    };
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    const { name } = this.props;

    const clickHandler = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };

    // console.log("Parent render");
    return (
      <>
        <h1>Hello from the user class. {name}</h1>
        <p>This is the state variable1: {this.state.firstName}</p>
        <p>This is the state variable2: {this.state.lastName}</p>
        <p>This is the state variable3: {this.state.count}</p>
        <button onClick={clickHandler}>Count</button>
        <UserChild />
      </>
    );
  }
}

export default UserClass;

/*
Parent child component lifecycle methods relationship:
- Parent constructor
- Parent render
- Child constructor
- Child render
- Child componentDidMount
- Parent componentDidMount
*/

/*
Parent child component lifecycle methods relationship:
- Parent constructor
- Parent render
- Child-1 constructor
- Child-1 render
- Child-2 constructor
- Child-2 render
- Child-2 componentDidMount
- Child-1 componentDidMount
- Parent componentDidMount
*/
