import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <>
        <h1>{number}</h1>
        <h2>{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log("hi");
              }
            );
          }}
        >
          +1
        </button>
      </>
    );
  }
}

export default Counter;
