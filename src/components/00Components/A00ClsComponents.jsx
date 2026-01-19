import React, { Component } from "react";

export default class A00ClsComponents extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        A00ClsComponents
        <p>{this.props.name}</p>
      </div>
    );
  }
}
