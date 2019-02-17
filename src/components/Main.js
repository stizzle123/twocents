import React, { Component } from "react";
import Left from "./Left";
import Content from "./Content";
import Right from "./Right";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Left />
        <Content />
        <Right />
      </div>
    );
  }
}

export default Main;
