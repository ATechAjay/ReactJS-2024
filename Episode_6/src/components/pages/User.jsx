import React, { Component } from "react";
import UserClass from "./UserClass";

class User extends Component {
  constructor() {
    super();
    console.log("Parent -- Construtor Function");
  }

  componentDidMount() {
    console.log("Parent -- Component did mount");
  }
  render() {
    console.log("Parent -- Render Function");

    return (
      <div style={{ border: "1px solid red", padding: "15px" }}>
        <h2>Name: Ajay</h2>
        <h3>Location: Siwan</h3>
        <h4>Contact: @ATechAjay</h4>
        <hr />
        <UserClass
          userName={"First"}
          location={"Patna"}
          contact={"@AnnuPatna"}
        />
        <hr />
        <UserClass
          userName={"Second"}
          location={"Delhi"}
          contact={"@ShivamDelhi"}
        />
        <hr />
        <UserClass
          userName={"Third"}
          location={"Delhi"}
          contact={"@ShivamDelhi"}
        />
      </div>
    );
  }
}

export default User;
