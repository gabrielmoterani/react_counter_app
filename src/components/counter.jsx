import React, { Component } from "react";

class Counter extends Component {

  render() {
    const {onDelete, onIncrement, onDecrement, id, children, value} = this.props
    return (
      <div>
        {children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(id)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(id)}
          className="btn btn-secondary btn-sm m-1"
          disabled={value <= 0}
        >
          -
        </button>
        <button onClick={() => onDelete(id)} className="btn btn-danger btn-sm m-2">X</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count  = this.props.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
