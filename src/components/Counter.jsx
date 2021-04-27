import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  changeCount = (e) => {
    console.log(e);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button type="button" onClick={this.changeCount}>
          ClickME
        </button>
      </>
    );
  }
}

export default Counter;
