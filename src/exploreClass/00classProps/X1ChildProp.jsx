import React, { Component } from "react";
import X2GrandChild from "./X2GrandChild";

export default class X1ChildProp extends Component {
  render() {
    this.info = {
      name: "deva",
      age: 28,
    };
    return (
      <>
        <h1>From Child : {this.props.number}</h1>
        <X2GrandChild number={this.props.number} info={this.info} />
      </>
    );
  }
}
