import React from "react";

export default class Footer extends React.Component {
  render() {
    console.log(this.props);

    return (
      <>
        <h1>This is Footer</h1>
        <p>from class Components {this.props.name}</p>
      </>
    );
  }
}

// rcc for es7 react snippets
