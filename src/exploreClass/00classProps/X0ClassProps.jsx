import React, { Component } from "react";
import X1ChildProp from "./X1ChildProp";

export default class X0ClassProps extends Component {
  render() {
    this.number = 78;
    return (
      <>
        <h2>The number is {this.number}</h2>
        <button
          onClick={() => {
            console.log(this.number);
            this.number = this.number + 1;
          }}
        >
          Click
        </button>
        <X1ChildProp number={this.number} />
      </>
    );
  }
}
