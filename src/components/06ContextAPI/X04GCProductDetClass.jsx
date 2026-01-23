import React, { Component } from "react";
import { ProductContext } from "./X01ParentShop";

export default class X04GCProductDetClass extends Component {
  render() {
    return (
      <div>
        <ProductContext.Consumer>
          {/* Class component doesn't Hooks to return data
                so use anonymous function inside the Context tag
                get the value */}
          {(value) => {
            return (
              <div>
                <h5>Name --- {value.name}</h5>
                <h5>Price --- {value.price}</h5>
                <h5>Desc --- {value.desc}</h5>
              </div>
            );
          }}
        </ProductContext.Consumer>
      </div>
    );
  }
}
