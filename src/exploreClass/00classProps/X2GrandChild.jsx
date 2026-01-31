import React, { Component } from "react";

export default class X2GrandChild extends Component {
  render() {
    let { name, age } = this.props.info; //Props Destructuring...
    return (
      <>
        <h3>From Grand Child {this.props.number}</h3>
        <h3>From Grand Child {name}</h3>
        <h3>From Grand Child {age}</h3>
      </>
    );
  }
}
