import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "없음"
  };
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number.isRequired
  };

  render() {
    const { name, children, number } = this.props;
    return (
      <div>
        이름: {name}
        <br />
        children 값: {children}
        <br />
        숫자: {number}
      </div>
    );
  }
}

export default MyComponent;
